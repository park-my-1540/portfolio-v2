import { styleVariants, style } from "@vanilla-extract/css";
import { vars } from "@/styles/common/createThemeContract.css";

export const cardBox = style({
  padding: 20,
  border: `1px solid ${vars.color.primary}`,
  borderRadius: 32,
})