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


export const swiperContainer = style({
  height: "calc(100% - 80px)"
});

export const pagination = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
})

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
      top: -2,
      left: -2,
      display: "block",
      width: 12,
      height: 12,
      borderRadius: "50%",
      border: "1px solid blue",
    },
  }
})

export const none = style({
  // display: "none"
});

export const buttonWrap = style([
  {
    width: "100%",
    textAlign: "center",
  }
]);

export const width100 = style({
  width: "100%",
});

export const weatherCont = style({
  width: "100%",
  background: "hsla(0, 0%, 100%, .2)",
  // color: vars.color.accent,
});

export const weatherIcon = style({
  textAlign: "center",
  padding: "0 20px",
  height: 80,
  wordBreak: "keep-all",
  whiteSpace: "pre",
});

// weatherCont 클래스가 부모에 있을 때만 border 추가
export const conditionalBorder = style({
  selectors: {
    [`${weatherCont} &`]: {
      boxShadow: "0 -1px 0 rgba(0, 0, 0, .05), inset 0 1px 0 hsla(0, 0%, 100%, .1)",
    },
  },
});
