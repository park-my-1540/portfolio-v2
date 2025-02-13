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
  borderTop: '2px solid',
  zIndex: 99,
});

export const changeCircle = style({
  display: 'inline-block',
  width: 30,
  height: 30,
  border: `2px solid ${vars.color.complementary}`,
  borderRadius: '50%',
});

export const dark = style({
  background: vars.color.complementary,
  marginLeft: -6,
});

export const menuBtn = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'absolute',
  right: 0,
  height: '100%',
  padding: '0 1.6rem',
  selectors: {
    '&:hover': {
      background: vars.color.complementary,
      color: vars.color.primary,
    },
  },
});

export const sub = style({
  border: '1.5px solid',
  background: vars.color.light,
  color: vars.color.dark,
  selectors: {
    '&::before': {
      content: '',
      display: 'block',
      width: 'calc(100% - 5px)',
      height: '100%',
      position: 'absolute',
      top: 'calc(-100% - 2px)',
      left: 7,
      backgroundColor: vars.color.light,
    },
  },
});
