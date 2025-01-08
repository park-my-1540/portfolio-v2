import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useSetAtom } from 'jotai';
import { viewState } from '@/jotai/viewAtom';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

// Locomotive Scroll과 ScrollTrigger를 통합하는 커스텀 훅
/**
 * Locomotive Scroll과 GSAP의 ScrollTrigger를 통합하여 스크롤 이벤트를 처리합니다.
 * @param start - 스크롤 통합을 시작할지 여부를 결정하는 불린 값
 */
export default function useLocoScroll(start: boolean, ref: any) {
  const setScrollState = useSetAtom(viewState);
  const pathname = usePathname(); // 현재 경로
  const locoScrollRef = useRef<LocomotiveScroll | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const initializeLocoScroll = async () => {
      const { default: LocomotiveScroll } = await import('locomotive-scroll');
      const { default: gsap } = await import('gsap');
      const { default: ScrollTrigger } = await import('gsap/ScrollTrigger');

      gsap.registerPlugin(ScrollTrigger);

      const scrollEl = ref.current as HTMLElement | null;
      if (!scrollEl) return;

      // 기존 locoScroll 인스턴스가 있는 경우 초기화 방지
      if (!locoScrollRef.current) {
        locoScrollRef.current = new LocomotiveScroll({
          el: scrollEl,
          smooth: true,
          multiplier: 1,
          class: 'is-reveal',
        });

        locoScrollRef.current.on('scroll', () => {
          ScrollTrigger.update();
        });

        // ScrollTrigger와 Locomotive Scroll 동기화
        ScrollTrigger.scrollerProxy(scrollEl, {
          scrollTop(value) {
            if (locoScrollRef.current) {
              return arguments.length
                ? null
                : locoScrollRef.current.scroll.instance.scroll.y;
            }
            return null;
          },
          scrollLeft(value) {
            if (locoScrollRef.current) {
              return arguments.length
                ? null
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
        });

        // 갤러리 애니메이션 설정
        const galleryEl = document.querySelector('.gallery') as HTMLElement;
        const sections = gsap.utils.toArray('.gallery-item-wrapper');

        if (galleryEl) {
          tl.current = gsap.timeline({
            scrollTrigger: {
              start: 'top top',
              trigger: galleryEl,
              scroller: '#main-container',
              end: () => `+=${galleryEl.offsetWidth}`,
              pin: true,
              scrub: 0.5,
              snap: 1 / (sections.length - 1),
            },
          });

          tl.current.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: 'none',
          });
        }

        // ScrollTrigger 새로고침
        const refreshScrollTrigger = () => {
          if (locoScrollRef.current) {
            locoScrollRef.current.update();
          }
        };

        ScrollTrigger.addEventListener('refresh', refreshScrollTrigger);
        ScrollTrigger.refresh();
      }
    };

    initializeLocoScroll();

    return () => {
      // ScrollTrigger와 Locomotive Scroll 정리
      if (locoScrollRef.current) {
        ScrollTrigger.removeEventListener('refresh', () => {
          initializeLocoScroll();
        });
        locoScrollRef.current.destroy();
        locoScrollRef.current = null;
      }

      if (tl.current) {
        tl.current.kill();
        tl.current = null;
      }
    };
  }, [ref]);

  // 경로 변경 시 ScrollTrigger 인스턴스 새로고침
  useEffect(() => {
    if (tl.current && tl.current.scrollTrigger) {
      tl.current.scrollTrigger.refresh();
    }
  }, [pathname]);
}
