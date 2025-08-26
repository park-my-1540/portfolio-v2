'use client';

import Box from '@/components/layouts/Box/Box';
import Footer from '@/components/organisms/Footer/Footer';
import Gallery from '@/components/organisms/Gallery';
import About from '@/components/templates/About';
import Contact from '@/components/templates/Contact';
import Main from '@/components/templates/Main';
import Skill from '@/components/templates/Skill';
import { Filtered } from '@/types/common';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useSetAtom } from 'jotai';
import { useRef } from 'react';

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
