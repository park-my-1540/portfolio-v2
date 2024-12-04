import { gsap } from "gsap";
import { vars } from "@/styles/common/createThemeContract.css";

type targetType = string | Element | Element[];

/**
 * aside pagination clip animation
 * @param target aside
 * @returns tl
 */
export function clip(target:targetType) {
  const tl = gsap.timeline();

  tl.set(target, {
    "-webkit-clip-path": "inset(100% 0 0 0)",
    "clip-path": "inset(100% 0 0 0)",
  });

  tl.to(target, {
    "-webkit-clip-path": "inset(0% 0 0 0)",
    "clip-path": "inset(0% 0 0 0)",
    duration: 1,
    ease: "power2.inOut",
  });

  tl.pause();
  tl.play();

  return tl;
}

/**
 * scrollBox border가 aside width 만큼 왼쪽으로 이동하는 애니메이션
 * @param target 
 * @param width 
 * @returns 
 */
export function slideLeftBorder(target: targetType, width: number) {
  const tl = gsap.timeline({ paused: true });

  // 초기 상태 설정
  tl.set(target, {
    display: "block",
    inset: "auto 0px 33px auto",
    opacity: 1,
  });

  // 애니메이션 정의
  tl.to(target, {
    display: "block",
    right: "auto",
    left: width - 11,
    duration: 0.8,
    ease: "power2.inOut",
  });

  tl.to(target, {
    display: "none",
    opacity: 0,
    duration: 0.2,
    ease: "power2.inOut",
    clearProps: "all", // 스타일 제거
  });
  tl.to(target, {
    inset: "auto 0px -999px auto",
  });

  return {
    play: () => tl.play(), // 재생
    reverse: () => tl.reverse() // 역방향 실행
  };
}

/**
 * scrollBox border가 아래에서 위로 올라오는 animation
 * @param target 
 * @param width 
 * @returns 
 */
export function slideTopBorder(target: targetType) {
  const tl = gsap.timeline({ paused: true });

  // 초기 상태 설정
  tl.set(target, {
    display: "block",
    bottom: -999,
    opacity: 1,
  });

  // 애니메이션 정의
  tl.to(target, {
    display: "block",
    bottom: 0,
    duration: 0.8,
    ease: "power2.inOut",
  });

  return tl;
}

/**
 * Aside 컴포넌트가 왼쪽 방향으로 슬라이드하며 나타나는 애니메이션
 * @param target 
 * @returns play reverse
 */
export function slideInAside(target: targetType) {
  const tl = gsap.timeline({ paused: true }); // 처음부터 paused 상태로 생성

  tl.set(target, {
    left: -999,
  });

  tl.to(target, {
    left: 0,
    duration: 0.8,
    ease: "power2.inOut",
  });

  tl.to(target, {
    borderRight: `1px solid ${vars.color.border}`,
    duration: 0.1, // 원하는 지속 시간
    ease: "power2.inOut",
  });

  tl.pause();
  tl.play();
  
  return {
    play: () => tl.play(), // 실행
    reverse: () => tl.reverse(), // 반대로 실행
  };
}

/**
 * Matter Svg 컴포넌트 scale animation
 * @param target 
 * @returns play reverse
 */
export function svgScale(target: targetType, x:number, y: number) {
  const tl = gsap.timeline({ paused: true }); // 처음부터 paused 상태로 생성

  tl.set(target, {
    transform: 'scale(1)',
  });
  
  tl.to(target, {
    left: -x,
    bottom: -y,
    transform: 'scale(0.3,0.3)',
    duration: 0.8,
    ease: "power2.inOut",
  });

  tl.pause();
  tl.play();
  
  return {
    play: () => tl.play(), // 실행
    reverse: () => tl.reverse(), // 반대로 실행
  };
}

/**
 * Matter Svg 컴포넌트 scale animation
 * @param target 
 * @returns play reverse
 */
export function horizontalClip(target: targetType) {
  const tl = gsap.timeline();

  tl.set(target, {
    "-webkit-clip-path": "inset(0 100% 0 0)",
    "clip-path": "inset(0 100% 0 0)",
    "marginLeft": -40
  });

  tl.to(target, {
    "-webkit-clip-path": "inset(0 0% 0 0)",
    "clip-path": "inset(0 0% 0 0)",
    "marginLeft": 0,
    duration: 0.7,
    ease: "cubic-bezier(.25,.25,0,1)",
    delay: 1.5 // 2초 뒤에 애니메이션 시작
  });


  tl.pause();
  tl.play();
  
  return tl;
}
