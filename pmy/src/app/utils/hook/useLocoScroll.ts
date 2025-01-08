import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useSetAtom } from 'jotai';
import { viewState } from '@/jotai/viewAtom';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

/**
 * Locomotive Scroll의 현재 스크롤 위치를 기준으로 요소의 스크롤 값 계산하여 반환
 * @param elementSelector
 * @param locoScroll
 */
const getScrollPositionOfElement = (
  elementSelector: string,
  locoScroll: React.RefObject<LocomotiveScroll | null>,
) => {
  const element = document.querySelector(elementSelector);
  if (!element || !locoScroll.current) return;

  const scrollInstance = locoScroll.current.scroll.instance;
  const { top } = element.getBoundingClientRect();

  return top + scrollInstance.scroll.y;
};

/**
 * detail key 값이 있다면 갤러리 섹션으로 스크롤 이동
 * @param scrollRef
 */
const moveToGalleryPosition = (
  scrollRef: React.RefObject<LocomotiveScroll | null>,
) => {
  if (!sessionStorage.getItem('detail') || !scrollRef.current) return;

  scrollRef.current.scrollTo(
    getScrollPositionOfElement('.gallery-wrap', scrollRef),
    {
      duration: 0,
    },
  );
};

/**
 * set gallery timeline
 * @param tl - timeline
 */
const setGalleryTimeline = (tl) => {
  const galleryEl = document.querySelector('.gallery') as HTMLElement;
  const sections = gsap.utils.toArray('.gallery-item-wrapper');

  if (!galleryEl || !tl) return;
  tl = gsap.timeline({
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

  tl.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
  });
  return tl;
};

/**
 * Locomotive Scroll과 GSAP의 ScrollTrigger를 통합하여 스크롤 이벤트를 처리합니다.
 * @param start - 스크롤 통합을 시작할지 여부를 결정하는 불린 값
 */
export default function useLocoScroll(start: boolean, ref: any) {
  const setScrollState = useSetAtom(viewState);
  const pathname = usePathname(); // 현재 경로
  const locoScrollRef = useRef<LocomotiveScroll | null>(null);
  let tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const initializeLocoScroll = async () => {
      const { default: gsap } = await import('gsap');
      const { default: LocomotiveScroll } = await import('locomotive-scroll');
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

        setScrollState({ locoScroll: locoScrollRef.current });

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

        // ScrollTrigger 새로고침
        const refreshScrollTrigger = () => {
          if (locoScrollRef.current) {
            locoScrollRef.current.update();
          }
        };

        tl.current = setGalleryTimeline(tl);
        moveToGalleryPosition(locoScrollRef);

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
