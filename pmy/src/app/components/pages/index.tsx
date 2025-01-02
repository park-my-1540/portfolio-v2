import React, { useRef, useState, useEffect } from 'react';
import useLocoScroll from '@/utils/hook/useLocoScroll';

import MainPage from './MainPage';
import AboutPage from './AboutPage';
import ProjectsPage from '../../../pages/projects';

import { useSetAtom } from 'jotai';
import { viewState } from '@/jotai/viewAtom';

const ScrollBox: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [preloader, setPreload] = useState(false);
  const setContainerRef = useSetAtom(viewState);

  useLocoScroll(!preloader, containerRef);
  useEffect(() => {
    setContainerRef({ containerRef });
  }, []);
  return (
    <div className="smooth-scroll" id="main-container" ref={containerRef}>
      <MainPage />
      <AboutPage />
      <ProjectsPage />
      <section className="panel gray">DONE!</section>
    </div>
  );
};

export default ScrollBox;
