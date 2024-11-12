"use client"
import { useRef, useEffect } from "react";
import Matter from 'matter-js';

const Canvas = () => {
  useEffect(() => {
      const Engine = Matter.Engine;
      const Render = Matter.Render;
      const World = Matter.World;
      const engine = Engine.create();
      engine.gravity.y = 1.5; // 중력의 세기를 설정합니다.
    
      const render = Render.create({
        element: containerRef.current,
        engine: engine,
        canvas: canvasRef.current,
        bounds: {
          min: { x: 0, y: 0 },
          max: { x: canvasWidth, y: canvasHeight },
        },
        options: {
          showSeparations: true,
          width: canvasWidth,
          height: canvasHeight,
          background: "",
          wireframes: false,
        },
      });
    
      // 마우스를 이용해 조작을 가능하게 해줍니다.
      const mouse = Matter.Mouse.create(render.canvas),
        mouseConstraint = Matter.MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
            stiffness: 0.2,
            render: {
              visible: false,
            },
          },
        });
    
      // 그릴 요소들을 world에 모읍니다.
      World.add(engine.world, [
        element,
        mouseConstraint,
      ]);
    
      Matter.Runner.run(engine); // 엔진을 구동합니다.
      Render.run(render); // 렌더를 진행합니다.
      Body.rotate(element, Math.PI / 6);
    
      return () => {
        Render.stop(render);
        World.clear(engine.world, false);
        Engine.clear(engine);
        render.canvas.remove();
      };
    }, []);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const Bodies = Matter.Bodies;
  return (
    <section
      ref={containerRef}
    >
      <canvas
        ref={canvasRef}
        id="viewport"
        width="500"
        height="500"
      />
    </section>
  );
};

export default Canvas;