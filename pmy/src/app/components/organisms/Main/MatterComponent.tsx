"use client";

import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import { container } from "@/styles/style.css";
import { vars } from "@/styles/common/createThemeContract.css";
import { canvasWrap } from "./main.css";
import {decomp} from "poly-decomp";

const MatterCanvas = ({ canvasRef }) => {
  // poly-decomp 설정
  if (typeof window !== "undefined") {
    (window as any).decomp = decomp;
  }

  useEffect(() => {
    const Engine = Matter.Engine;
    const Runner = Matter.Runner;
    const Render = Matter.Render;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Common = Matter.Common;
    const Body = Matter.Body;
    const Svg = Matter.Svg;

    // poly-decomp 설정
    Common.setDecomp(decomp); // poly-decomp 사용 설정
  
    const engine = Engine.create();
    const container = canvasRef.current;

    const renderer = Render.create({
      element: container,
      engine,
      options: {
        width: container.offsetWidth,
        height: container.offsetHeight,
        wireframes: false,
        background: vars.color.bgSecondary,
      },
    });

    const walls = [
      Bodies.rectangle(0, 0, 1, container.offsetHeight * 2, { isStatic: true }),
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
          render: { fillStyle: vars.color.bgPrimary },
        }
      ),
    ];
  
    const loadExternalSvgs = async () => {
      const svgPaths = [
        "./svg/r.svg",
        "./svg/n.svg",
      ];

      const elements = await Promise.all(
        svgPaths.map((path, i) =>
          createSvgElementFromPath(path, "#fff", 1, 100 + i * 150, -200 * (i + 1), i * 10)
        )
      );

      World.add(engine.world, [...walls, ...elements]);
    };
  
    loadExternalSvgs();
  
    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(renderer);
  
    return () => {
      Render.stop(renderer);
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [canvasRef]);
  

  const loadSvg = async (path: string) => {
    const response = await fetch(path);
    const text = await response.text();
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(text, "image/svg+xml");
    return svgDoc;
  };

  const createSvgElementFromPath = async (
    path: string,
    color: string,
    scale: number,
    x: number,
    y: number,
    angle: number
  ) => {
    try {
      // SVG 파일 로드
      const response = await fetch(path);
      const svgText = await response.text();
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
      const pathElements = svgDoc.querySelectorAll("path");

      // 모든 <path> 요소에서 vertices를 추출
      const vertices = Array.from(pathElements).flatMap((el) =>
        Matter.Svg.pathToVertices(el, 10)
      );

      // poly-decomp 사용하여 복잡한 도형 처리
      const decomposed = decomp(vertices); // poly-decomp로 복잡한 도형 분해

      // Matter.js Body 생성
      const body = Matter.Bodies.fromVertices(
        x,
        y,
        decomposed,
        {
          restitution: 0.7,
          friction: 0.2,
          render: {
            fillStyle: color,
            strokeStyle: color,
            lineWidth: 1,
          },
        },
        true // 구멍 인식을 위해 true 설정
      );
  
      // 크기 조절 및 각도 설정
      Matter.Body.scale(body, scale, scale);
      Matter.Body.setAngle(body, angle);
  
      return body;
    } catch (error) {
      console.error("SVG 로딩 중 오류 발생:", error);
      return null;
    }
  };

  return (
    <>
      <div className={canvasWrap}>
        <div id="container" ref={canvasRef} className={container} style={{ width: "100%", height: "100%" }}></div>
      </div>
    </>
  );
};

export default MatterCanvas;
