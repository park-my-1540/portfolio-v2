"use client";

import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import { container } from "@/styles/style.css";
import { vars } from "@/styles/common/createThemeContract.css";
import { canvasWrap } from "./main.css";
import * as SVG from "./svgpath";

interface SvgElementParams {
  path: string,
  x: number,
  y:number,
  angle: number
}

const MatterCanvas = ({ canvasRef }) => {

  useEffect(() => {
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      World = Matter.World,
      Bodies = Matter.Bodies;

    const engine = Engine.create(),
      world = engine.world,
      container = canvasRef.current;

    const render = Render.create({
      element: container,
      engine,
      options: {
        width: container.offsetWidth,
        height: container.offsetHeight,
        wireframes: false,
        background: "#223DFF",
        wireframeBackground: '#223DFF',
        wireframeStrokeStyle: '#fff',
      },
    });

    render.bounds = render.bounds || {
      min: {
          x: 0,
          y: 0
      },
      max: {
          x: render.canvas.width,
          y: render.canvas.height
      }
  };
    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    const walls = [
      Bodies.rectangle(0, 0, 1, container.offsetHeight * 2, { isStatic: true }),
      Bodies.rectangle(
        container.offsetWidth,
        0,
        10,
        container.offsetHeight * 2 - 10,
        { isStatic: true,render: { fillStyle: "#083AFF" }, }
      ),
      Bodies.rectangle(
        0,
        container.offsetHeight,
        container.offsetWidth * 2 - 10,
        10,
        {
          isStatic: true,
          render: { fillStyle: "#083AFF" },
        }
      ),
    ];

    
    World.add(world, walls);

    const createSvgElement = ({
      path,
      x,
      y,
      angle,
    }: SvgElementParams): Matter.Body => {
      const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathElement.setAttribute("d", path);
      const vertices = Matter.Svg.pathToVertices(pathElement, 30);

      const body = Bodies.fromVertices(
        x,
        y,
        vertices,
        {
          density: 0.001, // 낮은 밀도로 설정
          friction: 0.1, // 마찰 설정
          frictionStatic: 0.5, // 정적 마찰로 붙는 현상 방지
          restitution: 0.9, // 반발력을 높여서 간격 유지
          render: {
            fillStyle: "#fff",
            strokeStyle: "#f2f2f2",
            lineWidth: 2,
          },
        },
        true
      );

      Matter.Body.scale(body, 1.6, 1.6);
      Matter.Body.setAngle(body, angle);
      return body;
    };

    // 여기에 SVG 경로별로 각각의 x, y, angle을 다르게 설정
    const elements = [
      createSvgElement({ path: SVG.F_alphabet, x: 50, y: -200, angle: 50 }), // f
      createSvgElement({ path: SVG.R_alphabet, x: 200, y: -400, angle: 50 }), // r
      createSvgElement({ path: SVG.O_alphabet, x: 400, y: -600, angle: 15 }), // o
      createSvgElement({ path: SVG.T_alphabet, x: 200, y: -700, angle: 15 }), // t
      createSvgElement({ path: SVG.N_alphabet, x: 50, y: -800, angle: 90 }), // n
      createSvgElement({ path: SVG.D_alphabet, x: 100, y: -1000, angle: 0 }), // d
      createSvgElement({ path: SVG.T_alphabet, x: 100, y: -1200, angle: 50 }), // t
      createSvgElement({ path: SVG.E_alphabet, x: 200, y: -1600, angle: -30 }), // e
    ];

    // SVG 요소를 Matter.js 바디로 변환하여 추가
    elements.forEach((element) => {
      World.add(world, element);
    });

    return () => {
      Render.stop(render);
      World.clear(world, false);
      Engine.clear(engine);
      render.canvas.remove();
    };
  }, [canvasRef]);
  return (
    <div className={canvasWrap}>
      <div
        id="container"
        ref={canvasRef}
        className={container}
        style={{ width: "100%", height: "100%" }}
      ></div>
    </div>
  );
};

export default MatterCanvas;
