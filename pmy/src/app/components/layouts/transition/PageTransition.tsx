"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { gsap } from "gsap";


export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // 현재 경로
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== currentPath) {
      // 페이지 전환 시작 애니메이션
      gsap.to(".page", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => setCurrentPath(pathname), // 경로 변경
      });
    } else {
      // 페이지 전환 완료 애니메이션
      gsap.fromTo(
        ".page",
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.in" }
      );
    }
  }, [pathname, currentPath]);

  return <div className="page" style={{height:"100%"}}>{children}</div>;
}
