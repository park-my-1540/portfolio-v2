import { useEffect } from 'react';
import './animate.css';
import cn from 'classnames';
import { clsx } from 'clsx';
import { textColor, TextColorVariantProps } from '@/styles/common/theme.css';
import 'splitting/dist/splitting.css';
import { sprinkles, Sprinkles } from '@/styles/common/sprinkles.css';
import { BoxProps } from '@/types/styles';
import * as cursor from '@/utils/cursor';
import { text, TextVariantProps } from './splitText.module.css';

type SplitTextProps = {
  splitText: string;
  url?: string;
  type?: string;
  onClick?: () => void;
};

const SplitText = ({
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
    const initialize = async () => {
      const { default: Splitting } = await import('splitting');
      Splitting();
    };
    initialize();
  }, []);
  const linkUrl = url || '#';
  const classes = clsx(
    responsive && sprinkles(responsive),
    text({ sizes }),
    'link',
  );

  return (
    <a
      href={linkUrl}
      className={classes}
      onClick={(e) => {
        if (!url) e.preventDefault(); // url이 없을 때만 기본 동작 차단
        onClick?.();
      }}
      onMouseEnter={() => cursor.set('pointer')}
      onMouseLeave={() => cursor.set(null)}
    >
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

export default SplitText;
