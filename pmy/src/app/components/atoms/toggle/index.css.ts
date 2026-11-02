import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';
export const switcher = style({ position: 'relative', display: 'inline-block', width: 44, height: 44, flexShrink: 0 });
export const switcherInput = style({
  appearance: 'none', position: 'absolute', inset: 0, margin: 0, width: 44, height: 44,
  border: `1px solid color-mix(in srgb, ${vars.color.text.primary} 18%, transparent)`,
  borderRadius: '50%', background: 'transparent', cursor: 'pointer',
  selectors: { '&:focus-visible': { outline: `2px solid ${vars.color.text.accent}`, outlineOffset: 4 }, '&:hover': { background: vars.color.light } },
});
export const switcherLabel = style({ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', pointerEvents: 'none' });
export const switcherIcon = style({ width: 18, height: 18 });
