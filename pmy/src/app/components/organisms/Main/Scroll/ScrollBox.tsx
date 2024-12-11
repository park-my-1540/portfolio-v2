import React, { useRef, useState } from 'react';
import './style.css';
import useLocoScroll from '@/utils/hook/useLocoScroll';

import Header from '@/components/organisms/Header/Header';
import MainPage from '@/components/pages/MainPage';
import AboutPage from '@/components/pages/AboutPage';
import ProjectsPage from '@/components/pages/ProjectsPage';

const ScrollBox: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [preloader, setPreload] = useState(false);

  useLocoScroll(!preloader, containerRef);

  return (
    <>
      <Header />
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
