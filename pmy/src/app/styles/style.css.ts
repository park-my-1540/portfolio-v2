import { style } from "@vanilla-extract/css";
// import { sprinkles } from "./common/sprinkles.css";

export const test = style({
  background: "red"
});

export const container = style({
  width: "100vw",
  height: "100vh",
});

export const header = style({
  height: 52,
  padding: "0 20px",
  lineHeight: "52px",
  fontSize: 24,
  // background: vars.color.bgSecondary,
});

export const swiperContainer = style({
  height: "calc(100% - 80px)"
});

// export const container = style([
//   sprinkles({ paddingX: "large" }),
//   {
//     position: "relative",
//     width: "100%",
//     height: "calc(100% - 52px)",
//     margin: "0 auto",
//     paddingTop: 20
//   }
// ]);

// export const itemBox = style([
//   sprinkles({ paddingX: "medium", paddingY: "medium" }),
//   {
//     position: "relative",
//     width: "100%",
//     marginTop: 10,
//     // background: vars.color.bgSecondary,
//     borderRadius: 20
//   }
// ]);

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
