'use client';
import React, { useRef, useState, useEffect } from 'react';
import Box from '@/components/layouts/Box/Box';
import Main from '@/components/organisms/Project/Main/Main';
import Column from '@/components/organisms/Project/Column/Column';
import Lenis from '@studio-freight/lenis';
import { scrollbar } from '@/styles/style.css';
import { pageListProps } from '@/types/common';
import { pageContainer, project } from '@/styles/style.css';

export default function Project({ list }: pageListProps) {
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
        paddingBottom={'var(--padding-container)'}
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
        <Column filtered={list[0].filtered} />
        <Main blocks={list[0].blocks} />
      </Box>
    </div>
  );
}
