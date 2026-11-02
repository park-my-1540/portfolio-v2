import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';
import { respVars } from '@/styles/common/createResponsiveTheme.css';

export const header = style({
  position: 'absolute',
  top: 0, padding: '26px 5% 0',
  '@media': { '(max-width: 768px)': { padding: '26px 6% 0' } },
  width: '100%',
  zIndex: 99,
  color: 'inherit',
  transition: 'background-color 0.3s ease-in-out',
});

export const inner = style({
  position: 'relative',
  borderTop: `1px solid color-mix(in srgb, ${vars.color.text.primary} 18%, transparent)`,
  zIndex: 99,
  height: respVars.header.height,
});

export const menuBtn = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  padding: '1.6rem',
  letterSpacing: '1px',
  whiteSpace: 'nowrap',
  flexShrink: 0,
  fontFamily: 'MangoBold',
  fontSize: 16,
  selectors: {
    '&:focus-visible': { outline: `2px solid ${vars.color.text.accent}`, outlineOffset: 2 },
    '&:hover': { background: vars.color.text.accent, color: vars.color.primary },
  },
  '@media': { '(max-width: 768px)': { padding: '0 6px', minHeight: 44, fontSize: 12 } },

});

export const sub = style({
  border: '1.5px solid',
  background: vars.color.light,
  color: vars.color.dark,
});

export const headerContent = style({
  paddingLeft: 0,
  '@media': { '(max-width: 768px)': { paddingLeft: 0, gap: 12 } },
});
