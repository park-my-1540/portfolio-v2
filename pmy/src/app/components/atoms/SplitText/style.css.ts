import { style } from '@vanilla-extract/css';
import {vars } from '@/styles/common/createThemeContract.css';

export const link = style({
  overflow: 'hidden',
  display: 'flex',
  position: 'relative',
  minWidth: 80,
  color: vars.color.complementary,
  fontStyle: 'italic',
});

export const txt = style({
  position: 'absolute',
  left: 0,
  top: 0,
  transition: 'transform 0.5s cubic-bezier(0.5, 0, 0, 1), opacity 0.5s cubic-bezier(0.5, 0, 0, 1)',
  selectors: {
    '&:nth-child(1)': {
      transform: 'translateY(0)',
      opacity: 1,
      fontFamily: "Playfair Display",
      fontWeight: 500,
    },
    '&:nth-child(2)': {
      transform: 'translateY(-100%)',
      opacity: 0,
      fontFamily: "Roboto",
      fontWeight: 500,
    },
  }
})
