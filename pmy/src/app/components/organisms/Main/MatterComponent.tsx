"use client";

import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import { container } from "@/styles/style.css";
import { vars } from "@/styles/common/createThemeContract.css";
import * as SVG from "./svgpath";

const MatterCanvas = ({ canvasRef }) => {
  
  useEffect(() => {
    // Matter.js, pathseg, poly-decomp이 로드된 후 실행
    const Engine = Matter.Engine;
    const Runner = Matter.Runner;
    const Render = Matter.Render;
    const Bodies = Matter.Bodies;
    const World = Matter.World;
    const Body = Matter.Body;
    const Svg = Matter.Svg;

    const engine = Engine.create();
    const container = canvasRef.current;

    const renderer = Matter.Render.create({
      element: canvasRef.current,
      engine,
      options: {
        width: container.offsetWidth,
        height: container.offsetHeight,
        wireframes: false,
        background: vars.color.bgSecondary,
      }
    });

    const walls = [
      // 왼쪽 벽
      /**
       * 위치: x = 0 - 50, y = 0 - 50
       * 크기: 너비 1px, 높이 container.offsetHeight * 2 - 50
       */
      Bodies.rectangle(0, 0, 1, container.offsetHeight * 2, {
        isStatic: true,
      }),
      Bodies.rectangle(
        container.offsetWidth,
        0,
        1,
        container.offsetHeight * 2,
        { isStatic: true }
      ),
      Bodies.rectangle(
        0,
        container.offsetHeight,
        container.offsetWidth * 2,
        10,
        {
          isStatic: true,
          render: {
            fillStyle: vars.color.bgPrimary, // 벽 색상 설정
          },
        }
      ),
    ];

    const physics = {
      restitution: 0.7,
      friction: 0.4
    };

    const createCircle = (width, color, x, y) => {
      const outerCircle = Bodies.circle(x, y, width, {
        ...physics,
        render: {
          fillStyle: color
        }
      });
      const innerCircle = Bodies.circle(x, y, width / 2.5, {
        ...physics,
        render: {
          fillStyle: "#000"
        }
      });
      return Body.create({
        parts: [outerCircle, innerCircle]
      });
    };
    const createSvgElement = (path, color, scale, x, y, angle) => {
      const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathElement.setAttribute("d", path);
      const vertices = Svg.pathToVertices(pathElement, 3);
      vertices.forEach((vertical) => {
        const i = vertices.findIndex(
          (v) => v.x === vertical.x && v.y === vertical.y
        );
        if (i !== -1) {
          vertices.splice(i, 1);
        }
      });
      const body = Bodies.fromVertices(
        x,
        y,
        vertices,
        {
          ...physics,
          render: {
            fillStyle: color,
            strokeStyle: color,
            lineWidth: "1px"
          }
        },
        true
      );

      Body.scale(body, 2, 2);
      Body.setAngle(body, angle);
      return body;
    };

    const elements = [
      //                  path,     color,   scale, x, y, angle
      createSvgElement(SVG.F_alphabet, "#fff", 1, 250, -400, 30), // f        O
      createSvgElement(SVG.R_alphabet, "#fff", 400, 450, -400, 50), // r         O
      createSvgElement(SVG.O_alphabet, "#fff", 500, 400, -200, 10), // o
      // createSvgElement(N_alphabet, "#583d91", 1000, 700, -400, 50), // n
      // createSvgElement(T_alphabet, "#eb5c48", 1150, -200), // t
      // createSvgElement(E_alphabet, "#583d91", 900, 1460, -400, 200), // e         O
      // createSvgElement(N_alphabet, "#583d91", 700, 1300, -700, 300), // n         O
      // createSvgElement(D_alphabet, "#fab71a", 800, 1600, -700, 100), // d
      // createSvgElement(D_alphabet, "#fab71a", 100, -900), // d
      // createSvgElement(E_alphabet, "#eb5c48", 500, 250, -900, 250), // e
      // createSvgElement(V_alphabet, "#fab71a", 600, -900), // v
      // createSvgElement(E_alphabet, "#eb5c48", 12, 1500, -900, 100), // l
      // createSvgElement(L_alphabet, "#eb5c48", 230, 1500, -900, 100), // o
      // createSvgElement(O_alphabet, "#eb5c48", 440, 1500, -900, 100), // p
      // createSvgElement(P_alphabet, "#eb5c48", 55, 1500, -900, 100), // e
      // createSvgElement(E_alphabet, "#eb5c48", 660, 1500, -900, 100), // r
      // createSvgElement(R_alphabet, "#eb5c48", 880, 1500, -900, 100), // r
    ];

    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      element: container,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });
    const runner = Matter.Runner.create();
    Matter.World.add(engine.world, [...walls, mouseConstraint, ...elements]);
    Matter.Runner.run(runner, engine); // 엔진을 구동합니다.
    Render.run(renderer); // 렌더를 진행합니다.

    return () => {
      Render.stop(renderer);
      World.clear(engine.world, false);
      Engine.clear(engine);
      // render.canvas.remove();
    };
  }, [canvasRef]);
  return <>
  <div id="container" ref={canvasRef} className={container} style={{ width: "60vw", height: "58vw" }}></div>
  </>;
};

export default MatterCanvas;
