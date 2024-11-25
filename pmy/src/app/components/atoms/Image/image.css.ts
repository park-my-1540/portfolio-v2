import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";

const base = {
  border: "1px solid red",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const variants = {
  sizes: {
    small: style({
      width: 50,
      height: 50,
    }),
    medium: style({
      minWidth: 200,
      minHeight: 200,
    }),
    large: style({
      width: 300,
      height: 300,
    }),
  },
};

export const image = recipe({
  base: {
    ...base
  },
  variants,
  defaultVariants: {
    sizes: "small",
  },
});

export type ImageVariantProps = RecipeVariants<typeof image>;
