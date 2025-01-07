import { useEffect } from 'react';
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

  useEffect(() => {
    if (!ref.current) return;

    const initializeLocoScroll = async () => {
      const { default: LocomotiveScroll } = await import('locomotive-scroll');
      const gsap = (await import('gsap')).default;
      const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
      gsap.registerPlugin(ScrollTrigger);
      const scrollEl = ref.current as HTMLElement | null;

      if (!scrollEl) return;
      const locoScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 1,
        class: 'is-reveal',
      });

      locoScroll.on('scroll', () => {
        ScrollTrigger.update();
      });

      // ScrollTrigger와 Locomotive Scroll 동기화
      ScrollTrigger.scrollerProxy(ref.current, {
        scrollTop(value) {
          if (locoScroll) {
            return arguments.length
              ? null
              : locoScroll.scroll.instance.scroll.y;
          }
          return null;
        },
        scrollLeft(value) {
          if (locoScroll) {
            return arguments.length
              ? null
              : locoScroll.scroll.instance.scroll.x;
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

      const lsUpdate = () => {
        if (locoScroll) {
          locoScroll.update();
        }
      };

      //gallery animation
      const galleryEl = document.querySelector('.gallery') as HTMLElement; // HTMLElement로 타입 캐스팅
      const sections = gsap.utils.toArray('.gallery-item-wrapper');

      if (!galleryEl) return;
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
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

      ScrollTrigger.addEventListener('refresh', lsUpdate);
      ScrollTrigger.refresh();

      return () => {
        if (locoScroll) {
          ScrollTrigger.removeEventListener('refresh', lsUpdate);
          locoScroll.destroy();
          console.log('Kill', locoScroll);
        }
      };
    };

    initializeLocoScroll();
  }, [ref]);
}
