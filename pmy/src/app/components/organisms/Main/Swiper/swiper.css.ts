/* eslint-disable import/prefer-default-export */
import { styleVariants, style } from "@vanilla-extract/css";
import { vars } from "@/styles/common/createThemeContract.css";

export const swiperContainer = style({
  height: "calc(100% - 80px)"
});

export const bullet = style({
  position: "relative",
  width: "8px",
  height: "8px",
  margin: "5px 0",
  borderRadius: "50%",
  background: vars.color.muted,
  selectors: {
    ["&.swiper-pagination-bullet-active"] : {
      background: "blue",
    },
    ["&.swiper-pagination-bullet-active:before"] : {
      content: "",
      position: "absolute",
      top: -3,
      left: -3,
      display: "block",
      width: 14,
      height: 14,
      borderRadius: "50%",
      border: "1px solid blue",
    },
  }
})