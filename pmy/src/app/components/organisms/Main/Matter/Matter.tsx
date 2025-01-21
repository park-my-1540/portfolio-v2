'use client';

import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import './canvas.css';
import Svg from '@/components/molecules/Svg/Svg';
import { useAtomValue } from 'jotai';
import { viewState } from '@/jotai/viewAtom';

const MatterMain: React.FC = () => {
  const { scrollStart } = useAtomValue(viewState);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasBoxRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!scrollStart || !titleRef.current) return;
    // svg 가리기
    titleRef.current.style.opacity = '0';
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
        background: 'transparent',
        width: canvasBoxRef.current?.offsetWidth,
        height: canvasBoxRef.current?.offsetHeight,
        showAngleIndicator: false,
        showSleeping: false,
        wireframes: false,
      },
    });

    Matter.Render.run(render);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // Floor
    const bounding = titleRef.current.getBoundingClientRect();
    const floor = Matter.Bodies.rectangle(
      bounding.left + bounding.width / 2,
      bounding.top + bounding.height + 5 + 10,
      bounding.width,
      10,
      {
        isStatic: true,
        collisionFilter: {
          category: 0x0002,
        },
        render: {
          visible: false,
          fillStyle: '#000',
        },
      },
    );
    Matter.Composite.add(world, floor);
    engine.world.gravity.y = 2; // 기본값은 1. 3으로 설정하여 더 빠르게.
    // Dropping objects
    let timer: ReturnType<typeof setTimeout>;
    const createFallingObjectsWithDelay = () => {
      const objectCount = 15; // 생성할 객체 수
      const delay = 100; // 각 객체 생성 간 시간차 (ms)
      const startingHeight = -100; // 객체가 생성될 초기 Y 좌표 (화면 상단 위)
      for (let i = 0; i < objectCount; i++) {
        timer = setTimeout(() => {
          if (!canvasBoxRef.current) return;
          const randomX =
            Math.random() * (canvasBoxRef.current?.offsetWidth - 500); // 화면 내 무작위 위치
          const rectangle = Matter.Bodies.circle(randomX, startingHeight, 30, {
            density: 0.05, // 기본값은 0.001, 더 큰 값으로 설정
            frictionAir: 0.01, // 공기 저항 유지
            restitution: 0.3, // 반발력 설정 (충돌 후 튀는 정도)
            render: {
              fillStyle: '#219B9D',
            },
            collisionFilter: {
              category: 0x0004,
            },
          });

          Matter.Composite.add(world, rectangle);
        }, i * delay); // `i * delay`만큼 시간차 적용
      }
      clearTimeout(timer);
    };

    createFallingObjectsWithDelay();

    const paths = titleRef.current?.querySelectorAll('path');

    paths?.forEach((path) => {
      const letter = path.getAttribute('data-letter');
      const bounding = path.getBoundingClientRect();
      const rectangle = Matter.Bodies.rectangle(
        bounding.left + bounding.width / 2 - 30,
        bounding.top + bounding.height / 2 - 120,
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
        },
      );

      Matter.Composite.add(world, rectangle);
    });

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Composite.clear(world, false);
      Matter.Engine.clear(engine);
    };
  }, [scrollStart]);
  return (
    <>
      <div className="canvasBox" ref={canvasBoxRef}>
        <Svg titleRef={titleRef} />
        <canvas className="canvas" ref={canvasRef}></canvas>
      </div>
    </>
  );
};

export default MatterMain;
