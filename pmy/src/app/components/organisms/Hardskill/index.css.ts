import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';
import { colors } from '@/styles/tokens/colors.css';

export const content = style({
  minWidth: '30%',
  padding: '30px 0 25px',
  margin: '0 20px',
  textAlign: 'center',
  background: '#acc9ff',
  borderRadius: 30,
  transform: 'translate(0%, 100%)',
  opacity: 0,
  '@media': {
    'screen and (max-width: 768px)': {
      margin: 0,
      padding: '20px 0',
      borderRadius: 10,
    },
  },
});
export const inner = style({
  width: '100%',
  margin: '0 auto',
  padding: '20px 20% 0',
  '@media': {
    'screen and (max-width:1440px)': {
      width: '100%',
      padding: '20px 5% 0',
    },
  },
});
export const listBox = style({
  display: 'inline-block',
  padding: 5,
  margin: '3px 5px',
  borderRadius: '0.6rem',
  background: '#fff',
});

export const mobileImg = style({
  '@media': {
    'screen and (max-width: 1024px)': { display: 'block' },
    'screen and (min-width: 1024px)': {
      display: 'none',
    },
  },
});
export const desktopImg = style({
  '@media': {
    'screen and (max-width: 1024px)': { display: 'none' },
    'screen and (min-width: 1024px)': {
      display: 'block',
    },
  },
});
export const rectangle = style({
  width: 200,
  height: 60,
  overflow: 'hidden',
  '@media': {
    'screen and (max-width: 768px)': { width: 50, height: 50 },
    'screen and (min-width: 768px) and (max-width: 1024px)': {
      width: 50,
      height: 50,
    },
  },
});
export const small = style({
  width: 50,
  height: 50,
  overflow: 'hidden',
});
