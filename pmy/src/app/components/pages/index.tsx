import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

import MainPage from './MainPage';
import AboutPage from './AboutPage';
import ProjectsPage from '../../../pages/projects';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import * as animate from '@/utils/animate';

import Gallery from '@/components/organisms/Gallery/demo';

gsap.registerPlugin(ScrollTrigger);

const Demo: React.FC = () => {
  const ref = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollEl = document.querySelector('#main-container');
    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: 'is-reveal',
      // tablet: {
      //   smooth: true,
      //   direction: 'vertical', // 기본 방향 세로
      // },
      // smartphone: {
      //   smooth: true,
      //   direction: 'vertical',
      // },
    });

    locoScroll.on('scroll', () => {
      ScrollTrigger.update();
      // setScrollState({ scrollStart: true });
    });

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        }
        return null;
      },
      scrollLeft(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.x;
        }
        return null;
      },
      getBoundingClientRect() {
        return {
          left: 0,
          top: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollEl.style.transform ? 'transform' : 'fixed',
    });

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };

    ScrollTrigger.addEventListener('refresh', lsUpdate);
    ScrollTrigger.refresh();

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  let timer: any;

  return (
    <div data-scroll-container id="main-container">
      <div className="vertical-scroll" data-scroll-section>
        <h1 data-scroll>Vertical Section</h1>
        <p data-scroll>Scroll down to see more...</p>
      </div>

      <Gallery />

      <div className="vertical-scroll" data-scroll-section>
        <h1 data-scroll>Another Vertical Section</h1>
        <p data-scroll>Scroll more to explore!</p>
      </div>
    </div>
  );
};

export default Demo;
