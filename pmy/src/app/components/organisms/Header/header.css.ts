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
  position: 'relative',
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

export const menuBtn = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'absolute',
  right: 0,
  height: '100%',
  padding: '0 1.6rem',
  borderLeft: `1px solid ${vars.color.complementary}`,
  selectors: {
    '&:hover': {
      background: vars.color.complementary,
      color: vars.color.primary,
    },
  },
});
