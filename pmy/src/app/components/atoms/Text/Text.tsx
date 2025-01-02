import React from 'react';
import { text, TextVariantProps } from './texts.module.css';
import { textColor, TextColorVariantProps } from '@/styles/common/theme.css';
import cn from 'classnames';

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
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
};

export const Text = ({
  sizes = 'medium',
  weights = 'normal',
  vertical,
  textAlign,
  display,
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
        text({ sizes, weights, display, vertical, textAlign }),
        textColor({ color }),
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
  display,
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
        text({ sizes, weights, display, vertical, textAlign }),
        textColor({ color }),
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
  textAlign,
  onClick,
  display,
  color,
  className,
  children,
  ...rest
}: TextLinkProps & Partial<TextVariantProps & TextColorVariantProps>) => {
  return (
    <a
      href="#none"
      {...rest}
      className={cn(
        className,
        text({ sizes, weights, display, vertical, textAlign }),
        textColor({ color }),
      )}
      onClick={onClick}
    >
      {children}
    </a>
  );
};
