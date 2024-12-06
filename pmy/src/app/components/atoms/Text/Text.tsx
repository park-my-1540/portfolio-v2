import React from "react";
import { text, TextVariantProps } from "./texts.module.css";
import { arrowStyle } from "./text.css"
import { textColor, TextColorVariantProps } from "@/styles/common/theme.css";
import { IconText } from "@/components/atoms/Icon/IconText";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

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
  arrow,
  ref,
  ...rest
}: TextProps & Partial<TextVariantProps & TextColorVariantProps>) => {
  return (
    <p {...rest}  ref={ref} className={ `${className} ${text({
      sizes, weights, display, vertical, textAlign
    })} ${textColor({ color })}`}>
      {children}
      {
        arrow && (<span className={arrowStyle}><IconText icon={faAngleUp}></IconText></span>)
      }
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
