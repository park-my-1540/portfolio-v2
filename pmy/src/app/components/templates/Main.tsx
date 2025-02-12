'use client';
import React, { useRef } from 'react';
import Box from '@/components/layouts/Box/Box';
import Matter from '@/components/organisms/Main/Matter/MatterCanvas';
import ScrollArrow from '@/components/molecules/ScrollArrow';
import Line from '@/components/atoms/line';
import { pageContainer, pageInner } from '@/styles/style.css';

export default function Main() {
  const svgRef = useRef<HTMLDivElement>(null);
  return (
    <section data-scroll-section id="main">
      <Box className={`main ${pageContainer}`}>
        <Box className={pageInner}>
          <Line />
          <Box position="relative" width="100%" height="100%" ref={svgRef}>
            <Matter />
          </Box>
          <ScrollArrow />
        </Box>
      </Box>
    </section>
  );
}
