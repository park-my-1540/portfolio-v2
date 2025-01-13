import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';
export const wrapper = style({
  position: 'absolute',
  top: 'calc(12px + 1.6rem + 2.85rem)',
  right: 0,
  width: '100%',
  zIndex: 9,
});
export const menuItem = style({
  width: '25%',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  background: 'white',
  border: '1px solid',
});
export const menuInner = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
  height: '5rem',
});
