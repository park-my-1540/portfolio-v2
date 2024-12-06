import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/common/createThemeContract.css";

export const header = style({
  position: "absolute",
  width: "100%",
  border:`15px solid ${vars.color.highlight.primary}`,
  borderBottom: "none",
  padding: "0 30px",
});
