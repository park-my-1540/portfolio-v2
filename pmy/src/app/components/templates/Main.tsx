'use client';

import React, { useEffect, useRef, useState } from 'react';
import Matter from '@/components/organisms/Main/Matter/MatterCanvas';
import * as styles from './main.css';
import ProjectWheel from '@/components/organisms/ProjectWheel';
import { Filtered } from '@/types/common';

export default function Main({ list }: { list: Filtered[] }) {
  const [ending, setEnding] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const [run, setRun] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const endingRef = useRef<HTMLHeadingElement>(null);
  const clearTimers = () => { timers.current.forEach(clearTimeout); timers.current = []; };
  useEffect(() => () => clearTimers(), []);

  const resetEnding = () => {
    clearTimers();
    setEnding(false);
    setPlayCount(0);
  };
  const finish = () => {
    clearTimers();
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    timers.current.push(setTimeout(() => setPlayCount((count) => count + 1), reduced ? 0 : 250));
    timers.current.push(setTimeout(() => {
      setEnding(true);
      requestAnimationFrame(() => endingRef.current?.focus({ preventScroll: true }));
    }, reduced ? 0 : 1100));
  };
  const restart = () => {
    resetEnding(); setRun((value) => value + 1);
    requestAnimationFrame(() => document.querySelector<HTMLButtonElement>('#main aside > button')?.focus({ preventScroll: true }));
  };

  return (
    <section id="main" aria-labelledby="main-heading">
      <div className={`main ${styles.hero}`}>
        <h1 id="main-heading" className={styles.accessibleTitle}>박미영 · Front-end Developer</h1>
        <div className={styles.stage}><Matter playCount={playCount} /></div>
        <ProjectWheel key={run} onSlideChange={(last) => { if (!last) resetEnding(); }} list={list} onLastSlide={finish} />
        <div className={styles.ending} data-visible={ending} aria-hidden={!ending} inert={!ending ? true : undefined}>
          <div className={styles.ticket}>
            <div className={styles.ticketMeta}><span>함께할 한 자리</span><span>다음 프로젝트</span></div>
            <h2 ref={endingRef} tabIndex={-1} className={styles.ticketTitle}>다음<br />프로젝트를<br />함께 만들어요.</h2>
            <div className={styles.ticketDivider} aria-hidden="true" />
            <a className={styles.ticketLink} href="mailto:parkmy722698@gmail.com">이메일 보내기 <span aria-hidden="true">↗</span></a>
            <button type="button" className={styles.ticketReplay} onClick={restart}>프로젝트 다시 보기 <span aria-hidden="true">↻</span></button>
          </div>
        </div>
        <div className={styles.intro}>
          <p className={styles.focus}><span className={styles.focusLabel}>FOCUSED ON</span>UI INTERACTION, ACCESSIBILITY<br />COMPONENT SYSTEMS / FROM DESIGN TO FUNCTION</p>
        </div>
        <div className={styles.footer}>
          <div className={styles.actions}>
            <a className={styles.footerLink} href="mailto:parkmy722698@gmail.com">EMAIL ↗</a>
            <a className={styles.footerLink} href="https://github.com/park-my-1540" target="_blank" rel="noreferrer">GITHUB ↗</a>
            {ending && <button type="button" className={styles.play} onClick={() => setPlayCount((count) => count + 1)}>낙하 다시 재생 ↻</button>}
          </div>
        </div>
      </div>
    </section>
  );
}
