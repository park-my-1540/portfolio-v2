import locoScrollState from '@/jotai/locoScrollAtom';
import scrollStartState from '@/jotai/scrollStartAtom';
import * as animate from '@/utils/animate';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useSetAtom } from 'jotai';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import { debounce } from 'lodash';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Locomotive Scroll의 현재 스크롤 위치를 기준으로 요소의 스크롤 값 계산하여 반환
 * @param elementSelector
 * @param locoScroll
 */
const getScrollPositionOfElement = (
  elementSelector: string,
  locoScroll: React.RefObject<LocomotiveScroll | null>,
): number | undefined => {
  const element = document.querySelector(elementSelector);
  if (!element || !locoScroll.current) return undefined;

  const scrollInstance = locoScroll.current.scroll.instance;
  const { top } = element.getBoundingClientRect();

  return top + scrollInstance.scroll.y;
};

/**
 * detail key 값이 있다면 갤러리 섹션으로 스크롤 이동
 * @param scrollRef
 */
const moveToGalleryPosition = (scrollRef: React.RefObject<LocomotiveScroll | null>) => {
  if (!sessionStorage.getItem('detail') || !scrollRef.current) return;

  scrollRef.current.scrollTo(getScrollPositionOfElement('#project', scrollRef), {
    duration: 0,
  });
};

/**
 * Locomotive Scroll과 GSAP의 ScrollTrigger를 통합하여 스크롤 이벤트를 처리합니다.
 * @param start - 스크롤 통합을 시작할지 여부를 결정하는 불린 값
 */
export default function useLocoScroll(start: boolean, ref: any) {
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

  const setScrollStartState = useSetAtom(scrollStartState);
  const setLocoScrollState = useSetAtom(locoScrollState);
  const pathname = usePathname(); // 현재 경로
  const locoScrollRef = useRef<LocomotiveScroll | null>(null);

  const galleryTimeline = useRef<gsap.core.Timeline | null>(null);
  const aboutTimeline = useRef<gsap.core.Timeline | null>(null);
  const mainTimeline = useRef<gsap.core.Timeline | null>(null);
  const skillTimeline = useRef<gsap.core.Timeline | null>(null);
  const contactTimeline = useRef<gsap.core.Timeline | null>(null);

  /**
   * 타이머 핸들러
   */
  const debounceResizeHandler = (locoScrollRef: React.RefObject<LocomotiveScroll | null>, timer: any) => {
    const handleResize = debounce(() => {
      locoScrollRef.current?.scrollTo(0, { duration: 0 });
      clearTimeout(timer);
      timer = setTimeout(() => {
        locoScrollRef.current?.update();
        ScrollTrigger.refresh(); // 새로 계산
        refreshScrollTriggers([
          galleryTimeline.current,
          skillTimeline.current,
          aboutTimeline.current,
          mainTimeline.current,
          contactTimeline.current,
        ]);
      }, 500);
    }, 300);

    return handleResize;
  };

  let timer;
  let resizeTimer;

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
            smooth: true,
          },
          smartphone: {
            smooth: true,
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
          scrollTop() {
            if (locoScrollRef.current) {
              return arguments.length ? null : locoScrollRef.current.scroll.instance.scroll.y;
            }
            return null;
          },
          scrollLeft() {
            if (locoScrollRef.current) {
              return arguments.length ? null : locoScrollRef.current.scroll.instance.scroll.x;
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

        // gsap timeline
        mainTimeline.current = animate.triggerMainSections(mainTimeline);
        aboutTimeline.current = animate.triggerHighlightsText(aboutTimeline);
        galleryTimeline.current = animate.triggerHorizontalSections(galleryTimeline);
        skillTimeline.current = animate.triggerSkill(skillTimeline);
        contactTimeline.current = animate.triggerContactSections(contactTimeline);

        clearTimeout(timer);
        timer = setTimeout(() => {
          moveToGalleryPosition(locoScrollRef);
          sessionStorage.removeItem('detail');
        });

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
      [galleryTimeline, aboutTimeline, skillTimeline, mainTimeline, contactTimeline].forEach((tl) => {
        if (tl.current) {
          tl.current.kill();
          tl.current = null;
        }
      });
    };
  }, [ref]);

  // 경로 변경 시 ScrollTrigger 인스턴스 새로고침
  useEffect(() => {
    refreshScrollTriggers([
      galleryTimeline.current,
      skillTimeline.current,
      aboutTimeline.current,
      mainTimeline.current,
      contactTimeline.current,
    ]);
    locoScrollRef.current?.update();
  }, [pathname]);
}
