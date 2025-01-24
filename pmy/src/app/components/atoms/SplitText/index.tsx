import { useEffect } from 'react';
import './animate.css';
import cn from 'classnames';
import { textColor, TextColorVariantProps } from '@/styles/common/theme.css';
import { text, TextVariantProps } from './splitText.module.css';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';

type SplitTextProps = {
  splitText: string;
  url?: string;
  type?: string;
  onClick?: () => void;
};

export const SplitText = ({
  splitText,
  sizes,
  color,
  bgColor,
  weights,
  url,
  type = 'txt',
  onClick,
}: SplitTextProps & Partial<TextVariantProps & TextColorVariantProps>) => {
  useEffect(() => {
    Splitting();
  }, []);
  const linkUrl = url ? url : 'javascript:void(0)';
  return (
    <a href={linkUrl} className={cn('link', text({ sizes }))} onClick={onClick}>
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
