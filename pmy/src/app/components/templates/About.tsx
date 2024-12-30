'use client';

import React, { useEffect, useRef } from 'react';
import * as animate from '@/utils/animate';
import Box from '@/components/layouts/Box/Box';
import Introduction from '@/components/organisms/Introduction/Introduction';
import Line from '@/components/atoms/line';

export default function About() {
  const lineRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  let timer: ReturnType<typeof setTimeout>;
  useEffect(() => {
    // This does not seem to work without a settimeout
    timer = setTimeout(() => {
      animate.scaleOnScroll(lineRef, triggerRef);
    });
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="panel orange color-light" ref={triggerRef}>
      <div>
        <Line className="line-2" ref={lineRef} />
        <Box display="flex">
          <Box display="flex" direction="column">
            <Introduction />
          </Box>
        </Box>
      </div>
    </section>
  );
}
