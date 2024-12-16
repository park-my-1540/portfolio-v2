import React, { useRef, useState } from 'react';
import useLocoScroll from '@/utils/hook/useLocoScroll';

import MainPage from '@/components/pages/MainPage';
import AboutPage from '@/components/pages/AboutPage';
import ProjectsPage from '@/components/pages/ProjectsPage';
import CustomCursor from '@/components/molecules/CustomCursor';

const ScrollBox: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [preloader, setPreload] = useState(false);

  useLocoScroll(!preloader, containerRef);

  return (
    <>
      <CustomCursor />
      <div className="smooth-scroll" id="main-container" ref={containerRef}>
        <MainPage />
        <AboutPage />
        <ProjectsPage />
        <section className="panel gray">DONE!</section>
      </div>
    </>
  );
};

export default ScrollBox;
