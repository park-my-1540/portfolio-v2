/* eslint-disable import/prefer-default-export */
import { styleVariants, style } from "@vanilla-extract/css";
import { vars } from "@/styles/common/createThemeContract.css";

export const aside = style({
  display: "block",
  position: "fixed",
  // left: "-999px",
  width: "20%",
  height: "100%",
  float: "left",
  borderRight: "1px solid rgba(26, 27, 28, .2)",
  zIndex: "999",
  textAlign:"center"
});

export const swiperContainer = style({
  height: "calc(100% - 80px)"
});

export const pagination = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
})