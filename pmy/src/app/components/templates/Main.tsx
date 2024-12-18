'use client';

import React, { useEffect, useRef } from 'react';
import * as animate from '@/utils/animate';
import { MatterBox } from '@/components/layouts/MatterBox/MatterBox';
import ScrollArrow from '@/components/molecules/ScrollArrow';
import Line from '@/components/atoms/line';

export default function Main() {
  const lineRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      animate.scaleOnScroll(lineRef, triggerRef);
    });
  }, []);
  return (
    <>
      <section className="panel main color-dark" ref={triggerRef}>
        <Line className="line-2" ref={lineRef} />
        {/* <script src="https://www.jsdelivr.com/package/npm/poly-decomp"></script>
        <script src="https://cdn.jsdelivr.net/npm/pathseg@1.2.1/pathseg.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/poly-decomp@0.3.0/build/decomp.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.17.1/matter.js"></script> */}
        <MatterBox />
        <ScrollArrow />
      </section>
    </>
  );
}
