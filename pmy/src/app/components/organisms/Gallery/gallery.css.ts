// gallery.css.ts
import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';

export const galleryWrap = style({
  backgroundColor: '#d53f41',
  marginLeft: '-5vw',
  marginRight: '-5vw',
});

export const gallery = style({
  marginRight: '-100vw',
  height: '100vh',
  padding: '15vh 0 10vh',
  width: '400%',
  display: 'flex',
  flexWrap: 'nowrap',
});

export const galleryCounter = style({
  position: 'absolute',
  top: '17%',
  left: '2%',
  zIndex: 1,
  mixBlendMode: 'difference',
  color: vars.color.text.light,
  WebkitFontSmoothing: 'antialiased',
});

export const divider = style({
  content: '',
  backgroundColor: vars.color.text.light,
  width: '6.25vw',
  margin: '7px 10px',
  height: '1px',
  display: 'inline-block',
});

export const galleryItemInfo = style({
  position: 'absolute',
  bottom: '10%',
  zIndex: 1,
  transform: 'translateX(-20%)',
  color: vars.color.primary,
});

export const galleryInfoSubtitle = style({
  position: 'relative',
  lineHeight: '6vw',
  color: 'transparent',
  fontWeight: 400,
  WebkitFontSmoothing: 'antialiased',
  WebkitTextStroke: `2px ${vars.color.text.light}`,
});
