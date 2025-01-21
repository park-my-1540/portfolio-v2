import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';

// border - style
export const borderTopNone = style({
  border: '1px solid',
  borderTop: 'none',
});

export const borderBox = style({
  border: '1px solid',
});

export const borderTop = style({
  borderTop: '1px solid',
});

// layout
export const pageContainer = style({
  paddingTop: 'calc( (var(--padding-container)*4) + var(--textHeight))',
});

export const pageInner = style({
  height: 'calc(100vh - ((var(--padding-container)*5) + var(--textHeight)))',
});

export const paddingBox = style({
  padding: 'var(--padding-container)',
});

export const scrollbar = style({
  selectors: {
    '&::-webkit-scrollbar': {
      width: '5px',
      backgroundColor: vars.color.bg.primary,
    },
    '&::-webkit-scrollbar-track': {
      WebkitBoxShadow: `inset 0 0 6px ${vars.color.primary}`,
      backgroundColor: vars.color.bg.primary,
      borderLeft: `1px solid ${vars.color.bg.primary}`,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: vars.color.bg.complementary,
    },
  },
});

export const project = style({
  height: '100vh',
  overflowY: 'scroll',
  backgroundColor: vars.color.light,
  selectors: {
    '&::before': {
      content: '',
      display: 'block',
      width: 'calc(100% - 5px)',
      height: 40,
      background: vars.color.light,
      position: 'absolute',
      top: 0,
    },
  },
});

// dim
export const dim = style({
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  background: 'rgb(13 13 13)',
  opacity: 0.7,
  zIndex: 99,
});
