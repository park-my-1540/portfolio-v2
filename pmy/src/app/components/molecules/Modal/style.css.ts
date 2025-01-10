import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';

export const dim = style({
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  background: 'rgb(45 45 45)',
  opacity: 0.7,
  zIndex: 99,
});
