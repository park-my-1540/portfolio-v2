import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "@/styles/common/createThemeContract.css";

export const theme = {
  color: {
    white: "#fff",
    black: "#000",
  },
  theme: {
    highlight: vars.color.highlight.senary,
    black: vars.color.subPrimary,
    white: "#fff"
  }
} as const;

const variants = {
  color: {
    primary: { color: vars.color.primary },
    tertiary: { color: vars.color.tertiary },
    accent: { color: vars.color.accent },
    textSecondary: { color: vars.color.textSecondary },
    textInfo: { color: vars.color.textInfo },
    textLighted: { color: vars.color.textLighted },
    muted: { color: vars.color.muted },
    inherit: { color: "inherit"},
  }
};
 
export const textColor = recipe({
  variants,
  defaultVariants: {
    color: "primary"
  }
});

export type TextColorVariantProps = RecipeVariants<typeof textColor>;
