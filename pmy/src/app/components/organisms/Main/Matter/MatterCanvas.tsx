'use client';

import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { useAtomValue } from 'jotai';
import themeState from '@/jotai/themeAtom';
import { canvas, stage } from './index.css';
import Svg from './Svg';
import createFlightAnimation from './flight';

const loadTexture = (texture: string) => new Promise<HTMLImageElement>((resolve, reject) => {
  const image = new Image();
  image.onload = () => resolve(image);
  image.onerror = () => reject(new Error('Unable to load title texture'));
  image.src = texture;
});

export default function MatterMain({ playCount = 0 }: { playCount?: number }) {
  const { mode } = useAtomValue(themeState);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasBoxRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<SVGSVGElement | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(preference.matches);
    updatePreference();
    preference.addEventListener('change', updatePreference);
    const observer = new ResizeObserver(([entry]) => {
      const width = Math.round(entry.contentRect.width);
      const height = Math.round(entry.contentRect.height);
      setSize((previous) => previous.width === width && previous.height === height ? previous : { width, height });
    });
    if (canvasBoxRef.current) observer.observe(canvasBoxRef.current);
    return () => {
      preference.removeEventListener('change', updatePreference);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const box = canvasBoxRef.current;
    const title = titleRef.current;
    const targetCanvas = canvasRef.current;
    if (!box || !title || !targetCanvas) return;
    title.style.opacity = '1';
    targetCanvas.style.opacity = '0';
    if (reducedMotion || playCount === 0 || !size.width || !size.height) return;

    let disposed = false;
    let engine: Matter.Engine | undefined;
    let runner: Matter.Runner | undefined;
    let render: Matter.Render | undefined;
    let stopFlight: (() => void) | undefined;
    const paths = Array.from(title.querySelectorAll('path'));
    const textures = paths.map((path) => {
      const bounds = path.getBBox();
      const fill = window.getComputedStyle(path).fill;
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${bounds.width}" height="${bounds.height}" viewBox="${bounds.x} ${bounds.y} ${bounds.width} ${bounds.height}"><path d="${path.getAttribute('d')}" fill="${fill}"/></svg>`;
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    });
    const lightning = `/svg/main/${mode}/lightning.svg?v=deep-mint`;

    const start = async () => {
      try {
        // Keep the readable SVG until every replacement sprite is ready.
        const images = await Promise.all([...textures, lightning].map(loadTexture));
        if (disposed) return;
        const origin = box.getBoundingClientRect();
        engine = Matter.Engine.create({ enableSleeping: true });
        const world = engine.world;
        const letters = paths.map((path, index) => {
          const bounds = path.getBoundingClientRect();
          const image = images[index];
          const body = Matter.Bodies.rectangle(
            bounds.left - origin.left + bounds.width / 2,
            bounds.top - origin.top + bounds.height / 2,
            Math.max(1, bounds.width), Math.max(1, bounds.height) + 20,
            {
              isSleeping: true, density: 0.001, restitution: 0, friction: 0.1,
              render: { sprite: { texture: textures[index], xScale: bounds.width / image.width, yScale: bounds.height / image.height } },
            },
          );
          Matter.Composite.add(world, body);
          return body;
        });
        render = Matter.Render.create({
          canvas: targetCanvas, engine,
          options: { width: size.width, height: size.height, background: 'transparent', wireframes: false, showSleeping: false, pixelRatio: Math.min(window.devicePixelRatio || 1, 2) },
        });
        runner = Matter.Runner.create();
        title.style.opacity = '0';
        targetCanvas.style.opacity = '1';
        Matter.Render.run(render);
        Matter.Runner.run(runner, engine);
        const titleBounds = title.getBoundingClientRect();
        stopFlight = createFlightAnimation(engine, letters, {
          width: size.width,
          target: { left: titleBounds.left - origin.left, top: titleBounds.top - origin.top, width: titleBounds.width, height: titleBounds.height },
          sprite: { texture: lightning },
        });
      } catch {
        // A missing sprite must not erase the hero title.
        if (!disposed) title.style.opacity = '1';
      }
    };
    start();
    return () => {
      disposed = true;
      stopFlight?.();
      if (render) Matter.Render.stop(render);
      if (runner) Matter.Runner.stop(runner);
      if (engine) {
        Matter.Composite.clear(engine.world, false);
        Matter.Engine.clear(engine);
      }
      targetCanvas.getContext('2d')?.clearRect(0, 0, targetCanvas.width, targetCanvas.height);
      title.style.opacity = '1';
      targetCanvas.style.opacity = '0';
    };
  }, [mode, playCount, reducedMotion, size]);

  return (
    <div className={stage} ref={canvasBoxRef} aria-hidden="true">
      <Svg titleRef={titleRef} />
      <canvas className={canvas} ref={canvasRef} />
    </div>
  );
}
