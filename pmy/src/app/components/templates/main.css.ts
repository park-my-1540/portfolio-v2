import { style, fontFace } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';

const rule = `color-mix(in srgb, ${vars.color.text.primary} 18%, transparent)`;

export const hero = style({
  position: 'relative', height: '100svh', minHeight: 700,
  isolation: 'isolate', overflow: 'hidden',
  '@media': { '(max-width: 768px)': { minHeight: 740 } },
});
export const stage = style({ position: 'absolute', inset: 0, zIndex: 0 });
export const intro = style({
  position: 'absolute', top: '17%', left: '5%', right: '50%',
  display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start',
  gap: 24, pointerEvents: 'none', zIndex: 3,
  '@media': {
    '(max-width: 768px)': { top: 100, left: '6%', right: '6%', flexDirection: 'column', gap: 12 },
  },
});
export const eyebrow = style({
  display: 'flex', alignItems: 'center', gap: 10,
  fontFamily: 'MangoBold', fontSize: 11, letterSpacing: '0.14em', color: vars.color.text.tertiary,
  selectors: { '&::before': { content: '""', width: 7, height: 7, borderRadius: '50%', background: vars.color.signal } },
});
export const focus = style({
  margin: 0, fontFamily: 'monospace', fontSize: 'clamp(11px, 0.95vw, 13px)',
  lineHeight: 1.9, letterSpacing: '0.035em', color: vars.color.text.tertiary,
  '@media': { '(max-width: 768px)': { fontSize: 10, letterSpacing: 0, lineHeight: 1.9 } },
});
export const footer = style({
  position: 'absolute', left: '5%', right: '5%', bottom: 28,
  paddingTop: 18, borderTop: `1px solid ${rule}`,
  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, zIndex: 3,
  '@media': { '(max-width: 768px)': { left: '6%', right: '6%', bottom: 24, gap: 12, flexWrap: 'wrap' } },
});
export const actions = style({ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' });
export const projectLink = style({
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 30,
  minHeight: 46, padding: '12px 22px', borderRadius: 28,
  background: vars.color.text.accent, color: vars.color.primary,
  fontFamily: 'MangoBold', fontSize: 13, textDecoration: 'none',
  transition: 'transform 180ms ease, opacity 180ms ease',
  selectors: {
    '&:disabled': { opacity: 0.45, cursor: 'default' },
    '&:hover': { transform: 'translateY(-2px)', opacity: 0.9 },
    '&:focus-visible': { outline: `2px solid ${vars.color.text.accent}`, outlineOffset: 4 },
  },
  '@media': { '(prefers-reduced-motion: reduce)': { transition: 'none' } },
});
export const play = style({
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  minHeight: 44, padding: '10px 14px', border: 'none', background: 'transparent',
  fontFamily: 'MangoRegular', fontSize: 12, color: vars.color.text.tertiary,
  selectors: {
    '&:hover': { color: vars.color.text.accent },
    '&:focus-visible': { outline: `2px solid ${vars.color.text.accent}`, outlineOffset: 2, borderRadius: 4 },
  },
  '@media': { '(prefers-reduced-motion: reduce)': { display: 'none' } },
});
export const note = style({
  fontSize: 10, letterSpacing: '0.12em', color: vars.color.text.tertiary,
  '@media': { '(max-width: 768px)': { display: 'none' } },
});
export const accessibleTitle = style({
  position: 'absolute', width: 1, height: 1, padding: 0, margin: -1,
  overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0,
});

export const actionArrow = style({
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  width: 24, height: 24, borderRadius: '50%',
  background: vars.color.signal, color: '#211D2B', fontSize: 14,
});

export const footerLink = style({
  display: 'inline-flex', alignItems: 'center', minHeight: 44, paddingRight: 18,
  color: vars.color.text.tertiary, fontSize: 11, letterSpacing: '0.1em', textDecoration: 'none',
  selectors: { '&:hover': { color: vars.color.text.accent }, '&:focus-visible': { outline: `2px solid ${vars.color.text.accent}`, outlineOffset: 4 } },
});
export const ending = style({
  position: 'absolute', right: '5%', top: '27%', width: '30%', zIndex: 4,
  opacity: 0, visibility: 'hidden', transform: 'translateY(18px)',
  transition: 'opacity 600ms ease, transform 600ms ease, visibility 600ms',
  selectors: { '&[data-visible="true"]': { opacity: 1, visibility: 'visible', transform: 'translateY(0)' } },
  '@media': { '(max-width: 768px)': { top: 'auto', bottom: 120, right: '6%', width: '88%' }, '(prefers-reduced-motion: reduce)': { transition: 'none', transform: 'none' } },
});
export const endingTitle = style({ margin: '24px 0 20px', fontSize: 'clamp(30px, 3.5vw, 52px)', lineHeight: 1.25, letterSpacing: '-0.055em', fontFamily: 'MangoBold', color: vars.color.typography, outline: 'none', '@media': { '(max-width: 768px)': { margin: '16px 0', fontSize: 32 } } });
export const endingCopy = style({ margin: '0 0 28px', fontSize: 15, lineHeight: 1.8, color: vars.color.text.tertiary, '@media': { '(max-width: 768px)': { marginBottom: 18, fontSize: 13 } } });
export const restart = style({ display: 'block', background: 'transparent', border: 0, padding: '16px 0', minHeight: 44, color: vars.color.text.accent, fontSize: 13, cursor: 'pointer', selectors: { '&:focus-visible': { outline: `2px solid ${vars.color.text.accent}`, outlineOffset: 4 } } });

export const focusLabel = style({ display: 'block', marginBottom: 8, fontSize: 10, letterSpacing: '0.16em', opacity: 0.75 });

const blackHan = fontFace({ src: 'url("/fonts/black-han-sans/BlackHanSans-Regular.ttf") format("truetype")', fontWeight: 400, fontStyle: 'normal', fontDisplay: 'swap' });
export const ticket = style({
  position: 'relative', padding: '28px 26px 18px', transform: 'rotate(-3deg)',
  background: '#5E5B80', color: '#FFFFFF',
  '@media': { '(max-width: 768px)': { padding: '22px 24px 14px' } },
});
export const ticketMeta = style({ display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: 10, letterSpacing: '0.03em' });
export const ticketTitle = style({
  fontFamily: `${blackHan}, sans-serif`, fontWeight: 400, fontSize: 'clamp(32px, 3.4vw, 52px)', color: '#FFFFFF',
  lineHeight: 1.2, letterSpacing: '-0.045em', margin: '30px 0 28px', outline: 'none', wordBreak: 'keep-all',
  '@media': { '(max-width: 768px)': { fontSize: 'clamp(29px, 8.3vw, 38px)', margin: '20px 0' } },
});
export const ticketDivider = style({ position: 'relative', margin: '0 -26px', borderTop: '1px dashed currentColor',
  selectors: {
    '&::before': { content: '\"\"', position: 'absolute', width: 18, height: 18, borderRadius: '50%', background: vars.color.primary, left: -9, top: -9 },
    '&::after': { content: '\"\"', position: 'absolute', width: 18, height: 18, borderRadius: '50%', background: vars.color.primary, right: -9, top: -9 },
  },
  '@media': { '(max-width: 768px)': { margin: '0 -24px' } },
});
export const ticketLink = style({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: 54, padding: '14px 0 4px', fontSize: 13, color: 'inherit', textDecoration: 'none', selectors: { '&:focus-visible': { outline: '2px solid currentColor', outlineOffset: 4 } } });
export const ticketReplay = style({ display: 'block', minHeight: 44, padding: '10px 0', border: 0, background: 'transparent', color: 'inherit', fontSize: 11, cursor: 'pointer', selectors: { '&:focus-visible': { outline: '2px solid currentColor', outlineOffset: 4 } } });
