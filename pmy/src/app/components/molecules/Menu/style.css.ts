import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';
export const wrapper = style({
  display: 'none',
  overflow: 'hidden',
  position: 'absolute',
  top: 'calc(12px + 1.6rem + 2.85rem)',
  right: 0,
  width: '100%',
  zIndex: 9,
});
export const menuItem = style({
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  background: vars.color.primary,
  border: '2px solid',
  visibility: 'hidden',
  transform: 'translate(0%, -110%)',
});
export const menuInner = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
  height: '5rem',
});
