import { styleVariants, style } from "@vanilla-extract/css";
import { vars } from "@/styles/common/createThemeContract.css";

export const boxWrap = style({
    position: "fixed",
    bottom: 0,
    left: 0,
    transform: 'translate(0,0) scale(1)',
    width: "60%",
    height: "100%"
})