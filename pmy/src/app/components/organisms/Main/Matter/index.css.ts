import { style } from '@vanilla-extract/css';

export const canvas = style({
  position: 'relative',
  top: 0,
  right: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
});

export const title = style({
  display: 'block',
  position: 'absolute',
  top: '60%',
  left: '50%',
  marginLeft: '-50%',
  width: '100%',
  height: 'auto',
  pointerEvents: 'none',
  transform: 'translate3d(0, -50%, 0)',
  zIndex: 2,
  transition: 'opacity 0.3s ease-in',
});
