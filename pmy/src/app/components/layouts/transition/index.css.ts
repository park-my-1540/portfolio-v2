import { style } from "@vanilla-extract/css";

export const page = style({
  position: "fixed",
  width: "100vw",
  height: "100vh",
  zIndex: 99,
  top: 0,
  left: 0,
  background: "#000"
})