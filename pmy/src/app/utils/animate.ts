import React from 'react';
import gsap from 'gsap';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

type RefType = React.RefObject<HTMLDivElement>;

export const pageIn = (transitionRef: RefType) => {
  const transitionElement = transitionRef.current;
  if (transitionElement) {
    const tl = gsap.timeline();

    tl.set(transitionElement, {
      xPercent: 0,
    })
      .to(transitionElement, {
        xPercent: 100,
        duration: 0.8,
      })
      .to(
        transitionElement,
        {
          borderTopLeftRadius: '50vh',
          borderBottomLeftRadius: '50vh',
          duration: 0.4,
        },
        '<',
      );
  }
};

export const pageOut = (href: string, router: AppRouterInstance) => {
  const animationWrapper = document.getElementById('transition-element');
  if (animationWrapper) {
    const tl = gsap.timeline();

    tl.set(animationWrapper, {
      xPercent: -100,
      borderTopRightRadius: '50vh',
      borderBottomRightRadius: '50vh',
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
    })
      .to(animationWrapper, {
        xPercent: 0,
        duration: 0.8,
        onComplete: () => {
          router.push(href);
        },
      })
      .to(
        animationWrapper,
        {
          borderTopRightRadius: '0',
          borderBottomRightRadius: '0',
          duration: 0.4,
        },
        '<',
      );
  }
};

export const pageFadeIn = (pageRef: RefType) => {
  const animationWrapper = pageRef.current;
  if (animationWrapper) {
    gsap.fromTo(animationWrapper, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.in' });
  }
};

export const scaleOnScroll = (lineRef: RefType, triggerRef: RefType) => {
  const animationWrapper = lineRef.current;
  if (animationWrapper) {
    gsap.from(animationWrapper, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: '#main-container',
        scrub: true,
        pin: true,
        start: 'top top',
        end: '+=100%',
      },
      scaleX: 0,
      transformOrigin: 'left center',
      ease: 'none',
    });
  }
};

/**
 * set main timeline
 * @param tl - timeline
 */
export const triggerMainSections = (tl) => {
  const lineEl = document.querySelector('.line') as HTMLElement;
  const sections = document.querySelector('.main') as HTMLElement;

  if (!lineEl || !tl) return null;
  tl = gsap.timeline({
    scrollTrigger: {
      trigger: sections,
      scroller: '#main-container', // Locomotive Scroll을 사용하는 경우 설정
      scrub: true,
      pin: true,
      start: 'top top', // 트리거 시작 지점
      end: '+=200%', // 트리거 종료 지점
    },
  });

  tl.from(lineEl, {
    scaleX: 0,
    transformOrigin: 'left center',
    ease: 'none',
  }).to(lineEl, {
    xPercent: -100,
    ease: 'none',
  });
  return tl;
};

/**
 * set contact timeline
 * @param tl - timeline
 */
export const triggerContactSections = (tl) => {
  const el = document.querySelector('.target') as HTMLElement;
  const sections = document.querySelector('#forScrollGsap') as HTMLElement;

  tl = gsap.timeline({
    scrollTrigger: {
      trigger: sections,
      scroller: '#main-container', // Locomotive Scroll을 사용하는 경우 설정
      scrub: true,
      start: 'top top', // 트리거 시작 지점
      end: '+=200%', // 트리거 종료 지점
    },
  });

  tl.to(el, {
    scaleX: 0.5,
    screenY: 0.5,
    ease: 'none',
  });
  return tl;
};

/**
 * set gallery timeline
 * @param tl - timeline
 */
export const triggerHorizontalSections = (tl) => {
  const galleryEl = document.querySelector('.gallery') as HTMLElement;
  const sections = gsap.utils.toArray('.gallery-item-wrapper');

  if (!galleryEl || !tl) return null;

  // matchMedia를 사용하여 화면 크기에 따라 다르게 적용
  const mm = gsap.matchMedia();
  mm.add(
    {
      isDesktop: '(min-width: 1025px)',
      isMobile: '(max-width: 1024px)',
    },
    (context: any) => {
      const { isDesktop, isMobile } = context.conditions;

      if (isDesktop) {
        tl = gsap.timeline({
          scrollTrigger: {
            start: 'top top',
            trigger: galleryEl,
            scroller: '#main-container',
            end: () => `+=${galleryEl.offsetWidth}`,
            pin: true,
            scrub: 0.5,
            snap: {
              snapTo: (progress) => {
                const sectionCount = sections.length;
                const step = 1 / (sectionCount - 1);
                const targetIndex = Math.round(progress / step);
                const offset = step * (1 / 3);
                return targetIndex * step - offset;
              },
              duration: 0.3,
              ease: 'power1.inOut',
            },
          },
        });

        tl.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: 'ease-in-out',
        });
      } else if (isMobile) {
        tl = gsap.timeline({
          scrollTrigger: {
            start: 'top top',
            trigger: galleryEl,
            scroller: '#main-container',
            end: 'bottom top',
            pin: false, // 세로 스크롤에서는 고정 X
            scrub: 0.5,
          },
        });
      }
    },
  );

  return tl;
};

/**
 * word에 대해 개별적인 애니메이션 설정.
 * 스크롤에 따라 색상이 변경되고 지나오면 다시 투명해지도록
 * @param tl - timeline
 */
export const triggerHighlightsText = (tl) => {
  const desc = document.querySelector('.desc') as HTMLElement;
  const spans = gsap.utils.toArray('.word', desc);

  spans.forEach((span, index) => {
    // 개별적인 타임라인 생성.
    if (span instanceof HTMLElement) {
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: span, // span에 트리거
          scroller: '#main-container',
          start: 'top 100%', // span이 뷰포트에 진입하면 시작
          end: 'bottom 20%', // span이 뷰포트를 벗어나면 종료
          scrub: true, // 스크롤 애니메이션을 부드럽게 처리
        },
      });

      // span이 뷰포트에 들어오면 색상이 변경되었다가 점점 투명해지는 애니메이션
      tl.to(span, {
        color: '#C4D9FF', // 활성화 색상
        duration: 0.5,
        delay: index * 0.1, // 단어별 순차적 딜레이
      }).to(span, {
        color: '#C4D9FF50', // 비활성화 색상 (반투명)
        duration: 0.5,
        delay: 0.5, // 활성화 후 잠시 대기
      });
    }
  });

  return tl;
};

/**
 * @param tl - timeline
 */
export const triggerSkill = (tl) => {
  const about = document.querySelector('#about') as HTMLElement;
  const skill = document.querySelector('#skill') as HTMLElement;
  const box = gsap.utils.toArray('._skillBox', skill);
  box.forEach((span, index) => {
    // 개별적인 타임라인 생성.
    tl = gsap.timeline({
      scrollTrigger: {
        trigger: about,
        scroller: '#main-container',
        start: 'bottom 90%', // bottom이 뷰포트 90에 도달하면 시작
        end: 'bottom 10%', // bottom이 뷰포트 10까지 스크롤 될떄까지 진행
        scrub: true,
      },
    });

    tl.to(span, {
      transform: 'translate(0%,0%)',
      duration: 0.5,
      opacity: 1,
      delay: index * 0.1, // 단어별 순차적 딜레이
    });
  });

  return tl;
};

/**
 * menu open/close timeline
 * @param tl - timeline
 */
export const openMenu = () => {
  const el = gsap.utils.toArray('.menu');
  const wrap = document.querySelector('.menuWrap') as HTMLElement;

  wrap.style.display = 'flex';
  gsap.to(el, {
    transform: 'translate(0%, 0%)',
    visibility: 'visible',
    duration: 0.3,
    stagger: 0.02,
  });
};
export const closeMenu = () => {
  const wrap = document.querySelector('.menuWrap') as HTMLElement;
  const el = gsap.utils.toArray('.menu');
  const y = wrap.clientHeight;

  gsap.to(el, {
    transform: `translate(0%, -${y}px)`,
    duration: 0.3,
    stagger: 0.02,
  });
  gsap.to(wrap, {
    display: 'none',
    duration: 0.3,
    stagger: 0.02,
  });
};

/**
 * menu open/close timeline
 * @param tl - timeline
 */
export const openToggle = (ref) => {
  gsap.to(ref.current, {
    transform: 'translate(0%, 0%)',
    visibility: 'visible',
    duration: 0.3,
    stagger: 0.02,
  });
};
export const closeToggle = (ref) => {
  gsap.to(ref.current, {
    transform: 'translate(-102%, 0%)',
    duration: 0.3,
    stagger: 0.02,
  });
};
