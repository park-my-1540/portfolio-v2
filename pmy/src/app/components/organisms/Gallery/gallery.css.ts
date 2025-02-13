// gallery.css.ts
import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';

export const galleryWrap = style({
  marginLeft: '-5vw',
  marginRight: '-5vw',
});

export const gallery = style({
  height: '100vh',
  padding: '15vh 0 10vh',
  width: '200%',
  display: 'flex',
  flexWrap: 'nowrap',
});

export const galleryCounter = style({
  position: 'absolute',
  top: '17%',
  left: '5%',
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
  bottom: '15%',
  zIndex: 1,
  transform: 'translateX(-20%)',
  fontFamily: 'MangoBold',
  color: vars.color.complementary02,
});

export const galleryInfoSubtitle = style({
  position: 'relative',
  lineHeight: '6vw',
  color: 'transparent',
  fontFamily: 'MangoBold',
  fontWeight: 400,
  WebkitFontSmoothing: 'antialiased',
  WebkitTextStroke: `2px ${vars.color.complementary02}`,
});

export const galleryContainer = style({
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '13vw 1fr 8vw',
    },
    'screen and (min-width: 768px) and (max-width: 1024px)': {
      gridTemplateColumns: '15vw 1fr 10vw',
    },
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: '20vw 1fr 200px',
    },
  },
});
