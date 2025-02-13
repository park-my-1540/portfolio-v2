import React from 'react';
import { text, TextVariantProps } from './texts.module.css';
import { textColor, TextColorVariantProps } from '@/styles/common/theme.css';
import cn from 'classnames';
import * as cursor from '@/utils/cursor';
type TextProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  ref?: (index: HTMLParagraphElement) => void;
};

type TextLinkProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  url?: string;
  onClick?: () => void;
};

export const Text = ({
  sizes = 'medium',
  weights = 'normal',
  vertical,
  decoration,
  textAlign,
  bgColor,
  family,
  display,
  stroke,
  color = 'inherit',
  children,
  className,
  ref,
  ...rest
}: TextProps & Partial<TextVariantProps & TextColorVariantProps>) => {
  return (
    <p
      {...rest}
      ref={ref}
      className={cn(
        className,
        text({
          sizes,
          weights,
          display,
          vertical,
          textAlign,
          stroke,
          family,
          decoration,
        }),
        textColor({ color, bgColor }),
      )}
    >
      {children}
    </p>
  );
};

export const TextTitle = ({
  sizes = 'mediumlarge',
  weights = 'normal',
  vertical,
  textAlign,
  family,
  bgColor,
  decoration,
  display,
  stroke,
  color,
  children,
  className,
  ref,
  ...rest
}: TextProps & Partial<TextVariantProps & TextColorVariantProps>) => {
  return (
    <h2
      {...rest}
      ref={ref}
      className={cn(
        className,
        text({
          sizes,
          weights,
          display,
          vertical,
          textAlign,
          stroke,
          family,
          decoration,
        }),
        textColor({ color, bgColor }),
      )}
    >
      {children}
    </h2>
  );
};

export const TextLink = ({
  sizes = 'medium',
  weights = 'normal',
  vertical,
  onClick,
  textAlign,
  url,
  display,
  color,
  className,
  children,
  ...rest
}: TextLinkProps & Partial<TextVariantProps & TextColorVariantProps>) => {
  return (
    <a
      onMouseEnter={() => cursor.set('pointer')}
      onMouseLeave={() => cursor.set(null)}
      onClick={onClick}
      href={url}
      target="blank"
      {...rest}
      className={cn(
        className,
        text({ sizes, weights, display, vertical, textAlign }),
        textColor({ color }),
      )}
    >
      {children}
    </a>
  );
};
