'use client';
import React from 'react';
import Box from '@/components/layouts/Box/Box';
import MatterBox from '@/components/layouts/MatterBox/MatterBox';
import ScrollArrow from '@/components/molecules/ScrollArrow';
import Line from '@/components/atoms/line';
import { pageContainer, pageInner } from '@/styles/style.css';

export default function Main() {
  return (
    <section data-scroll-section id="main">
      <Box className={`main ${pageContainer}`}>
        <Box className={pageInner}>
          <Line className="line-2" />
          <MatterBox />
          <ScrollArrow />
        </Box>
      </Box>
    </section>
  );
}
