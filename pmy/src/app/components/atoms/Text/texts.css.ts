import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";

const base = {
  margin: "0",
  lineHeight: '1.3'
};

const variants = {
  sizes: {
    small: style({
      fontSize: "12px",
    }),
    smallmedium: style({
      fontSize: "14px",
    }),
    medium: style({
      fontSize: "16px",
    }),
    mediumlarge: style({
      fontSize: "20px",
    }),
    large: style({
      fontSize: "28px",
    }),
    largeX2: style({
      fontSize: "40px"
    }),
    big: style({
      fontSize: "120px",
      lineHeight: "120px"
    }),
  },
  weights: {
    light: style({
      fontWeight: 300,
      fontFamily: 'MangoLight'
    }),
    normal: style({
      fontWeight: 400,
      fontFamily: 'MangoRegular'
    }),
    bold: style({
      fontWeight: 700,
      fontFamily: 'MangoBold'
    }),
  },
  display: {
    inlineBlock: style({
      display: "inline-block"
    })
  },
  vertical: {
    textTop: style({
      verticalAlign: "text-Top",
    }),
  },
  textAlign: {
    center: style({
      textAlign: "center",
    }),
  },
};

export const text = recipe({
  base: {
    ...base
  },
  variants,
  defaultVariants: {
    sizes: "small",
    weights: "normal",
  },
});

export type TextVariantProps = RecipeVariants<typeof text>;
