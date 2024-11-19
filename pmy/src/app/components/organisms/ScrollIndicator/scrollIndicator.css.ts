/* eslint-disable import/prefer-default-export */
import { styleVariants, style, keyframes } from "@vanilla-extract/css";
import { vars } from "@/styles/common/createThemeContract.css";

export const wrap = style({
  borderLeft: `1px solid ${vars.color.primary}`,
  position: "absolute",
  right : 15,
  width: "6%",
  height: 'calc(100% - 150px)'
});

export const scroll = style({
  width: 18
});

export const rotate = style({
  padding: "20px 0",
  transform: "rotate(270deg)",
});

const upAndDown = keyframes({
  '0%': { transform: "translate3d(0, -2px, 0)" },
  '48%, 52%': { transform: "translate3d(0, 2px, 0)" },
  "97%, 100%": { transform: "translate3d(0, -2px, 0)" }
});

export const spinAgain = style({
  animation: `${upAndDown} 1.5s infinite`
});