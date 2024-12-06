import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "@/styles/common/createThemeContract.css";

export const theme = {
  color: {
    white: vars.color.accent,
    black: vars.color.subPrimary,
  },
  theme: {
    accent: vars.color.highlight.accent,
    complementary: vars.color.highlight.complementary,
    black: vars.color.subPrimary,
    white: vars.color.accent,
  }
} as const;

const variants = {
  color: {
    primary: { color: vars.color.tertiary }, // 메인 text color
    tertiary: { color: vars.color.tertiary }, // 옅은
    accent: { color: vars.color.accent },
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
