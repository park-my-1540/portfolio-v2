import { style } from '@vanilla-extract/css';

export const stage = style({ position: 'relative', width: '100%', height: '100%' });
export const canvas = style({ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' });
export const title = style({
  display: 'block', position: 'absolute', top: '36%', left: '2.295%',
  width: '54%', height: 'auto', maxHeight: '47%',
  pointerEvents: 'none', zIndex: 2,
  '@media': {
    '(max-width: 768px)': { left: '1.15%', width: '98%', top: '26.88%', bottom: 'auto', maxHeight: '20.16%' },
  },
});
