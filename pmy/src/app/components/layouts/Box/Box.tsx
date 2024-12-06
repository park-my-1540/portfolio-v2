import React, { ReactNode } from "react";
import * as flexstyles from "./flex.css";
import { clsx } from "clsx"; // clsx import
import { pickProps } from "@/utils/utils";
import { sprinkles, Sprinkles } from "@/styles/common/sprinkles.css"; // sprinkles import
import { BoxProps, NumberOrString } from "@/types/styles"

type FlexProps = {
  children: ReactNode;
  direction?: keyof typeof flexstyles.flexDirection;
  align?: keyof typeof flexstyles.alignItems;
  justify?: keyof typeof flexstyles.justifyContent;
  gap?: keyof typeof flexstyles.gap;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.RefObject<HTMLDivElement>;
};

const Box: React.FC<BoxProps & FlexProps & Sprinkles> = ({
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
  borderTop,
  borderBottom,
  borderLeft,
  responsive,
  direction,
  align,
  justify,
  gap,
  className,
  style,
  ref,
  ...props
}) => {
  const pickedProps = pickProps({
      backgroundColor, width, height, display, 
      margin, marginTop, marginLeft, marginRight, marginBottom, 
      padding, paddingTop, paddingLeft, paddingRight, paddingBottom, 
      borderRadius, border, borderTop, borderBottom, borderLeft
    },
    ["backgroundColor", "width", "height", "display", 
      "margin", "marginTop", "marginLeft", "marginRight", "marginBottom", 
      "padding", "paddingTop", "paddingLeft", "paddingRight", "paddingBottom", 
      "borderRadius", "border", "borderTop", "borderBottom", "borderLeft"]
  );

  const addUnit = (value:NumberOrString): NumberOrString=> {
    if(typeof value === 'number' || value?.startsWith('calc') || value?.endsWith('%') || value === undefined){
      return value
    } 
    return value + 'px'
  }

  const inlineStyle: React.CSSProperties = {
    backgroundColor: pickedProps.backgroundColor,
    width: addUnit(pickedProps.width),
    height: addUnit(pickedProps.height),
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
    borderTop: pickedProps.borderTop,
    borderBottom: pickedProps.borderBottom,
    borderLeft: pickedProps.borderLeft,
  };
  return (

     <div
      ref = {ref}
      className={clsx(
        sprinkles(responsive), // responsive 스타일
        flexstyles.flexDirection[direction], // Flex 스타일 (direction)
        flexstyles.alignItems[align], // Flex 스타일 (align)
        flexstyles.justifyContent[justify], // Flex 스타일 (justify)
        flexstyles.gap[gap], // Flex 스타일 (gap)
        className // 외부에서 전달된 className도 병합
      )}
        style={inlineStyle} // 동적 스타일을 인라인 스타일로 적용
      >
      {children}
    </div>
  );
};

export default Box;
