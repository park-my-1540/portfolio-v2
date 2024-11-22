import { styleVariants, style } from "@vanilla-extract/css";
import { vars } from "@/styles/common/createThemeContract.css";

export const cardBox = style({
  overflow: 'hidden',
  position: 'relative',
  padding: 20,
  marginTop: 10,
  color: vars.color.primary,
  border: `1px solid ${vars.color.primary}`,
  borderRadius: 32,
})
export const inner = style({
  position: "relative",
  zIndex: 9,
  color: vars.color.primary,
  selectors: {
    [`${cardBox}:hover &`]: {
      color: vars.color.accent
    }
  }
});
export const hoverCircle = style({
  position: "absolute",
  display: "block",
  width: 0,
  height: 0,
  borderRadius: "50%",
  backgroundColor: "#3a5dae",
  transition: "width .35s ease-in-out, height .35s ease-in-out",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  selectors: {
    [`${cardBox}:hover &`]: {
      width:"220%",
      height:"420%",
    }
  }
})