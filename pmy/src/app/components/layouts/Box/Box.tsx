import React, { ReactNode } from "react";
import * as styles from "./box.css";
import * as flexstyles from "./flex.css";
import { clsx } from "clsx"; // clsx import
import { pickProps } from "@/utils/utils";
import { sprinkles, Sprinkles } from "@/styles/common/sprinkles.css"; // sprinkles import

type FlexProps = {
  children: ReactNode;
  direction?: keyof typeof flexstyles.flexDirection;
  align?: keyof typeof flexstyles.alignItems;
  justify?: keyof typeof flexstyles.justifyContent;
  gap?: keyof typeof flexstyles.gap;
  className?: string;
  style?: React.CSSProperties;
};

type BoxProps = {
  children: ReactNode;
  backgroundColor?: string;
  width?: number;
  height?: number;
  display?: string;
  margin?: string;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  padding?: string;
  paddingTop?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingBottom?: string;
  borderRadius?: React.CSSProperties;
  border?: React.CSSProperties;
  responsive?: any
} & FlexProps & Sprinkles;

const Box: React.FC<BoxProps> = ({
  children,
  backgroundColor,
  width,
  height,
  display,
  margin,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  padding,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,
  borderRadius,
  border,
  responsive,
  direction = "row",
  align = "stretch",
  justify = "start",
  gap = "none",
  className,
  style,
  ...props
}) => {
  const pickedProps = pickProps(
    {
      backgroundColor, width, height, display, margin, marginTop, marginLeft, marginRight, marginBottom, padding, paddingTop, paddingLeft, paddingRight, paddingBottom, borderRadius, border
    },
    ["backgroundColor", "width", "height", "display", "margin", "marginTop", "marginLeft", "marginRight", "marginBottom", "padding", "paddingTop", "paddingLeft", "paddingRight", "paddingBottom", "borderRadius", "border"]
  );

  const inlineStyle: React.CSSProperties = {
    backgroundColor: pickedProps.backgroundColor,
    width: pickedProps.width && `${pickedProps.width}px`,
    height: pickedProps.height && `${pickedProps.height}px`,
    display: pickedProps.display,
    margin: pickedProps.margin,
    marginTop: pickedProps.marginTop,
    marginLeft: pickedProps.marginLeft,
    marginRight: pickedProps.marginRight,
    marginBottom: pickedProps.marginBottom,
    padding: pickedProps.padding,
    paddingTop: pickedProps.paddingTop,
    paddingLeft: pickedProps.paddingLeft,
    paddingRight: pickedProps.paddingRight,
    paddingBottom: pickedProps.paddingBottom,
    borderRadius: pickedProps.borderRadius,
    border: pickedProps.border,
  };
  console.log(responsive)
  console.log(props)
// console.log(sprinkles(props))
  return (
     <div
     className={clsx(
      styles.boxStyle, // Box 기본 스타일
      sprinkles(responsive), // responsive 스타일
      flexstyles.flexDirection[direction], // Flex 스타일 (direction)
      flexstyles.alignItems[align], // Flex 스타일 (align)
      flexstyles.justifyContent[justify], // Flex 스타일 (justify)
      gap[gap], // Flex 스타일 (gap)
      className // 외부에서 전달된 className도 병합
    )}
      style={inlineStyle} // 동적 스타일을 인라인 스타일로 적용
    >
      {children}
    </div>
  );
};

export default Box;
