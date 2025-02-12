import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useSetAtom } from 'jotai';
import { scrollStartState } from '@/jotai/scrollStartAtom';
import { locoScrollState } from '@/jotai/locoScrollAtom';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import gsap from 'gsap';
import * as animate from '@/utils/animate';
import { debounce } from 'lodash';

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
    getScrollPositionOfElement('#project', scrollRef),
    {
      duration: 0,
    },
  );
};

/**
 * 타이머 핸들러
 */
const debounceResizeHandler = (
  locoScrollRef: React.RefObject<LocomotiveScroll | null>,
  timer: any,
) => {
  const handleResize = debounce(() => {
    locoScrollRef.current?.scrollTo(0, { duration: 0 });
    clearTimeout(timer);
    timer = setTimeout(() => {
      locoScrollRef.current?.update();
      ScrollTrigger.refresh(); // 새로 계산
    }, 500);
  }, 300);

  return handleResize;
};

/**
 * ScrollTrigger 새로고침 함수
 */
const refreshScrollTriggers = (timelines) => {
  timelines.forEach((tl) => {
    if (tl && tl.scrollTrigger) {
      tl.scrollTrigger.refresh();
    }
  });
};

/**
 * Locomotive Scroll과 GSAP의 ScrollTrigger를 통합하여 스크롤 이벤트를 처리합니다.
 * @param start - 스크롤 통합을 시작할지 여부를 결정하는 불린 값
 */
export default function useLocoScroll(start: boolean, ref: any) {
  const setScrollStartState = useSetAtom(scrollStartState);
  const setLocoScrollState = useSetAtom(locoScrollState);
  const pathname = usePathname(); // 현재 경로
  const locoScrollRef = useRef<LocomotiveScroll | null>(null);

  const galleryTimeline = useRef<gsap.core.Timeline | null>(null),
    aboutTimeline = useRef<gsap.core.Timeline | null>(null),
    mainTimeline = useRef<gsap.core.Timeline | null>(null),
    contactTimeline = useRef<gsap.core.Timeline | null>(null);

  let timer, resizeTimer;

  useEffect(() => {
    const handleResize = debounceResizeHandler(locoScrollRef, resizeTimer);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
          tablet: {
            breakpoint: 0, // 모바일/태블릿 환경에서도 동일하게 부드러운 스크롤을 적용하도록 강제.
          },
        });

        setLocoScrollState(locoScrollRef.current);

        locoScrollRef.current.on('scroll', (loco) => {
          ScrollTrigger.update();
          if (loco.scroll.y > 0) {
            setScrollStartState(true);
          }
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

        // gsap timeline
        mainTimeline.current = animate.triggerMainSections(mainTimeline);
        aboutTimeline.current = animate.triggerHighlightsText(aboutTimeline);
        galleryTimeline.current =
          animate.triggerHorizontalSections(galleryTimeline);
        contactTimeline.current =
          animate.triggerContactSections(contactTimeline);

        clearTimeout(timer);
        timer = setTimeout(() => {
          moveToGalleryPosition(locoScrollRef);
          sessionStorage.removeItem('detail');
        });

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
      [galleryTimeline, aboutTimeline, mainTimeline, contactTimeline].forEach(
        (tl) => {
          if (tl.current) {
            tl.current.kill();
            tl.current = null;
          }
        },
      );
    };
  }, [ref]);

  // 경로 변경 시 ScrollTrigger 인스턴스 새로고침
  useEffect(() => {
    refreshScrollTriggers([
      galleryTimeline.current,
      aboutTimeline.current,
      mainTimeline.current,
      contactTimeline.current,
    ]);
  }, [pathname]);
}
