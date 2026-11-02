import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { useAtomValue } from 'jotai';
import cursorsState from '@/jotai/cursorsAtom';
import * as styles from './index.css';
import * as cursorStyles from './styles.css';

const CustomCursor = () => {
  const mainCursor = useRef<HTMLDivElement | null>(null);
  const cursorType = useAtomValue(cursorsState);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 769px) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    let seen = false;
    let x = 0; let y = 0; let targetX = 0; let targetY = 0;
    const draw = () => {
      const cursor = mainCursor.current;
      if (!cursor || !seen || !media.matches) return;
      x += (targetX - x) * 0.25;
      y += (targetY - y) * 0.25;
      cursor.style.transform = `translate3d(${x - cursor.clientWidth / 2}px, ${y - cursor.clientHeight / 2}px, 0)`;
      cursor.style.opacity = '1';
      frame = requestAnimationFrame(draw);
    };
    const hide = () => {
      seen = false;
      cancelAnimationFrame(frame);
      if (mainCursor.current) mainCursor.current.style.opacity = '0';
    };
    const move = (event: MouseEvent) => {
      if (!media.matches) return;
      targetX = event.clientX; targetY = event.clientY;
      if (!seen) { x = targetX; y = targetY; seen = true; draw(); }
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', hide);
    window.addEventListener('blur', hide);
    media.addEventListener('change', hide);
    return () => {
      hide();
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', hide);
      window.removeEventListener('blur', hide);
      media.removeEventListener('change', hide);
    };
  }, []);

  return <div aria-hidden="true" ref={mainCursor} className={classNames(styles.mainCursor, cursorStyles.cursorStyles[cursorType || 'default'])} />;
};
export default CustomCursor;
