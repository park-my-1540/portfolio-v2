/* eslint-disable import/prefer-default-export */
import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/common/createThemeContract.css";

export const swiperContainer = style({
  height: "100%",
  width: "100%",
  border: "1px solid red",
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
      background: vars.color.highlight.complementary02,
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
      border: `1px solid ${vars.color.highlight.complementary02}`,
    },
  }
})