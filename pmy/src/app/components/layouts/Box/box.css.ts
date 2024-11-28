import { styleVariants, createVar, style } from "@vanilla-extract/css";

export const widthVar = createVar();
export const heightVar = createVar();

export const boxStyle = style({
  position: "relative",
  vars: {
    [widthVar]: 'auto',
    [heightVar]: 'auto'
  },
  width: widthVar,
  height: heightVar,
  // 다른 기본 스타일을 추가
});

export const flexDirection = styleVariants({
  tab: { flexDirection: "row" },
  column: { flexDirection: "column" },
});