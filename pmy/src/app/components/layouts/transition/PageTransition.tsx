'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import * as animate from '@/utils/animate';
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
      <div ref={pageRef}>{children}</div>;
    </div>
  );
}
