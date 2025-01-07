import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useSetAtom } from 'jotai';
import { viewState } from '@/jotai/viewAtom';

gsap.registerPlugin(ScrollTrigger);

// Locomotive Scroll과 ScrollTrigger를 통합하는 커스텀 훅
/**
 * Locomotive Scroll과 GSAP의 ScrollTrigger를 통합하여 스크롤 이벤트를 처리합니다.
 * @param start - 스크롤 통합을 시작할지 여부를 결정하는 불린 값
 */
export default function useLocoScroll(start: boolean, containerRef: any) {
  let timer: ReturnType<typeof setTimeout>;
  const setScrollState = useSetAtom(viewState);

  useEffect(() => {
    if (!containerRef.current) return;

    // 동적으로 locomotive-scroll import
    const loadLocomotiveScroll = async () => {
      const { default: LocomotiveScroll } = await import('locomotive-scroll', {
        with: {},
      });

      const newScroll = new LocomotiveScroll({
        el: containerRef.current as HTMLElement,
        smooth: true,
        resetNativeScroll: true,
        smartphone: { smooth: true },
      });
      // setScroll(newScroll);
    };
    loadLocomotiveScroll();

    if (!scroll) return;

    const handleUpdateScroll = () => {
      try {
        // scroll?.update();
      } catch {}
    };

    // 페이지 컨텐츠 로드, 뷰포트 리사이즈 시마다 스크롤 변경사항 업데이트
    window.addEventListener('DOMContentLoaded', handleUpdateScroll);
    window.addEventListener('resize', handleUpdateScroll);

    return () => {
      window.removeEventListener('DOMContentLoaded', handleUpdateScroll);
      window.removeEventListener('resize', handleUpdateScroll);
      // scroll?.destroy();
      // setScroll(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
