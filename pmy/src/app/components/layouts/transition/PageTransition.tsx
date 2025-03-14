'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
import * as animate from '@/utils/animate';
import Box from '@/components/layouts/Box/Box';
import { page } from './index.css';

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // 현재 경로
  const pageRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef) {
      return;
    }
    animate.pageIn(transitionRef);
    animate.pageFadeIn(pageRef);
  }, [pathname, pageRef]);

  return (
    <div>
      <div id="transition-element" className={page} ref={transitionRef}></div>
      <Box ref={pageRef}>{children}</Box>
    </div>
  );
}
