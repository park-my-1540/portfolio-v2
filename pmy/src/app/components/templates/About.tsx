'use client';

import React, { useEffect, useRef } from 'react';
import * as animate from '@/utils/animate';
import Box from '@/components/layouts/Box/Box';
import Introduction from '@/components/organisms/Introduction/Introduction';
import Line from '@/components/atoms/line';

export default function About() {
  return (
    <section className="panel" id="about" data-scroll-section>
      <Box
        display="flex"
        direction="column"
        justify="center"
        align="center"
        borderTop="1px solid"
        marginTop={150}
        paddingTop={50}
      >
        <Introduction />
      </Box>
    </section>
  );
}
