"use client"
import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import { container } from "../style.css";

const MatterCanvas = ({canvasRef}) => {
  const reactangle = "m.26,274.72c-1.79-20.16,5.77-40.86,22.2-55.17L256.07,16.09c27.25-23.73,68.58-20.88,92.31,6.37,23.73,27.25,20.88,68.58-6.37,92.31l-233.61,203.46c-27.25,23.73-68.58,20.88-92.31-6.37-9.42-10.82-14.66-23.86-15.83-37.14Z";
  const curved = "m341.46,31.89c14.51,28.65,3.05,63.65-25.6,78.16-3.42,1.73-34.78,17.16-83.49,26.15-28.57,5.27-57.68,7.34-86.51,6.14-36.13-1.5-71.89-8.14-106.28-19.74C9.15,112.33-7.2,79.34,3.07,48.9,13.33,18.47,46.33,2.12,76.77,12.39c101.89,34.37,185.72-5.68,186.54-6.1,28.65-14.51,63.65-3.05,78.16,25.6Z";
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
        background: "#000"
      }
    });

    const walls = [
      Bodies.rectangle(0 - 50, 0 - 50, 1, container.offsetHeight * 2 - 50, {
        isStatic: true
      }),
      Bodies.rectangle(
        container.offsetWidth + 50,
        0 - 50,
        1,
        container.offsetHeight * 2 + 50,
        { isStatic: true }
      ),
      Bodies.rectangle(
        0 - 50,
        container.offsetHeight + 50,
        container.offsetWidth * 2 + 50,
        1,
        { isStatic: true }
      )
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

      Body.scale(body, 1, 1);
      Body.setAngle(body, angle);
      return body;
    };

    const elements = [
      createSvgElement(curved, "#583d91", 1, 250, -400, 30),
      createSvgElement(reactangle, "#eb5c48", 1, 450, -400, 50),
      createCircle(115, "#9a3d90", 500, -400),
      createSvgElement(curved, "#583d91", 1, 700, -400, 50),
      createCircle(135, "#eb5c48", 1150, -200),
      createSvgElement(curved, "#583d91", 1, 1460, -400, 200),

      createSvgElement(curved, "#583d91", 1, 1300, -700, 300),
      createSvgElement(reactangle, "#fab71a", 1, 1600, -700, 100),

      createCircle(115, "#fab71a", 100, -900),
      createSvgElement(curved, "#eb5c48", 1, 250, -900, 250),
      createCircle(135, "#fab71a", 600, -900),
      createSvgElement(curved, "#eb5c48", 1, 1500, -900, 100)
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
  <div id="container" ref={canvasRef} className={container} style={{ width: '100vw', height: '100vh' }}></div>
  </>;
};

export default MatterCanvas;
