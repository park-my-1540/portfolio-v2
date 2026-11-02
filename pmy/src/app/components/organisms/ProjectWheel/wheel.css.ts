import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';

export const wheel = style({
  position: 'absolute',
  right: '4%',
  top: '17%',
  bottom: 110,
  width: '38%',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 2,
  '@media': { '(max-width: 768px)': { top: '47%', bottom: 110, right: '6%', width: '88%' } },
});
export const heading = style({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: 10,
  letterSpacing: '0.16em',
  color: vars.color.text.tertiary,
  zIndex: 20,
});
export const orbit = style({
  position: 'relative',
  flex: 1,
  minHeight: 0,
  overflow: 'hidden',
  isolation: 'isolate',
  maskImage: 'linear-gradient(transparent, black 5%, black 95%, transparent)',
});
export const guide = style({
  position: 'absolute',
  top: '8%',
  bottom: '8%',
  left: '35%',
  width: '60%',
  border: `1px solid color-mix(in srgb, ${vars.color.text.accent} 16%, transparent)`,
  borderRadius: '50%',
});
export const card = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '94%',
  height: '82%',
  maxHeight: 430,
  display: 'flex',
  flexDirection: 'column',
  willChange: 'transform',
  paddingLeft: 0,
  '@media': { '(max-width: 768px)': { width: '96%', maxHeight: 380, paddingLeft: 0 } },
});
export const projectLink = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minHeight: 0,
  minWidth: 0,
  color: vars.color.text.primary,
  textDecoration: 'none',
  selectors: { '&:focus-visible': { outline: `3px solid ${vars.color.text.accent}`, outlineOffset: 5 } },
});
export const image = style({
  display: 'block',
  width: '100%',
  height: 0,
  minHeight: 0,
  flex: '1 1 auto',
  objectFit: 'cover',
});
export const info = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  maxWidth: '94%',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  gap: 18,
  padding: '16px 20px',
  background: '#5b7c80',
  color: '#ffffff',
  '@media': { '(max-width: 768px)': { left: 0, bottom: 0, padding: '12px 16px', gap: 12 } },
});
export const category = style({ display: 'block', fontSize: 11, color: '#e7e4ef', marginBottom: 7 });
export const title = style({
  fontFamily: 'MangoBold',
  fontSize: 'clamp(25px, 3vw, 42px)',
  lineHeight: 1,
  letterSpacing: '-0.055em',
  margin: 0,
  overflowWrap: 'anywhere',
});
export const arrow = style({ color: '#ffffff', fontSize: 24, flexShrink: 0 });
export const controls = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: 10,
  flexShrink: 0,
});
export const counter = style({ fontFamily: 'monospace', fontSize: 11, color: vars.color.text.tertiary });
export const total = style({ marginLeft: 8, fontFamily: 'monospace', fontSize: 11, color: vars.color.text.tertiary });
export const navigation = style({ display: 'flex', gap: 6 });
export const button = style({
  minWidth: 60,
  minHeight: 44,
  padding: '8px 10px',
  border: 0,
  color: vars.color.text.primary,
  background: 'transparent',
  fontSize: 12,
  cursor: 'pointer',
  selectors: {
    '&:hover': { background: '#5e5b80', color: '#fff' },
    '&:focus-visible': { outline: `2px solid ${vars.color.text.accent}`, outlineOffset: 2 },
  },
});

export const filmCue = style({
  position: 'absolute',
  right: 18,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  gap: 15,
  background: 'transparent',
  border: 0,
  padding: 8,
  color: vars.color.typography,
  cursor: 'pointer',
  transition: 'opacity 200ms ease',
  isolation: 'isolate',
  selectors: { '&:focus-visible': { outline: `2px solid ${vars.color.text.accent}`, outlineOffset: 5 } },
  '@media': { '(prefers-reduced-motion: reduce)': { transition: 'none' } },
});
export const filmCaption = style({
  fontFamily: 'monospace',
  fontSize: 11,
  lineHeight: 1.4,
  textAlign: 'left',
  letterSpacing: '0.02em',
});
export const filmMeta = style({
  display: 'block',
  marginTop: 9,
  fontSize: 9,
  letterSpacing: '0.08em',
  color: vars.color.text.tertiary,
});
export const filmReel = style({
  position: 'relative',
  width: 40,
  height: 72,
  overflow: 'hidden',
  borderTop: '1px solid currentColor',
  borderBottom: '1px solid currentColor',
  selectors: {
    '&::before': {
      content: '\"\"',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: 3,
      zIndex: 2,
      background: 'repeating-linear-gradient(currentColor 0 3px, transparent 3px 9px)',
    },
    '&::after': {
      content: '\"\"',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      width: 3,
      zIndex: 2,
      background: 'repeating-linear-gradient(currentColor 0 3px, transparent 3px 9px)',
    },
  },
});
export const filmStrip = style({
  padding: '0 7px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transition: 'transform 650ms cubic-bezier(.4,0,.2,1)',
  selectors: {
    [`${filmCue}:hover &`]: { transform: 'translateY(-36px)' },
    [`${filmCue}:focus-visible &`]: { transform: 'translateY(-36px)' },
  },
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transition: 'none',
      transform: 'none',
      selectors: {
        [`${filmCue}:hover &`]: { transform: 'none' },
        [`${filmCue}:focus-visible &`]: { transform: 'none' },
      },
    },
  },
});
globalStyle(`${filmStrip} > span`, {
  height: 36,
  flexShrink: 0,
  display: 'grid',
  placeItems: 'center',
  width: '100%',
  fontFamily: 'monospace',
  fontSize: 16,
  borderBottom: `1px solid color-mix(in srgb, ${vars.color.typography} 20%, transparent)`,
});

const breathe = keyframes({
  '0%, 100%': { transform: 'scale(0.72)', opacity: 0.1 },
  '45%': { transform: 'scale(1.12)', opacity: 0.25 },
  '75%': { transform: 'scale(0.72)', opacity: 0.1 },
});
export const filmPulse = style({
  position: 'absolute',
  right: 37,
  top: '50%',
  marginTop: -48,
  width: 96,
  height: 96,
  borderRadius: '50%',
  background: vars.color.signal,
  zIndex: -1,
  pointerEvents: 'none',
  animation: `${breathe} 3.6s ease-in-out infinite`,
  '@media': { '(prefers-reduced-motion: reduce)': { animation: 'none', transform: 'scale(0.72)', opacity: 0.16 } },
});
