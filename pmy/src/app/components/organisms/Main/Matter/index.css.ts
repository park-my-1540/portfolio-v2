import { style } from '@vanilla-extract/css';
import { responsiveStyle } from '@/styles/common/responsive.css';

export const canvas = style({
  position: 'relative',
  top: 0,
  right: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
});

export const title = style([
  {
    display: 'block',
    position: 'absolute',
    bottom: '5%',
    left: '9%',
    width: '82%',
    height: 'auto',
    pointerEvents: 'none',
    zIndex: 2,
    transition: 'opacity 0.3s ease-in',
  },
  responsiveStyle({
    mobile: {
      left: 0,
      width: '100%',
    },
  }),
]);
