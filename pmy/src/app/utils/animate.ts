import { reverse } from 'dns';
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
    gsap.fromTo(
      animationWrapper,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power2.in' },
    );
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
 * set gallery timeline
 * @param tl - timeline
 */
export const triggerMainSections = (tl) => {
  const lineEl = document.querySelector('.line-2') as HTMLElement;
  const sections = document.querySelector('.main') as HTMLElement;

  if (!lineEl || !tl) return;
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
 * set gallery timeline
 * @param tl - timeline
 */
export const triggerHorizontalSections = (tl) => {
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
 * set gallery timeline
 * @param tl - timeline
 */
export const triggerMenu = () => {
  const sections = gsap.utils.toArray('.menu');
  const tl = gsap.to(sections, {
    transform: 'translate(0%, 0%)',
    visibility: 'visible',
    duration: 0.1,
    stagger: 0.05,
  });
};
export const reversetriggerMenu = () => {
  const sections = gsap.utils.toArray('.menu');
  const tl = gsap.to(sections, {
    transform: 'translate(0%, -110%)',
    visibility: 'hidden',
    duration: 0.1,
    stagger: 0.05,
  });
};
