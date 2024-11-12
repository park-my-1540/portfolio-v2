// global.css.ts
import "./layers.css";
import "./reset.css";

import { globalStyle } from "@vanilla-extract/css";
import * as layers from "./layers.css";

globalStyle(
  "#__next",
  {
    "@layer": {
      [layers.reset]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
      },
    },
  }
);

globalStyle("body, html", {
  "@layer": {
    [layers.reset]: {
      height: "100%",
    },
  },
});
globalStyle("body", {
  "@layer": {
    [layers.reset]: {
      margin: 0,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#eee7e0",
      width: "100vw",
      height: "100vh",
    },
  },
});

globalStyle("button", {
  "@layer": {
    [layers.reset]: {
      cursor: "pointer",
      transition: "opacity 0.3s ease", // 오퍼시티 전환 효과
    },
  },
});

// 비활성화된 버튼 스타일
globalStyle("button:disabled", {
  opacity: 0.5, // 비활성화된 버튼의 오퍼시티
  cursor: "not-allowed", // 비활성화된 상태에서 커서 스타일 변경
});
