import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';

export const header = style({
  position: 'absolute',
  top: 0,
  width: '100%',
  zIndex: 99,
  color: 'inherit',
});

export const inner = style({
  border: '1px solid',
  zIndex: 99,
  backgroundColor: 'white',
});

export const changeCircle = style({
  display: 'inline-block',
  width: 30,
  height: 30,
  border: `1px solid ${vars.color.complementary}`,
  borderRadius: '50%',
});

export const dark = style({
  background: vars.color.complementary,
  marginLeft: -10,
});
