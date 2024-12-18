import React, { useRef, useState } from 'react';
import useLocoScroll from '@/utils/hook/useLocoScroll';

import MainPage from '@/components/pages/MainPage';
import AboutPage from '@/components/pages/AboutPage';
import ProjectsPage from '@/components/pages/ProjectsPage';

import { useSetAtom } from 'jotai';
import { viewState } from '@/jotai/viewAtom';

const ScrollBox: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [preloader, setPreload] = useState(false);

  const setContainerRef = useSetAtom(viewState);
  setContainerRef({ containerRef: containerRef });

  useLocoScroll(!preloader, containerRef);

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
