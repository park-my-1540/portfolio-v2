import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
type RefType = React.RefObject<HTMLDivElement>;

export const pageIn = (transitionRef:RefType) => {
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
          borderTopLeftRadius: "50vh",
          borderBottomLeftRadius: "50vh",
          duration: 0.4,
        },
        "<"
      );
  }
};

export const pageOut = (href: string, router: AppRouterInstance) => {
  const animationWrapper = document.getElementById("transition-element");
  if (animationWrapper) {
    const tl = gsap.timeline();

    tl.set(animationWrapper, {
      xPercent: -100,
      borderTopRightRadius: "50vh",
      borderBottomRightRadius: "50vh",
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
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
          borderTopRightRadius: "0",
          borderBottomRightRadius: "0",
          duration: 0.4,
        },
        "<"
      );
  }
};

export const pageFadeIn = (pageRef:RefType) => {
  const animationWrapper = pageRef.current;
  if (animationWrapper) {
    gsap.fromTo(
      animationWrapper,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.in" }
    );
  }
};

export const scaleOnScroll = (lineRef:RefType, triggerRef:RefType) => {
  const animationWrapper = lineRef.current;
  if (animationWrapper) {
    gsap.from(animationWrapper, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: '#main-container',
        scrub: true,
        pin: true,
        start: 'top top',
        end: '+=10%',
      },
      scaleX: 0,
      transformOrigin: 'left center',
      ease: 'none',
    });
  }
};

export const triggerHorizontalSections = (sections: HTMLElement[], triggerRef:RefType, calcVal: string) => {

  if(sections){
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: '#main-container',
        pin: true,
        scrub: true,
        start: 'top top',
        end: () => calcVal
      },
    });
  }
};