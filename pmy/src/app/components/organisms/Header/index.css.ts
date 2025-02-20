import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';
import { colors } from '@/styles/tokens/colors.css';
import { rootVars } from '@/styles/common/createResponsiveTheme.css';

export const header = style({
  position: 'absolute',
  top: 0,
  width: '100%',
  zIndex: 99,
  color: 'inherit',
  transition: 'background-color 0.3s ease-in-out',
});

export const inner = style({
  position: 'relative',
  borderTop: '2px solid',
  zIndex: 99,
  height: rootVars.headerHeight,
});

export const menuBtn = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  padding: '0 1.6rem',
  selectors: {
    '&:hover': {
      background: colors.lightblue,
      color: vars.color.primary,
    },
  },
});

export const sub = style({
  border: '1.5px solid',
  background: vars.color.light,
  color: vars.color.dark,
});
