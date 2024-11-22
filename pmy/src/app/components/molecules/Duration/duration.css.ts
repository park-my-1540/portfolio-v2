import { style } from "@vanilla-extract/css";

export const wrap = style({
  position: 'relative',
  paddingTop: 13,
})
export const box = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  color:"inherit",
  fontSize: 14, 
  fontFamily:'MangoLight',
})

export const fromCircle = style({
  selectors: {
    '&::before': {
      content: "",
      display: 'inline-block',
      position: 'absolute',
      top: -11,
      left: 0,
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: "inherit",
    },
    '&::after': {
      content: "",
      display: 'inline-block',
      position: 'absolute',
      top: -8,
      left: 0,
      width: "100%",
      height: 1,
      background: "inherit",
    }
  }
})
export const toCircle = style({
  selectors: {
    '&::before': {
      content: "",
      display: 'inline-block',
      position: 'absolute',
      top: -11,
      right: 0,
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: "inherit",
    }
  }
})