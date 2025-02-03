// import { useEffect } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';
// import { useSetAtom } from 'jotai';
// import { viewState } from '@/jotai/viewAtom';

// gsap.registerPlugin(ScrollTrigger);

// // Locomotive Scroll과 ScrollTrigger를 통합하는 커스텀 훅
// /**
//  * Locomotive Scroll과 GSAP의 ScrollTrigger를 통합하여 스크롤 이벤트를 처리합니다.
//  * @param start - 스크롤 통합을 시작할지 여부를 결정하는 불린 값
//  */
// export default function useLocoScroll(start, containerRef) {
//   let timer: ReturnType<typeof setTimeout>;
//   const setScrollState = useSetAtom(viewState);

//   useEffect(() => {
//     if (!start && !containerRef.current) return;
//     let locoScroll: LocomotiveScroll = null;

//     const scrollEl = containerRef.current;
//     if (!scrollEl) return;

//     const savedScrollPosition = sessionStorage.getItem('scrollPositionY');

//     locoScroll = new LocomotiveScroll({
//       el: scrollEl,
//       smooth: true,
//       multiplier: 1,
//       class: 'is-reveal',
//       initPosition: {
//         y: savedScrollPosition !== null ? parseInt(savedScrollPosition) : 0,
//       },
//     });

//     locoScroll.on('scroll', (loco: LocomotiveScroll) => {
//       ScrollTrigger.update();

//       if (loco.scroll.y > 0) {
//         setScrollState({ scrollStart: true, locoScroll });
//       }
//     });

//     timer = setTimeout(() => {
//       sessionStorage.removeItem('scrollPositionY');
//     });

//     // ScrollTrigger와 Locomotive Scroll 동기화
//     ScrollTrigger.scrollerProxy(scrollEl, {
//       scrollTop(value) {
//         if (locoScroll) {
//           return arguments.length
//             ? locoScroll.scrollTo(value, 0, 0)
//             : locoScroll.scroll.instance.scroll.y;
//         }
//         return null;
//       },
//       scrollLeft(value) {
//         if (locoScroll) {
//           return arguments.length
//             ? locoScroll.scrollTo(value, 0, 0)
//             : locoScroll.scroll.instance.scroll.x;
//         }
//         return null;
//       },
//       // 중요한 부분 : pageContainer 요소의 크기와 위치를 ScrollTrigger에게 알려줌 => ScrollTrigger는 이 정보를 사용하여 스크롤 트리거 및 고정(pinning) 요소를 정확히 배치합니
//       getBoundingClientRect() {
//         return {
//           left: 0,
//           top: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },
//       // pinType: scrollEl.style.transform ? 'transform' : 'fixed',
//     });

//     const galleryEl = document.querySelector('.gallery') as HTMLElement; // HTMLElement로 타입 캐스팅
//     const sections = gsap.utils.toArray('.gallery-item-wrapper');

//     if (!galleryEl) return;
//     gsap.to(sections, {
//       xPercent: -100 * (sections.length - 1),
//       ease: 'none',
//       scrollTrigger: {
//         start: 'top top',
//         trigger: galleryEl,
//         scroller: '#main-container',
//         end: () => `+=${galleryEl.offsetWidth}`,
//         pin: true,
//         scrub: 0.5,
//         snap: 1 / (sections.length - 1),
//       },
//     });
//     const lsUpdate = () => {
//       if (locoScroll) {
//         locoScroll.update();
//       }
//     };

//     gsap.fromTo(
//       containerRef.current,
//       { backgroundColor: 'var(--dark)' },
//       {
//         backgroundColor: 'var(--light)',
//         scrollTrigger: {
//           trigger: '.color-light', // 밝은 색 섹션의 클래스
//           scroller: containerRef.current, // Locomotive Scroll 컨테이너
//           scrub: true,
//           start: 'top center', // 애니메이션 시작 위치
//           end: 'bottom center', // 애니메이션 끝나는 위치
//         },
//       },
//     );

//     ScrollTrigger.addEventListener('refresh', lsUpdate);
//     ScrollTrigger.refresh();
//     ScrollTrigger.clearScrollMemory('auto');
//     return () => {
//       if (locoScroll) {
//         clearTimeout(timer);
//         ScrollTrigger.removeEventListener('refresh', lsUpdate);
//         locoScroll.destroy();
//         locoScroll = null;
//         console.log('Kill', locoScroll);
//       }
//     };
//   }, [start]);
// }
