import { style, keyframes } from '@vanilla-extract/css';

const scrolldownAnimation = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate(0, -8px)',
  },
  '50%': {
    opacity: 1,
    transform: 'translate(0, 0)',
  },
  '100%': {
    opacity: 0,
    transform: 'translate(0, 8px)',
  },
});

export const wrapper = style({
  left: '50%',
  position: 'absolute',
  textAlign: 'center',
  bottom: '0',
  transform: 'translate(-50%, -50%)',
});

export const scrolldown = style({
  border: '2px solid #FFFFFF',
  borderRadius: '30px',
  height: '46px',
  margin: '0 auto 8px',
  textAlign: 'center',
  width: '30px',
});

export const scrolldownP1 = style({
  animationDuration: '1.5s',
  animationName: scrolldownAnimation,
  animationIterationCount: 'infinite',
  fill: '#FFFFFF',
});

export const scrolldownP2 = style([
  scrolldownP1,
  {
    animationDelay: '.75s',
  },
]);
