import React from "react";
import { text, TextVariantProps } from "./texts.css";
import { textColor, TextColorVariantProps } from "@/styles/common/theme.css";

type TextProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  ref?: (index: HTMLParagraphElement) => void;
};

type TextLinkProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
};

export const Text = ({
  sizes = "medium",
  weights = "normal",
  vertical,
  textAlign,
  display,
  color,
  children,
  className,
  ref,
  ...rest
}: TextProps & Partial<TextVariantProps & TextColorVariantProps>) => {
  return (
    <p {...rest}  ref={ref} className={ `${className} ${text({
      sizes, weights, display, vertical, textAlign
    })} ${textColor({ color })}`}>
      {children}
    </p>
  );
};

export const TextLink = ({
  sizes = "medium",
  weights = "normal",
  vertical,
  textAlign,
  onClick,
  display,
  color,
  children,
  ...rest
}: TextLinkProps & Partial<TextVariantProps & TextColorVariantProps>) => {
  return (
    <a href='#none' {...rest} className={ `${text({
      sizes, weights, display, vertical, textAlign
    })} ${textColor({ color })}`} onClick={onClick}>
      {children}
    </a>
  );
};
