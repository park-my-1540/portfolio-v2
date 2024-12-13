import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/common/createThemeContract.css";

export const header = style({
    position: "absolute",
    top: 0,
    width: "calc(100% - 60px)",
    border: "1px solid",
    zIndex: 99,
    margin: "20px 30px 0",
    background: "#FFF"
});
