import { gsap } from "gsap";

type targetType = string | Element | Element[];

export function clipGsap(target:targetType) {
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
