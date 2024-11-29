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
    right: "50px",
    left: "auto",
    opacity: 1,
  });

  // 애니메이션 정의
  tl.to(target, {
    right: "auto",
    left: width - 11,
    duration: 0.8,
    ease: "power2.inOut",
  });

  tl.to(target, {
    opacity: 0,
    duration: 0.2,
    ease: "power2.inOut",
    clearProps: "all", // 스타일 제거
  });

  return {
    play: () => tl.play(), // 재생
    reverse: () => tl.reverse() // 역방향 실행
  };
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