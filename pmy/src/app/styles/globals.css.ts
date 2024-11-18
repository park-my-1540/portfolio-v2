// global.css.ts
import "./layers.css";
import "./reset.css";
import { globalStyle } from "@vanilla-extract/css";
import { globalFontFace } from '@vanilla-extract/css';
import { vars } from "@/styles/common/createThemeContract.css";

import * as layers from "./layers.css";

// Medium 폰트 설정
globalFontFace('MangoLight', {
  fontWeight: 400,
  fontStyle: 'normal',
  src: 'url("/fonts/MangoDdobak-L(ttf).ttf") format("truetype")',
});

// Regular 폰트 설정
globalFontFace('MangoRegular', {
  fontWeight: 700,
  fontStyle: 'normal',
  src: 'url("/fonts/MangoDdobak-R(ttf).ttf") format("truetype")',
});
// Bold 폰트 설정
globalFontFace('MangoBold', {
  fontWeight: 700,
  fontStyle: 'normal',
  src: 'url("/fonts/MangoDdobak-B(ttf).ttf") format("truetype")',
});

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
      fontFamily: 'MangoRegular',
      overflowY : 'hidden'
    },
  },
});
globalStyle("body", {
  "@layer": {
    [layers.reset]: {
      margin: 0,
      backgroundColor: vars.color.bgPrimary,
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

globalStyle("canvas", {
  "@layer": {
    [layers.reset]: {
      borderRadius: "32px"
    },
  },
});

// 비활성화된 버튼 스타일
globalStyle("button:disabled", {
  opacity: 0.5, // 비활성화된 버튼의 오퍼시티
  cursor: "not-allowed", // 비활성화된 상태에서 커서 스타일 변경
});
