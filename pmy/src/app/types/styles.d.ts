import { ValueOfUnion } from "@/utils/utils";
import { sprinkles, Sprinkles } from "@/styles/common/sprinkles.css"; // sprinkles import
import { themeVariants } from "@/styles/common/themeVariants"
export type Theme = typeof themeVariants;
export type ThemeColor = keyof Theme["theme"];
export type Color = keyof Theme["color"];
export type ThemeMode = "light" | "dark";



const responsiveValue = ["desktop", "tablet", "mobile"] as const;
export type responsiveType = ValueOfUnion<typeof responsiveValue>

const displayValue = ["flex", "inline", "inline-block", "block", "grid"] as const;
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
  borderLeft?: string;
  responsive?: Sprinkles
};
