import { useEffect } from 'react';
import './animate.css';
import cn from 'classnames';
import { clsx } from 'clsx';
import { textColor, TextColorVariantProps } from '@/styles/common/theme.css';
import { text, TextVariantProps } from './splitText.module.css';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import { sprinkles, Sprinkles } from '@/styles/common/sprinkles.css';
import { BoxProps } from '@/types/styles';
type SplitTextProps = {
  splitText: string;
  url?: string;
  type?: string;
  onClick?: () => void;
};

export const SplitText = ({
  splitText,
  responsive,
  sizes,
  color,
  bgColor,
  weights,
  url,
  type = 'txt',
  onClick,
}: SplitTextProps &
  BoxProps &
  Partial<TextVariantProps & TextColorVariantProps & Sprinkles>) => {
  useEffect(() => {
    Splitting();
  }, []);
  const linkUrl = url ? url : 'javascript:void(0)';
  const classes = clsx(
    responsive && sprinkles(responsive),
    text({ sizes }),
    'link',
  );

  return (
    <a href={linkUrl} className={classes} onClick={onClick}>
      {type !== 'same' && (
        <p
          className={cn(
            type,
            text({ sizes, weights }),
            textColor({ color, bgColor }),
          )}
          data-splitting="chars"
        >
          {splitText}
        </p>
      )}
      <p
        className={cn(
          type,
          text({ sizes, weights }),
          textColor({ color, bgColor }),
        )}
        data-splitting="chars"
      >
        {splitText}
      </p>
    </a>
  );
};
