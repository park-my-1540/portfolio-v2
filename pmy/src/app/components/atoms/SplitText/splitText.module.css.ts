import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";

const variants = {
  sizes: {
    small: style({
      fontSize: "0.75rem",
      height: "0.8rem",
    }),
    smallmedium: style({
      fontSize: "0.875rem",
      height: "1.375rem",
    }),
    medium: style({ 
      fontSize: "1rem",
      height: "1.5rem",
    }),
    mediumlarge: style({
      fontSize: "1.3rem",
      lineHeight: "1.3rem",
      height: "1.8rem",
    }),
    mediumlargeX2: style({
      fontSize: "1.5625rem",
      height: "2.1625rem",
    }),
    large: style({
      fontSize: "1.75rem",
      height: "2.25rem",
    }),
    largeX2: style({
      fontSize: "3rem",
      height: "3.5rem",
    }),
    big: style({
      fontSize: "4.375rem",
      lineHeight: "4.375rem",
      height: "4.875rem",
    }),
  },
};

export const text = recipe({
  variants,
  defaultVariants: {
    sizes: "small",
  },
});

export type TextVariantProps = RecipeVariants<typeof text>;
