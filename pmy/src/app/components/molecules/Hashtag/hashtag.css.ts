import { styleVariants, style } from "@vanilla-extract/css";
import { vars } from "@/styles/common/createThemeContract.css";

export const hashtag = style({
  height:60,
  lineHeight:"60px",
  borderBottom: `1px solid ${vars.color.primary}`,
  textAlign: 'end'
})