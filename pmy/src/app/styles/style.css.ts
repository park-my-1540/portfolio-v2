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

export const borderTopNone = style({
  border: '1px solid',
  borderTop: "none",
});

export const borderBox = style({
  border: "1px solid",
});

export const borderTop = style({
  borderTop: "1px solid",
});

export const paddingBox = style({
  padding: "0.7rem"
})
