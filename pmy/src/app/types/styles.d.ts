import { ValueOfUnion } from "@/utils/utils";
import { sprinkles, Sprinkles } from "@/styles/common/sprinkles.css"; // sprinkles import


export type Theme = typeof theme;
export type WidthSize = keyof Theme["widthSize"]; // default, medium
export type FontSize = keyof Theme["fontSize"];
export type ThemeColor = keyof Theme["theme"];
export type Color = keyof Theme["color"];
export type ThemeMode = "light" | "dark";
export type HighlightColor = ThemeColor;

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

export type OptionType = {
    unit : boolean,
    sun : boolean,
    atmo : boolean,
    wind : boolean,
    dark : boolean,
    mode : ThemeMode,
    highlightColor : HighlightColor
};

const responsiveValue = ["desktop", "tablet", "mobile"] as const;
export type responsiveType = ValueOfUnion<typeof responsiveValue>

const displayValue = ["flex", "inline", "inline-block", "block"] as const;
export type displayType = ValueOfUnion<typeof displayValue>

export type NumberOrString = number | string | undefined;

export type BoxProps = {
  backgroundColor?: string;
  width?: NumberOrString;
  height?: NumberOrString;
  display?: displayType;
  margin?: NumberOrString;
  marginTop?: NumberOrString;
  marginLeft?: NumberOrString;
  marginRight?: NumberOrString;
  marginBottom?: NumberOrString;
  padding?: NumberOrString;
  paddingTop?: NumberOrString;
  paddingLeft?: NumberOrString;
  paddingRight?: NumberOrString;
  paddingBottom?: NumberOrString;
  borderRadius?: NumberOrString;
  border?: string;
  responsive?: Sprinkles
};
