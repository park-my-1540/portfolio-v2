import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';

export const wrap = style({
  position: 'absolute',
  bottom: 30,
  left: '50%',
  transform: 'translate(-50%, 0)',
  textTransform: 'uppercase',
});

const upAndDown = keyframes({
  '0%': { transform: 'translate3d(0, -3px, 0)' },
  '48%, 52%': { transform: 'translate3d(0, 5px, 0)' },
  '97%, 100%': { transform: 'translate3d(0, -3px, 0)' },
});

export const spinAgain = style({
  animation: `${upAndDown} 1.5s infinite ease-in`,
});
