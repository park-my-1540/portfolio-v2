import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useSetAtom } from 'jotai';
import { viewState } from '@/jotai/viewAtom';

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start: boolean, containerRef: any) {
  const locoScrollRef = useRef<any>(null); // LocomotiveScroll 인스턴스를 ref로 저장
  let timer: ReturnType<typeof setTimeout>;
  const setScrollState = useSetAtom(viewState);

  useEffect(() => {
    if (!start || !containerRef.current) return;

    if (typeof window === 'undefined' || !window.document) {
      return;
    }

    // LocomotiveScroll을 동적으로 임포트
    import('locomotive-scroll').then((module) => {
      const LocomotiveScroll = module.default;

      // LocomotiveScroll 인스턴스 초기화
      const scrollEl = containerRef.current;
      if (!scrollEl) return;

      const savedScrollPosition = sessionStorage.getItem('scrollPositionY');

      // LocomotiveScroll 인스턴스를 ref에 저장
      locoScrollRef.current = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 1,
        class: 'is-reveal',
      });

      // ScrollTrigger와 LocomotiveScroll 동기화
      ScrollTrigger.scrollerProxy(scrollEl, {
        scrollTop(value) {
          if (locoScrollRef.current) {
            return arguments.length
              ? locoScrollRef.current.scrollTo(value, 0, 0)
              : locoScrollRef.current.scroll.instance.scroll.y;
          }
          return null;
        },
        scrollLeft(value) {
          if (locoScrollRef.current) {
            return arguments.length
              ? locoScrollRef.current.scrollTo(value, 0, 0)
              : locoScrollRef.current.scroll.instance.scroll.x;
          }
          return null;
        },
        getBoundingClientRect() {
          return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: scrollEl.style.transform ? 'transform' : 'fixed',
      });

      // locoScroll의 업데이트를 트리거
      const lsUpdate = () => {
        if (locoScrollRef.current) {
          locoScrollRef.current.update();
        }
      };

      // ScrollTrigger 업데이트
      ScrollTrigger.addEventListener('refresh', lsUpdate);
      ScrollTrigger.refresh();

      // Scroll 이벤트에 따라 ScrollTrigger 업데이트
      locoScrollRef.current.on('scroll', () => {
        ScrollTrigger.update();
      });

      // 리소스 정리
      return () => {
        if (locoScrollRef.current) {
          clearTimeout(timer);
          ScrollTrigger.removeEventListener('refresh', lsUpdate);
          locoScrollRef.current.destroy();
          locoScrollRef.current = null;
        }
      };
    });
  }, [start, containerRef]);

  return null;
}
