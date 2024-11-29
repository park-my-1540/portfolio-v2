"use client";

import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import './canvas.css'; // 제공된 CSS를 여기에 저장

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

    Matter.Render.run(render);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

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
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 873 400" className="title" ref={titleRef}>
        <path className="letter-r" data-letter="r" fill="#7D1FD8" d="M871.6,305.1	c-4.3-14.8-17.9-25.1-33.3-25.1h-53.9v120h19.2v-50.4h23.7l24.3,50.4H873l-25.1-51.7C866.3,342.9,877,323.6,871.6,305.1z M803.5,330.4v-31.2h34.7c8.6,0,15.6,7,15.6,15.6c0,8.6-7,15.6-15.6,15.6H803.5z"/>
        <path className="letter-e" data-letter="e" fill="#7D1FD8" d="M688.6,280h80v19.2h-60.8v31.2h56	v19.2h-56v31.2h60.8V400h-80V280z"/>
        <path className="letter-p" data-letter="p" fill="#7D1FD8" d="M641.3,280h-53.9v120h19.2v-50.4h34.7c19.2,0,34.8-15.6,34.8-34.8	C676.1,295.6,660.5,280,641.3,280z M641.3,330.4h-34.7v-31.2h34.7c8.6,0,15.6,7,15.6,15.6C656.9,323.4,649.9,330.4,641.3,330.4z"/>
        <path className="letter-o" data-letter="o" fill="#7D1FD8" d="M526.9,280c-24.6,0-44.5,19.9-44.5,44.5c0,0,0,0,0,0v31c0.2,24.5,20,44.3,44.5,44.5	c24.5-0.2,44.3-20,44.5-44.5v-31C571.4,299.9,551.5,280,526.9,280z M552.2,355.5c0,14-11.3,25.3-25.3,25.3	c-14,0-25.3-11.3-25.3-25.3l0,0v-31c0-14,11.3-25.3,25.3-25.3c14,0,25.3,11.3,25.3,25.3V355.5z"/>
        <path className="letter-l" data-letter="l" fill="#7D1FD8" d="M425.1,380.8h51.2V400h-70.4l0-120	h19.2V380.8z"/>
        <path className="letter-e" data-letter="e" fill="#7D1FD8" d="M310.2,280h80v19.2h-60.8v31.2h56	v19.2h-56v31.2h60.8V400h-80V280z"/>
        <path className="letter-v" data-letter="v" fill="#7D1FD8" d="M279.7,280h20.2l-39.2,120h-25	l-39.4-120h20.2l31.7,96.6L279.7,280z"/>
        <path className="letter-e" data-letter="e" fill="#7D1FD8" d="M109.4,280h80v19.2h-60.8v31.2h56	v19.2h-56v31.2h60.8V400h-80V280z"/>
        <path className="letter-d" data-letter="d" fill="#7D1FD8" d="M49,280H4.5v120H49c24.5-0.2,44.3-20,44.5-44.5v-31C93.3,300,73.5,280.2,49,280z M74.2,355.5c0,13.9-11.3,25.3-25.3,25.3H23.7v-81.6H49c13.9,0,25.3,11.3,25.3,25.3V355.5z"/>
        <path className="letter-d" data-letter="d" fill="#7D1FD8" d="M847,215.5v-31	c-0.2-24.5-20-44.3-44.5-44.5h-44.5l0,120h44.5C827.1,259.8,846.9,240,847,215.5z M777.3,159.2h25.3c13.9,0,25.3,11.3,25.3,25.3v31	c0,13.9-11.3,25.3-25.3,25.3h-25.3V159.2z"/>
        <path className="letter-n" data-letter="n" fill="#7D1FD8" d="M669.1,260h-19.2V140h21.4	l48.3,85.1V140h19.2v120h-21.4l-48.3-85.1V260z"/>
        <path className="letter-e" data-letter="e" fill="#7D1FD8" d="M634.2,260h-80V140h80v19.2h-60.8	v31.2h56v19.2h-56v31.2h60.8V260z"/>
        <path className="letter-dash" data-letter="dash" fill="#7D1FD8" d="M484.5,205.6h51.2v19.2h-51.2	L484.5,205.6z"/>
        <path className="letter-t" data-letter="t" fill="#7D1FD8" d="M401.4,140h80v19.2H451V260h-19.2	V159.2h-30.4V140z"/>
        <path className="letter-n" data-letter="n" fill="#7D1FD8" d="M371.8,140H391v120h-21.4	l-48.3-85.1V260h-19.2V140h21.4l48.3,85.1V140z"/>
        <path className="letter-o" data-letter="o" fill="#7D1FD8" d="M241.6,260	c24.5-0.2,44.3-20,44.5-44.5v-31c0-24.6-19.9-44.5-44.5-44.5c-24.6,0-44.5,19.9-44.5,44.5v31C197.3,240,217.1,259.8,241.6,260z M216.3,215.5v-31c0-14,11.3-25.3,25.3-25.3c14,0,25.3,11.3,25.3,25.3c0,0,0,0,0,0v31c0,14-11.3,25.3-25.3,25.3	C227.6,240.8,216.3,229.5,216.3,215.5C216.3,215.5,216.3,215.5,216.3,215.5z"/>
        <path className="letter-r" data-letter="r" fill="#7D1FD8" d="M116.8,209.6h23.7l24.3,50.4h21.4l-25.1-51.7c18.5-5.4,29.1-24.7,23.7-43.2	c-4.3-14.8-17.9-25.1-33.3-25.1H97.6v120h19.2V209.6z M116.8,159.2h34.7c8.6,0,15.6,7,15.6,15.6c0,8.6-7,15.6-15.6,15.6h-34.7V159.2	z"/>
        <path className="letter-f" data-letter="f" fill="#7D1FD8" d="M23.7,159.2v31.2h56v19.2h-56V260	H4.5V140h80v19.2H23.7z"/>
      </svg>

      <canvas className="canvas" ref={canvasRef}></canvas>
    </div>
    </>
  );
};

export default MatterMain;
