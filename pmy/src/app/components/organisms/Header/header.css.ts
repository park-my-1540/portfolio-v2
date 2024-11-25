/* eslint-disable import/prefer-default-export */
import { styleVariants, style } from "@vanilla-extract/css";
import { vars } from "@/styles/common/createThemeContract.css";

export const header = style({
  border:`1px solid ${vars.color.tertiary}`
});
