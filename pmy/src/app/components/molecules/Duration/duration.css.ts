import { styleVariants, style } from "@vanilla-extract/css";
import { vars } from "@/styles/common/createThemeContract.css";

export const wrap = style({
  position: 'relative',
  marginTop: 10,
})
export const box = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: 20,
  selectors: {
    '&::before': {
      content: "",
      display: 'inline-block',
      position: 'absolute',
      top: 12,
      width: '100%',
      height: 1,
      background: vars.color.subPrimary,
    }
  }
})
export const start = style({
  position: 'relative',
  color: vars.color.tertiary,
  fontSize: 14, 
  fontFamily:'MangoLight',
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
      background: vars.color.subPrimary,
    }
  }
})
export const end = style({
  position: 'relative',
  color: vars.color.tertiary,
  fontSize: 14, 
  fontFamily:'MangoLight',
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
      background: vars.color.subPrimary,
    }
  }
})