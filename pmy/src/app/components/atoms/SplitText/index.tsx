import React, { useEffect } from 'react';
import { link, txt, sameType } from './style.css';
import { Text } from '@/components/atoms/Text/Text';
// import Splitting from 'splitting';
import './animate.css';
import cn from 'classnames';

import { text, TextVariantProps } from './splitText.module.css';

type SplitTextProps = {
  splitText: string;
  url?: string;
  type?: string;
  onClick?: () => void;
};

export const SplitText = ({
  splitText,
  sizes,
  weights,
  url,
  type,
  onClick,
}: SplitTextProps & Partial<TextVariantProps>) => {
  const clsname = type === 'same' ? sameType : txt;
  const linkUrl = url ? url : 'javascript:void(0)';
  return (
    <a
      href={linkUrl}
      className={`${link} link ${text({ sizes })}`}
      onClick={onClick}
    >
      <p
        className={cn('txt', clsname, text({ sizes, weights }))}
        data-splitting
      >
        {splitText}
      </p>
      <p
        className={cn('txt', clsname, text({ sizes, weights }))}
        data-splitting
      >
        {splitText}
      </p>
    </a>
  );
};
