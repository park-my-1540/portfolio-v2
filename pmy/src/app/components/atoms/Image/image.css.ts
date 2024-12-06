import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";

const base = {
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
    smallmedium: style({
      width: 100,
      height: 100,
    }),
    medium: style({
      minWidth: 200,
      minHeight: 200,
    }),
    large: style({
      width: 300,
      height: 300,
    }),
    card: style({
      width: "100%",
      height: 180,
    }),
  },
  radius: {
    default: style({
      borderRadius: 32
    }),
    circle: style({
      borderRadius: "50%"
    }),
  }
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
