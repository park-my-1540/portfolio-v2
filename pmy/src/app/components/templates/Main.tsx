'use client';
import React from 'react';
import Box from '@/components/layouts/Box/Box';
import MatterBox from '@/components/layouts/MatterBox/MatterBox';
import ScrollArrow from '@/components/molecules/ScrollArrow';
import Line from '@/components/atoms/line';

export default function Main() {
  return (
    <section data-scroll-section id="main">
      <Box paddingTop="calc(10px + 1.6rem*2 + 2.85rem)" className="main">
        <Box
          height="calc(100vh - (20px + 1.6rem*2 + 2.85rem))"
          border="1px solid"
        >
          <Line className="line-2" />
          <MatterBox />
          <ScrollArrow />
        </Box>
      </Box>
    </section>
  );
}
