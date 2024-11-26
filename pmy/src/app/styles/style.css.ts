import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/common/createThemeContract.css";

export const container = style({
  width: "100vw",
  height: "100vh",
});

export const header = style({
  height: 52,
  padding: "0 20px",
  lineHeight: "52px",
  fontSize: 24,
});