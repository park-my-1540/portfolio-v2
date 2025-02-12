'use client';

import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import Box from '@/components/layouts/Box/Box';
import { canvas } from './index.css';
import Svg from './Svg';
import { useAtomValue } from 'jotai';
import { scrollStartState } from '@/jotai/scrollStartAtom';

const createFallingObjects = (
  world: Matter.World,
  canvasBoxRef: React.RefObject<HTMLDivElement>,
) => {
  let timer: ReturnType<typeof setTimeout>;
  const texturePath = './svg/main/lightning.svg';
  const image = new Image();
  image.src = texturePath;

  const totalObjectCount = 20; // 전체 생성할 객체 수
  const groupSize = 6;
  const delay = 100; // 각 객체 생성 간 시간차
  const startingHeight = -100; // 객체가 생성될 초기 Y

  let createdObjects = 0; // 현재까지 생성된 객체 수

  const createObjects = () => {
    for (let i = 0; i < groupSize; i++) {
      if (createdObjects >= totalObjectCount) {
        clearInterval(interval);
        break;
      }

      timer = setTimeout(() => {
        if (!canvasBoxRef.current) return;
        const randomX =
          Math.random() * (canvasBoxRef.current?.offsetWidth - 500); // 화면 내 무작위 위치
        const randomAngle = Math.random() * Math.PI * 2; // 0 ~ 2π (0도 ~ 360도) 랜덤 각도

        const rectangle = Matter.Bodies.rectangle(
          randomX,
          startingHeight,
          56,
          15,
          {
            density: 0.5, // 밀도
            frictionAir: 0.01, // 공기 저항
            restitution: 0.4, // 반발력
            render: {
              sprite: {
                texture: texturePath,
                xScale: 1,
                yScale: 1,
              },
            },
          },
        );

        Matter.Body.setAngle(rectangle, randomAngle);
        Matter.Composite.add(world, rectangle);
      }, i * delay); // 그룹 내 객체 간 시간차
    }
    clearTimeout(timer);
    createdObjects += groupSize;

    if (createdObjects >= totalObjectCount) {
      clearInterval(interval);
    }
  };

  // 처음에 즉시 실행
  createObjects();

  // 이후 일정 시간마다 실행
  const interval = setInterval(createObjects, 1500);
};

const createTitleObjects = (
  world: Matter.World,
  titleRef: React.RefObject<SVGSVGElement>,
) => {
  const paths = titleRef.current?.querySelectorAll('path');

  paths?.forEach((path) => {
    const letter = path.getAttribute('data-letter');
    const bounding = path.getBoundingClientRect();

    const texturePath = `./svg/main/letter-${letter}.svg`;
    const image = new Image();
    image.src = texturePath;

    image.onload = () => {
      const xScale = bounding.width / image.width;
      const yScale = bounding.height / image.height;

      const rectangle = Matter.Bodies.rectangle(
        bounding.left + bounding.width / 2 - 30,
        bounding.top + bounding.height / 2 - 124,
        bounding.width,
        bounding.height + 20,
        {
          isSleeping: true,
          collisionFilter: {
            category: 0x0004,
          },
          render: {
            sprite: {
              texture: texturePath,
              xScale: xScale,
              yScale: yScale,
            },
          },
        },
      );

      Matter.Composite.add(world, rectangle);
    };
  });
};

const createWall = (
  world: Matter.World,
  titleRef: React.RefObject<SVGSVGElement>,
) => {
  if (!titleRef.current) return;
  const bounding = titleRef.current.getBoundingClientRect();
  const floor = Matter.Bodies.rectangle(
    bounding.left + bounding.width / 2,
    bounding.top + bounding.height + 5 + 10,
    bounding.width / 1.5,
    400,
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
};

export default function MatterMain() {
  const scrollStart = useAtomValue(scrollStartState);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasBoxRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!scrollStart || !titleRef.current) return;
    // svg 가리기
    titleRef.current.style.opacity = '0';
    const engine = Matter.Engine.create({ enableSleeping: true });
    const runner = Matter.Runner.create();
    const world = engine.world;

    if (!canvasBoxRef.current || !titleRef.current) {
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
    Matter.Runner.run(runner, engine);

    engine.world.gravity.y = 2; // 기본값은 1. 3으로 설정하여 더 빠르게.

    createWall(world, titleRef);
    createFallingObjects(world, canvasBoxRef);
    createTitleObjects(world, titleRef);

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Composite.clear(world, false);
      Matter.Engine.clear(engine);
    };
  }, [scrollStart]);
  return (
    <>
      <Box position="relative" width="100%" height="100%" ref={canvasBoxRef}>
        <Svg titleRef={titleRef} />
        <canvas className={canvas} ref={canvasRef}></canvas>
      </Box>
    </>
  );
}
