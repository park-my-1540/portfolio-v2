'use client';
import React, { useRef, useState, useEffect } from 'react';
import Box from '@/components/layouts/Box/Box';
import Main from '@/components/organisms/Project/Main/Main';
import Column from '@/components/organisms/Project/Column/Column';
import Lenis from '@studio-freight/lenis';
import { scrollbar } from '@/styles/style.css';

export default function Project({ list }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const lenis = new Lenis({
      wrapper: containerRef.current, // 스크롤 컨테이너 지정
      content: containerRef.current.firstChild, // 스크롤 컨텐츠
      smooth: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className={`${scrollbar} project`} ref={containerRef}>
      <Box
        marginBottom="1rem"
        marginLeft="30px"
        marginRight="30px"
        display="grid"
        responsive={{
          gridTemplateColumns: {
            desktop: 'full',
            tablet: 'full',
            mobile: 'full',
          },
          gridTemplateRows: {
            desktop: 'single',
            tablet: 'single',
            mobile: 'single',
          },
          gridColumnGap: 'medium',
        }}
      >
        <Column />
        <Main list={list} />
      </Box>
    </div>
  );
}
