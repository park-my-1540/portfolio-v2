import React, { forwardRef } from 'react';
import cn from 'classnames';
import { textColor, TextColorVariantProps } from '@/styles/common/theme.css';
import * as cursor from '@/utils/cursor';
import { text, TextVariantProps } from './texts.module.css';

type BaseTextProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

type TextProps = BaseTextProps & {
  ref?: React.Ref<HTMLParagraphElement>;
};

type TextTitleProps = BaseTextProps & {
  ref?: React.Ref<HTMLHeadingElement>;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

type TextLinkProps = BaseTextProps & {
  ref?: React.Ref<HTMLAnchorElement>;
  url?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
} & Partial<TextVariantProps & TextColorVariantProps>;

export const Text = forwardRef<
  HTMLParagraphElement,
  TextProps & Partial<TextVariantProps & TextColorVariantProps>
>(
  (
    {
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
      ...rest
    },
    ref,
  ) => {
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
  },
);
Text.displayName = 'Text';

export const TextTitle = forwardRef<
  HTMLHeadingElement,
  TextTitleProps & Partial<TextVariantProps & TextColorVariantProps>
>(
  (
    {
      sizes = 'mediumlarge',
      weights = 'normal',
      vertical,
      lineHeight = 'sm',
      textAlign,
      family,
      bgColor,
      decoration,
      display,
      stroke,
      color,
      children,
      className,
      onMouseEnter,
      onMouseLeave,
      ...rest
    },
    ref,
  ) => {
    return (
      <h2
        {...rest}
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={cn(
          className,
          text({
            sizes,
            weights,
            display,
            vertical,
            textAlign,
            lineHeight,
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
  },
);
TextTitle.displayName = 'TextTitle';

export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
  (
    {
      sizes = 'medium',
      weights = 'normal',
      vertical,
      onClick,
      textAlign,
      wordBreak = 'breakWord',
      url,
      display,
      color,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    return (
      <a
        ref={ref}
        onMouseEnter={() => cursor.set('pointer')}
        onMouseLeave={() => cursor.set(null)}
        onClick={onClick}
        href={url}
        target="_blank"
        {...rest}
        className={cn(
          className,
          text({
            sizes,
            weights,
            display,
            vertical,
            textAlign,
            wordBreak,
          }),
          textColor({ color }),
        )}
      >
        {children}
      </a>
    );
  },
);
TextLink.displayName = 'TextLink';
