import { ValueOfUnion } from "@/utils/utils";
import { sprinkles, Sprinkles } from "@/styles/common/sprinkles.css"; // sprinkles import


export type Theme = typeof theme;
export type ThemeColor = keyof Theme["theme"];
export type Color = keyof Theme["color"];
export type ThemeMode = "light" | "dark";

const theme = {
  color: {
    white: "#fff",
    black: "#000",
  },
  theme: {
    highlight: "#223DFF",
    black: "#231F20",
    white: "#fff",
    default: "#231F20"
  }
} as const;


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
  borderTop?: string;
  borderBottom?: string;
  responsive?: Sprinkles
};
