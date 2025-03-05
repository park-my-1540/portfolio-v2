import { ValueOfUnion } from '@/utils/helpers';
import { Sprinkles } from '@/styles/common/sprinkles.css'; // sprinkles import
import {
  cursorValue,
  responsiveValue,
  displayValue,
  themeValue,
} from '@/constants/style';

export type ThemeMode = ValueOfUnion<typeof themeValue>;
export type CursorType = ValueOfUnion<typeof cursorValue>;
export type responsiveType = ValueOfUnion<typeof responsiveValue>;
export type displayType = ValueOfUnion<typeof displayValue>;
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
  borderRight?: string;
  responsive?: Sprinkles;
};
