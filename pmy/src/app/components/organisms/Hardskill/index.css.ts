import { style } from '@vanilla-extract/css';
import { responsiveStyle } from '@/styles/common/responsive.css';

export const content = style([
  {
    minWidth: '30%',
    padding: '30px 0 25px',
    margin: '0 20px',
    textAlign: 'center',
    background: '#acc9ff',
    borderRadius: 30,
    transform: 'translate(0%, 100%)',
    opacity: 0,
  },
  responsiveStyle({
    mobile: {
      margin: 0,
      padding: '20px 0',
      borderRadius: 10,
    },
  }),
]);

export const inner = style([
  {
    width: '100%',
    margin: '0 auto',
    padding: '20px 20% 0',
  },
  responsiveStyle({
    tablet: {
      width: '100%',
      padding: '20px 5% 0',
    },
  }),
]);

export const listBox = style({
  display: 'inline-block',
  padding: 5,
  margin: '3px 5px',
  borderRadius: '0.6rem',
  background: '#fff',
});

export const mobileImg = style([
  responsiveStyle({
    mobile: {
      display: 'block',
    },
    desktop: {
      display: 'none',
    },
  }),
]);

export const desktopImg = style([
  responsiveStyle({
    mobile: {
      display: 'none',
    },
    desktop: {
      display: 'block',
    },
  }),
]);

export const rectangle = style([
  {
    width: 200,
    height: 60,
    overflow: 'hidden',
  },
  responsiveStyle({
    mobile: {
      width: 50,
      height: 50,
    },
    tablet: {
      width: 50,
      height: 50,
    },
  }),
]);

export const small = style({
  width: 50,
  height: 50,
  overflow: 'hidden',
});
