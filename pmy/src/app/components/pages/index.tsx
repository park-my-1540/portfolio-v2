'use client';
import React, { useEffect, useRef } from 'react';
import { GalleryProps } from '@/types/common';
import Box from '@/components/layouts/Box/Box';
import MainPage from './MainPage';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import useLocoScroll from '@/utils/hook/useLocoScroll';
import { useSetAtom } from 'jotai';
import { galleryListState } from '@/jotai/galleryListAtom';
import { vars } from '@/styles/common/createThemeContract.css';

gsap.registerPlugin(ScrollTrigger);

export default function Home({ list }: { list: GalleryProps[] }) {
  const setList = useSetAtom(galleryListState);
  setList(list);

  const ref = useRef(null);
  useLocoScroll(true, ref);

  useEffect(() => {
    if (!ref && (typeof window === 'undefined' || !window.document)) return;
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
        <ProjectsPage />
        <section className="panel" id="forScrollGsap" data-scroll-section>
          <Box height={300}></Box>
        </section>
      </Box>
      <ContactPage />
      <footer data-scroll-section>
        <Box height={100} backgroundColor={vars.color.point}></Box>
      </footer>
    </div>
  );
}
