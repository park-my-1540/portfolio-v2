import React, { useEffect, useRef } from 'react';
import * as styles from './cursor.css';

import { useSetAtom } from 'jotai';
import { viewState } from '@/jotai/viewAtom';

const CustomCursor = () => {
  const mainCursor = useRef<HTMLDivElement | null>(null);
  const setCursor = useSetAtom(viewState);

  setCursor({ cursorRef: mainCursor });
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      if (!mainCursor.current) return;
      positionRef.current.mouseX = mouseX - mainCursor.current?.clientWidth / 2;
      positionRef.current.mouseY =
        mouseY - mainCursor.current?.clientHeight / 2;
    });

    return () => {};
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      if (mainCursor && mainCursor.current)
        mainCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };
    followMouse();
  }, []);
  return <div ref={mainCursor} className={styles.mainCursor} />;
};

export default CustomCursor;
