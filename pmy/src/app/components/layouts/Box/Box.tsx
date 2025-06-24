import React, { ReactNode } from 'react';
import { clsx } from 'clsx';
import { pickProps, ValueOfUnion } from '@/utils/helpers';
import { sprinkles, Sprinkles } from '@/styles/common/sprinkles.css';
import { BoxProps, NumberOrString } from '@/types/styles';
import * as flexstyles from './index.css';

type FlexProps = {
  children?: ReactNode;
  direction?: ValueOfUnion<typeof flexstyles.flexDirection>;
  align?: ValueOfUnion<typeof flexstyles.alignItems>;
  justify?: ValueOfUnion<typeof flexstyles.justifyContent>;
  gap?: ValueOfUnion<typeof flexstyles.gap>;
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
  borderRight,
  responsive,
  direction,
  align,
  justify,
  gap,
  className,
  ref,
}) => {
  const pickedProps = pickProps(
    {
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
      borderRight,
    },
    [
      'backgroundColor',
      'width',
      'height',
      'display',
      'margin',
      'marginTop',
      'marginLeft',
      'marginRight',
      'marginBottom',
      'padding',
      'paddingTop',
      'paddingLeft',
      'paddingRight',
      'paddingBottom',
      'borderRadius',
      'border',
      'borderTop',
      'borderBottom',
      'borderLeft',
      'borderRight',
    ],
  );

  const addUnit = (value: NumberOrString): NumberOrString => {
    if (
      typeof value === 'number' ||
      value?.startsWith('calc') ||
      value?.endsWith('%') ||
      value?.endsWith('vh') ||
      value?.endsWith('vw') ||
      value?.endsWith('rem') ||
      value === undefined
    ) {
      return value;
    }
    return `${value}px`;
  };

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
    borderRight: pickedProps.borderRight,
  };

  type GapType = ValueOfUnion<typeof gap>;

  const classes = clsx(
    responsive && sprinkles(responsive),
    direction && flexstyles.flexDirection[direction],
    align && flexstyles.alignItems[align],
    justify && flexstyles.justifyContent[justify],
    gap && flexstyles.gap[gap as GapType],
    className && className,
  );
  return (
    <div
      style={inlineStyle} // 동적 스타일을 인라인 스타일로 적용
      ref={ref}
      className={classes}
    >
      {children}
    </div>
  );
};

export default Box;
