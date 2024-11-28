/* eslint-disable import/prefer-default-export */
import { styleVariants, style, keyframes } from "@vanilla-extract/css";
import { vars } from "@/styles/common/createThemeContract.css";

export const wrap = style({
  position: "fixed",
  width: "8vw",
  height: 'calc(100% - 70px)',
  top:0,
  padding:10,
  right : 15,
  selectors: {
    ['&:after'] : {
      content: "",
      position: 'absolute',
      top:0,
      display:'block',
      width: 1,
      height: 'calc(100% - 70px)',
      background: `${vars.color.border}`,
    }
  }
});

export const scroll = style({
  width: 20
});

export const rotate = style({
  padding: "0px 0px 0px 40px",
  transform: "rotate(270deg)",
});

const upAndDown = keyframes({
  '0%': { transform: "translate3d(0, -3px, 0)" },
  '48%, 52%': { transform: "translate3d(0, 5px, 0)" },
  "97%, 100%": { transform: "translate3d(0, -3px, 0)" }
});

export const spinAgain = style({
  animation: `${upAndDown} 1.5s infinite`
});