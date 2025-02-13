'use client';
import React, { useEffect, useRef } from 'react';
import { GalleryProps } from '@/types/common';
import Box from '@/components/layouts/Box/Box';

import About from '@/components/templates/About';
import Contact from '@/components/templates/Contact';
import Main from '@/components/templates/Main';
import Gallery from '@/components/organisms/Gallery';
import Footer from '@/components/organisms/Footer/Footer';

import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import useLocoScroll from '@/hook/useLocoScroll';
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
        <Main />
        <About />
        <Gallery />
        <section className="panel" id="forScrollGsap" data-scroll-section>
          <Box height={300}></Box>
        </section>
      </Box>
      <Contact />
      <Footer />
    </div>
  );
}
