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
import { useEffect, useRef } from 'react';

import useLocoScroll from '@/hook/useLocoScroll';
import usePageReady from '@/hook/usePageReady';
import galleryListState from '@/jotai/galleryListAtom';

gsap.registerPlugin(ScrollTrigger);

export default function Home({ list }: { list: Filtered[] }) {
  // useEffect(() => {
  //   if (typeof window === 'undefined') return;
  //   const key = 'bf__reloaded_once'; // 세션 플래그
  //   if (!sessionStorage.getItem(key)) {
  //     sessionStorage.setItem(key, '1');
  //     window.location.replace(window.location.href); // 또는 window.location.reload()
  //   }
  // }, []);

  const setList = useSetAtom(galleryListState);
  // 2) 렌더 중 setState 금지 → 클라이언트에서만 세팅
  useEffect(() => {
    setList(list);
  }, [list, setList]);

  const ref = useRef<HTMLDivElement | null>(null);
  const ready = usePageReady();

  useLocoScroll(ready, ref);
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
