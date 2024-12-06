"use client";

import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import './canvas.css';
import Svg from '@/components/molecules/Svg/Svg';

const MatterMain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasBoxRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const engine = Matter.Engine.create({ enableSleeping: true });
    const world = engine.world;

    if (!canvasBoxRef.current) {
      return;
    }
    if (!titleRef.current) {
      return;
    }
    const render = Matter.Render.create({
      element: canvasBoxRef.current,
      engine: engine,
      canvas: canvasRef.current!,
      options: {
        background: 'transparant',
        width: canvasBoxRef.current?.offsetWidth,
        height: canvasBoxRef.current?.offsetHeight,
        showAngleIndicator: false,
        showSleeping: false,
        wireframes: false,
      },
    });

    // Matter.Render.run(render);

    const runner = Matter.Runner.create();
    // Matter.Runner.run(runner, engine);

    // Floor
    const bounding = titleRef.current.getBoundingClientRect()
    const floor = Matter.Bodies.rectangle(
      bounding.left + bounding.width / 2,
      bounding.top + bounding.height + 5 + 10,
      bounding.width,
      10,
      {
        isStatic: true,
        collisionFilter: {
          category: 0x0002
        },
        render: {
          visible: false,
          fillStyle: '#000'
        }
      }
    )
    Matter.Composite.add(world, floor)

    // Dropping objects
    const createFallingObject = () => {
      const randomX = Math.random() * window.innerWidth; // 화면 내 무작위 위치
      const rectangle = Matter.Bodies.circle(randomX, 0, 30, {
        density: 0.02, // 객체의 밀도 증가 (기본값: 0.001)
        frictionAir: 0.01, // 공기 저항 감소 (기본값: 0.1)
        restitution: 0.1, // 반발력 설정 (충돌 후 튀는 정도)
        render: {
          fillStyle: '#219B9D', // 
        },
        collisionFilter: {
          category: 0x0004,
        },
      });

      Matter.Composite.add(world, rectangle);
    };
    const interval = setInterval(createFallingObject, 5000); // 2초마다 생성

    const paths = titleRef.current?.querySelectorAll('path');

    paths?.forEach((path) => {
      const letter = path.getAttribute('data-letter');
      const bounding = path.getBoundingClientRect();

      const rectangle = Matter.Bodies.rectangle(
        bounding.left + bounding.width / 2,
        bounding.top + bounding.height / 2,
        bounding.width,
        bounding.height + 20,
        {
          isSleeping: true,
          collisionFilter: {
            category: 0x0004,
          },
          render: {
            sprite: {
              texture: `./svg/main/letter-${letter}.svg`,
              xScale: 1,
              yScale: 1,
            },
          },
        }
      );

      Matter.Composite.add(world, rectangle);
    });

    return () => {
      clearInterval(interval); // 컴포넌트 언마운트 시 반복 제거
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Composite.clear(world, false);
      Matter.Engine.clear(engine);
    };
  }, []);
  return (
    <>
    <div className='canvasBox' ref={canvasBoxRef}>
      <Svg titleRef={titleRef}/>
      {/* <canvas className="canvas" ref={canvasRef}></canvas> */}
    </div>
    </>
  );
};

export default MatterMain;
