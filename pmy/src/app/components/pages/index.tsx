import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

import MainPage from './MainPage';
import AboutPage from './AboutPage';
import ProjectsPage from '../../../pages/projects';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import * as animate from '@/utils/animate';
import Box from '@/components/layouts/Box/Box';
import useLocoScroll from '@/utils/hook/useLocoScroll';
import Gallery from '@/components/organisms/Gallery/';

gsap.registerPlugin(ScrollTrigger);

const ScrollBox: React.FC = () => {
  const ref = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  useLocoScroll(true, ref);

  let timer: any;

  useEffect(() => {
    if (ref) {
      if (typeof window === 'undefined' || !window.document) {
        return;
      }
    }
  }, []);

  return (
    <div data-scroll-container id="main-container" ref={ref}>
      <Box
        responsive={{
          paddingX: {
            desktop: 'large',
            tablet: 'large',
            mobile: 'xLarge',
          },
        }}
      >
        <MainPage />
        <AboutPage />
        <Gallery />

        <div className="vertical-scroll" data-scroll-section>
          <h1 data-scroll>Another Vertical Section</h1>
          <p data-scroll>Scroll more to explore!</p>
        </div>
      </Box>
    </div>
  );
};

export default ScrollBox;
