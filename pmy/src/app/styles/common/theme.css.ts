import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "@/styles/common/createThemeContract.css";

export const theme = {
  widthSize: {
    default: "100%",
    medium: "60%"
  },
  fontSize: {
    small: "0.9",
    medium: "1.2"
  },
  color: {
    white: "#fff",
    black: "#000",
  },
  theme: {
    lime: "linear-gradient(135deg, #bcec68 -20%, #0eb9a4 120%)",
    green: "linear-gradient(135deg, #5de2ff -20%, #08bb8a 120%)",
    blue: "linear-gradient(135deg, #80ecf7 -20%, #706aff 120%)",
    purple: "linear-gradient(135deg, #f572c1 -20%, #6a37ab 120%)"
  }
} as const;

const variants = {
  color: {
    primary: { color: vars.color.primary },
    tertiary: { color: vars.color.tertiary },
    accent: { color: vars.color.accent },
    textSecondary: { color: vars.color.textSecondary },
    textInfo: { color: vars.color.textInfo },
  }
};

export const textColor = recipe({
  variants,
  defaultVariants: {
    color: "primary"
  }
});

export type TextColorVariantProps = RecipeVariants<typeof textColor>;
