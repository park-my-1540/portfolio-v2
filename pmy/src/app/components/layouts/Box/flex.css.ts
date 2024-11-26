import { styleVariants, style } from "@vanilla-extract/css";

export const flex = style({
  display: "flex",
});

export const flexDirection = styleVariants({
  row: { flexDirection: "row" },
  column: { flexDirection: "column" },
});

export const alignItems = styleVariants({
  stretch: { alignItems: "stretch" },
  start: { alignItems: "flex-start" },
  center: { alignItems: "center" },
  end: { alignItems: "flex-end" },
});

export const justifyContent = styleVariants({
  start: { justifyContent: "flex-start" },
  center: { justifyContent: "center" },
  end: { justifyContent: "flex-end" },
  between: { justifyContent: "space-between" },
  around: { justifyContent: "space-around" },
});

export const gap = styleVariants({
  none: { gap: "0px" },
  small: { gap: "8px" },
  medium: { gap: "16px" },
  mediumX2: { gap: "40px" },
  large: { gap: "50px" },
});
