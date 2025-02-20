// gallery.css.ts
import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';
import { colors } from '@/styles/tokens/colors.css';
export const galleryWrap = style({
  marginLeft: '-5vw',
  marginRight: '-5vw',
});

export const gallery = style({
  display: 'flex',
  flexWrap: 'nowrap',
  padding: '15vh 0 10vh',
  width: '200%',
  height: '100vh',
});

export const galleryCounter = style({
  zIndex: 1,
  position: 'absolute',
  top: '17%',
  left: '5%',
  color: vars.color.text.light,
  mixBlendMode: 'difference',
  WebkitFontSmoothing: 'antialiased',
});

export const divider = style({
  content: '',
  display: 'inline-block',
  margin: '7px 10px',
  width: '6.25vw',
  height: '1px',
  backgroundColor: vars.color.text.light,
});

export const galleryItemInfo = style({
  zIndex: 1,
  position: 'absolute',
  bottom: '15%',
  transform: 'translateX(-20%)',
  fontFamily: 'MangoBold',
  color: colors.lightblue03,
});

export const galleryInfoSubtitle = style({
  position: 'relative',
  lineHeight: '6vw',
  color: 'transparent',
  fontFamily: 'MangoBold',
  fontWeight: 400,
  WebkitFontSmoothing: 'antialiased',
  WebkitTextStroke: `2px ${colors.lightblue03}`,
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
