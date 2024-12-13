'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import * as animate from '@/utils/animate';
import Box from '@/components/layouts/Box/Box';
import { page } from './page.css';
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // 현재 경로
  const [currentPath, setCurrentPath] = useState(pathname);
  const pageRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef) {
      return;
    }
    animate.pageIn(transitionRef);
    animate.pageFadeIn(pageRef);
  }, [pathname, currentPath, pageRef]);

  return (
    <div>
      <div id="transition-element" className={page} ref={transitionRef}></div>
      <Box margin={30} ref={pageRef}>
        {children}
      </Box>
    </div>
  );
}
