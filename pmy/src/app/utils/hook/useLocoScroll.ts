import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useSetAtom } from 'jotai';
import { viewState } from '@/jotai/viewAtom';

gsap.registerPlugin(ScrollTrigger);

// Locomotive Scroll과 ScrollTrigger를 통합하는 커스텀 훅
/**
 * Locomotive Scroll과 GSAP의 ScrollTrigger를 통합하여 스크롤 이벤트를 처리합니다.
 * @param start - 스크롤 통합을 시작할지 여부를 결정하는 불린 값
 */
export default function useLocoScroll(start, containerRef) {

  const setScrollState = useSetAtom(viewState);

  useEffect(() => {
    if (!start && !containerRef.current) return;
    let locoScroll:LocomotiveScroll = null;

    const scrollEl = containerRef.current;

    locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    });

    locoScroll.on("scroll", (loco:LocomotiveScroll) => {
      ScrollTrigger.update();

      if(loco.scroll.y > 0) {
        setScrollState({ scrollStart: true });
      }
    });

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        }
        return null;
      },
      scrollLeft(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.x;
        }
        return null;
      },
      pinType: containerRef.current.style.transform ? 'transform' : 'fixed',
    });

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };

    gsap.fromTo(
      containerRef.current,
      { backgroundColor: 'var(--dark)' },
      {
        backgroundColor: 'var(--light)',
        scrollTrigger: {
          trigger: '.color-light', // 밝은 색 섹션의 클래스
          scroller: containerRef.current, // Locomotive Scroll 컨테이너
          scrub: true,
          start: 'top center', // 애니메이션 시작 위치
          end: 'bottom center', // 애니메이션 끝나는 위치
        },
      },
    );

    ScrollTrigger.addEventListener("refresh", lsUpdate);
    ScrollTrigger.refresh();

    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener("refresh", lsUpdate);
        locoScroll.destroy();
        locoScroll = null;
        console.log("Kill", locoScroll);
      }
    };
  }, [start]);
}