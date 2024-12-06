/* eslint-disable import/prefer-default-export */
import { styleVariants, style, keyframes } from "@vanilla-extract/css";
import { vars } from "@/styles/common/createThemeContract.css";

export const arrowStyle = style({
  position: "absolute",
  right: 5,
  border: `1px solid ${vars.color.primary}`,
  borderRadius: "50%",
  width: 30,
  height: 30,
  textAlign: "center",
  lineHeight: "30px",
})