/* eslint-disable import/prefer-default-export */
import { styleVariants, style } from "@vanilla-extract/css";
import { vars } from "@/styles/common/createThemeContract.css";

export const aside = style({
  display: "block",
  position: "fixed",
  left: "-999px",
  width: "20%",
  height: "100%",
  paddingTop: 40,
  zIndex: "999",
  textAlign:"center"
});

export const pagination = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "100px 0",
})

export const list = style({
  position: "absolute",
  top: 80,
  right:20,
})