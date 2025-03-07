'use client';

import React, { useRef, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Box from '@/components/layouts/Box/Box';
import Main from '@/components/organisms/Project/Main/Main';
import Column from '@/components/organisms/Project/Column/Column';
import { scrollbar, pageContainer, project } from '@/styles/style.css';
import { NotionRes } from '@/types/common';

export default function Project({ list }: { list: NotionRes }) {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;

    const lenis = new Lenis({
      wrapper: containerRef.current, // 스크롤 컨테이너 지정
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div
      className={`${scrollbar} ${project} ${pageContainer}`}
      ref={containerRef}
    >
      <Box
        display="grid"
        responsive={{
          paddingX: {
            desktop: 'large',
            tablet: 'large',
            mobile: 'xLarge',
          },
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
        <Column filtered={list.filtered} />
        <Main blocks={list.pageWithBlocks} />
      </Box>
    </div>
  );
}
