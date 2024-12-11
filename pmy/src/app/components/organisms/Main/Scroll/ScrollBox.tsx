import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './locomotive-scroll.css';
import useLocoScroll from '@/utils/hook/useLocoScroll';

import Header from '@/components/organisms/Header/Header';
import MainPage from '@/components/pages/MainPage';
import AboutPage from '@/components/pages/AboutPage';
import ProjectsPage from '@/components/pages/ProjectsPage';
gsap.registerPlugin(ScrollTrigger);
const ScrollBox: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // const [preloader, setPreload] = useState(false);
  // useLocoScroll(!preloader, containerRef);

  useEffect(() => {
    if (!containerRef.current) return;
    const locoScroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });

    locoScroll.on('scroll', ScrollTrigger.update);
    /**
     * ScrollTrigger가 Locomotive Scroll와 동기화되록 설정하기 위해 사용하는 scrollerProxy 메서드를 설정
     * 이 설정은 Locomotive Scroll이 스크롤 위치를 "가로채는" 상황에서 ScrollTrigger가 정확히 작동하도록 도움
     */
    ScrollTrigger.scrollerProxy(containerRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: containerRef.current.style.transform ? 'transform' : 'fixed',
    });

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

    // 애니메이션 설정
    gsap.from('.line-1', {
      scrollTrigger: {
        trigger: '.line-1',
        scroller: containerRef.current,
        scrub: true,
        start: 'top bottom',
        end: 'top top',
        onUpdate: (self) => console.log(self.direction),
      },
      scaleX: 0,
      transformOrigin: 'left center',
      ease: 'none',
    });

    gsap.from('.line-2', {
      scrollTrigger: {
        trigger: '.orange',
        scroller: containerRef.current,
        scrub: true,
        pin: true,
        start: 'top top',
        end: '+=100%',
      },
      scaleX: 0,
      transformOrigin: 'left center',
      ease: 'none',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.purple', //애니메이션 시작되는 요소타겟
        scroller: containerRef.current, // locomotive scroll
        scrub: true, // 숫자일때 지연시간 설정 가능
        pin: true, // 스크롤하는동안 고정할지 여부
        start: 'top top',
        end: '+=100%',
      },
    });

    tl.from('.purple p', {
      scale: 0.3,
      rotation: 45,
      autoAlpha: 0,
      ease: 'power2',
    })
      .from(
        '.line-3',
        { scaleX: 0, transformOrigin: 'left center', ease: 'none' },
        0,
      )
      .to('.purple', { backgroundColor: '#28a92b' }, 0);

    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.refresh();

    return () => {
      locoScroll.destroy();
      ScrollTrigger.removeEventListener('refresh', () => locoScroll.update());
    };
  }, []);

  return (
    <>
      <Header />
      <div className="smooth-scroll" id="main-container" ref={containerRef}>
        <MainPage />
        <AboutPage />
        <ProjectsPage />
        <section className="panel gray">DONE!</section>
      </div>
    </>
  );
};

export default ScrollBox;
