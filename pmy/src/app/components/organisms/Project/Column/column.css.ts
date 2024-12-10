import { style } from "@vanilla-extract/css";

export const arrow = style({
  position: 'relative',
  width: 160,
  height: 150,
  selectors: {
    '&::before': {
      content: "",
      position: 'absolute',
      width: '100%',
      height: '100%',
      border: '40px solid black',
      borderRight: 'none',
      borderBottom: 'none',
      transform: 'rotate(180deg)',
    },
    '&::after': {
      content: "",
      display:'block',
      width: 180,
      height: 42,
      background: 'black',
      transformOrigin: '20% 0%',
      transform: 'rotate(45deg)',
    }
  }
});

export const box = style({
  position: 'relative',
  width: '26rem',
  height: '16rem',
  border: '1px solid red'
});

