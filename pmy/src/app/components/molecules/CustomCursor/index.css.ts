import { style, keyframes } from '@vanilla-extract/css';

// 애니메이션 정의
const fadeIn = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
});

const fadeOut = keyframes({
  '0%': { opacity: '1' },
  '100%': { opacity: '0' },
});

const bgUp = keyframes({
  from: { backgroundColor: 'transparent' },
  to: { backgroundColor: 'black' },
});

const bgDown = keyframes({
  from: { backgroundColor: 'black' },
  to: { backgroundColor: 'transparent' },
});

const scaleUp = keyframes({
  from: { transform: 'scale(1)' },
  to: { transform: 'scale(1.5)' },
});

const scaleDown = keyframes({
  from: { transform: 'scale(1.5)' },
  to: { transform: 'scale(1)' },
});

const translateLeftDot = keyframes({
  from: { transform: 'translate(20px, -50%)' },
  to: { transform: 'translate(0px, -50%)' },
});

const translateRightDot = keyframes({
  from: { transform: 'translate(-20px, -50%)' },
  to: { transform: 'translate(0px, -50%)' },
});

const transitionEffect = '0.3s cubic-bezier(0.25, 1, 0.5, 1)';

export const mainCursor = style({
  width: '24px',
  height: '24px',
  zIndex: 999,
  borderRadius: '50%',
  pointerEvents: 'none',
  overflow: 'hidden',
  transform: 'translate3d(0, 0, 0)',
  position: 'fixed',
  background: 'white',
  mixBlendMode: 'difference',
  transition: [
    `opacity ${transitionEffect}`,
    `background-color ${transitionEffect}`,
    `border-color ${transitionEffect}`,
    `width ${transitionEffect}`,
    `height ${transitionEffect}`,
  ].join(', '),
});

export const animations = {
  fadeIn,
  fadeOut,
  bgUp,
  bgDown,
  scaleUp,
  scaleDown,
  translateLeftDot,
  translateRightDot,
};
