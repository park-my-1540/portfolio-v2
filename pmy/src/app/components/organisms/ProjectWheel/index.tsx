'use client';

import { useEffect, useState, useRef, useCallback, CSSProperties } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import { Filtered } from '@/types/common';
import * as styles from './wheel.css';

export default function ProjectWheel({ list, onLastSlide, onSlideChange }: { list: Filtered[]; onLastSlide: () => void; onSlideChange: (last: boolean) => void }) {
  const projects = list.filter((project) => project.type && project.img);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);
  const wheelRef = useRef<HTMLElement>(null);
  const indexRef = useRef(0);
  const focusTargetRef = useRef<number | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const callbackRef = useRef(onLastSlide);
  callbackRef.current = onLastSlide;
  const changeRef = useRef(onSlideChange);
  changeRef.current = onSlideChange;
  const count = projects.length + 1;
  const active = Math.min(count, Math.round(progress * count));

  const go = useCallback((index: number) => {
    if (tweenRef.current?.isActive() || count < 1) return;
    const target = Math.max(0, Math.min(count, index));
    if (target === indexRef.current) return;
    const orbit = { value: indexRef.current / count };
    focusTargetRef.current = wheelRef.current?.contains(document.activeElement) ? target : null;
    indexRef.current = target;
    changeRef.current(target === count);
    tweenRef.current = gsap.to(orbit, {
      value: target / count, duration: reduced ? 0 : 0.9, ease: 'power2.inOut',
      onUpdate: () => setProgress(orbit.value),
      onComplete: () => { if (target === count) callbackRef.current(); },
    });
  }, [count, reduced]);

  useEffect(() => {
    const target = focusTargetRef.current;
    if (target === null || Math.abs(progress * count - target) > 0.0001) return;
    focusTargetRef.current = null;
    const element = target === 0
      ? wheelRef.current?.querySelector<HTMLButtonElement>(`button.${styles.filmCue}`)
      : wheelRef.current?.querySelector<HTMLAnchorElement>('article[aria-hidden="false"] a');
    element?.focus({ preventScroll: true });
  }, [progress, count]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const change = () => setReduced(media.matches);
    change();
    media.addEventListener('change', change);
    return () => media.removeEventListener('change', change);
  }, []);

  useEffect(() => {
    let accumulated = 0;
    let lastWheel = 0;
    let gestureConsumed = false;
    let touchY = 0;
    const wheel = (event: WheelEvent) => {
      if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      const now = performance.now();
      if (now - lastWheel > 160) { accumulated = 0; gestureConsumed = false; }
      lastWheel = now;
      if (tweenRef.current?.isActive() || gestureConsumed) { accumulated = 0; return; }
      accumulated += event.deltaY;
      if (Math.abs(accumulated) > 65) { go(indexRef.current + Math.sign(accumulated)); accumulated = 0; gestureConsumed = true; }
    };
    const touchStart = (event: TouchEvent) => { touchY = event.touches[0].clientY; };
    const touchEnd = (event: TouchEvent) => {
      const distance = touchY - event.changedTouches[0].clientY;
      if (Math.abs(distance) > 45) go(indexRef.current + Math.sign(distance));
    };
    window.addEventListener('wheel', wheel, { passive: true });
    const element = wheelRef.current;
    element?.addEventListener('touchstart', touchStart, { passive: true });
    element?.addEventListener('touchend', touchEnd, { passive: true });
    return () => {
      window.removeEventListener('wheel', wheel);
      element?.removeEventListener('touchstart', touchStart);
      element?.removeEventListener('touchend', touchEnd);
      tweenRef.current?.kill();
    };
  }, [go]);

  const cardMotion = (index: number): CSSProperties => {
    const offset = index - progress * count;
    const current = index === active;
    const distance = Math.abs(offset);
    const reveal = Math.max(0, Math.min(1, progress * count, count - progress * count));
    return {
      transform: `translate(-50%, -50%) translate(${distance * 16}px, ${offset * (offset < 0 ? 86 : 100)}%) rotate(${reduced ? 0 : offset * 3}deg) scale(${1 - Math.min(distance, 1) * 0.04})`,
      opacity: distance < 2 ? (1 - Math.min(distance, 1) * 0.45) * reveal : 0,
      zIndex: current ? 2 : 1, pointerEvents: current ? 'auto' : 'none',
    };
  };

  if (!projects.length) return null;

  return (
    <aside onKeyDown={(event) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
      event.preventDefault();
      go(indexRef.current + (event.key === 'ArrowDown' ? 1 : -1));
    }} ref={wheelRef} className={styles.wheel} aria-label="선택한 프로젝트" style={{ opacity: progress >= 1 ? 0 : 1, visibility: progress >= 1 ? 'hidden' : 'visible' }}>
      <div className={styles.heading} style={{ visibility: active === 0 ? 'hidden' : 'visible' }}><span>SELECTED WORKS</span><span>WEB EXPERIENCE</span></div>
      <div className={styles.orbit}>
        {projects.map((project, index) => {
          const current = index + 1 === active;
          const detailOpacity = Math.max(0, 1 - Math.abs(index + 1 - progress * count) * 1.5);
          return (
            <article key={project.id || project.type} className={styles.card}
              aria-hidden={!current} inert={!current ? true : undefined} style={cardMotion(index + 1)}>
              <Link href={`/project/${project.type}`} className={styles.projectLink}
                tabIndex={current ? 0 : -1} onClick={() => sessionStorage.setItem('detail', project.type)}>
                <div className={styles.info} style={{ opacity: detailOpacity }}><div><span className={styles.category}>{project.service}</span><h2 className={styles.title}>{project.title}</h2></div><span className={styles.arrow} aria-hidden="true">↗</span></div>
                {/* Signed Notion images are rendered directly. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.image} src={project.img} alt={`${project.title} 프로젝트 화면`} />
              </Link>
              <div className={styles.controls} style={{ opacity: detailOpacity }}>
                <div><span className={styles.counter}>{String(index + 1).padStart(2, '0')}</span><span className={styles.total}>/ {String(projects.length).padStart(2, '0')}</span></div>
                <div className={styles.navigation}>
                  <button type="button" className={styles.button} tabIndex={current ? 0 : -1} onClick={() => go(index)} aria-label={index === 0 ? '시작 화면으로' : '이전 프로젝트'}>↓ 이전</button>
                  <button type="button" className={styles.button} tabIndex={current ? 0 : -1} onClick={() => go(index + 2)} aria-label={index === projects.length - 1 ? '프로젝트 마치고 타이포 낙하' : '다음 프로젝트'}>{index === projects.length - 1 ? '마치기 ↑' : '다음 ↑'}</button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <button type="button" className={styles.filmCue} aria-label="스크롤하거나 클릭해서 프로젝트 보기"
        style={{ opacity: Math.max(0, 1 - progress * count * 2), visibility: active === 0 ? 'visible' : 'hidden' }}
        tabIndex={active === 0 ? 0 : -1} onClick={() => go(1)}>
        <span className={styles.filmPulse} aria-hidden="true" />
        <span className={styles.filmCaption}>ROLL<br />TO EXPLORE<span className={styles.filmMeta}>{String(projects.length).padStart(2, '0')} SELECTED WORKS</span></span>
        <span className={styles.filmReel} aria-hidden="true"><span className={styles.filmStrip}><span>↓</span>{projects.map((project, i) => <span key={project.id || project.type}>{String(i + 1).padStart(2, '0')}</span>)}</span></span>
      </button>
    </aside>
  );
}
