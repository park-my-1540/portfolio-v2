import { createVar, style } from "@vanilla-extract/css";

export const widthVar = createVar();
export const heightVar = createVar();

export const boxStyle = style({
  width: widthVar,
  height: heightVar,
  // 다른 기본 스타일을 추가
});
