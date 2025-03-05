'use client';

import React, { useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useSetAtom } from 'jotai';
import { Filtered } from '@/types/common';
import Box from '@/components/layouts/Box/Box';
import Skill from '@/components/templates/Skill';
import About from '@/components/templates/About';
import Contact from '@/components/templates/Contact';
import Main from '@/components/templates/Main';
import Gallery from '@/components/organisms/Gallery';
import Footer from '@/components/organisms/Footer/Footer';

import useLocoScroll from '@/hook/useLocoScroll';
import galleryListState from '@/jotai/galleryListAtom';

gsap.registerPlugin(ScrollTrigger);

export default function Home({ list }: { list: Filtered[] }) {
  const setList = useSetAtom(galleryListState);
  setList(list);

  const ref = useRef(null);
  useLocoScroll(true, ref);

  return (
    <div data-scroll-container id="main-container" ref={ref}>
      <Main />
      <Box
        responsive={{
          paddingX: {
            desktop: 'large',
            tablet: 'large',
            mobile: 'xLarge',
          },
        }}
      >
        <About />
        <Skill />
        <Gallery />
        <section className="panel" id="forScrollGsap" data-scroll-section>
          <Box
            responsive={{
              height: {
                desktop: 'large',
                tablet: 'large',
                mobile: 'medium',
              },
            }}
          ></Box>
        </section>
      </Box>
      <Contact />
      <Footer />
    </div>
  );
}
