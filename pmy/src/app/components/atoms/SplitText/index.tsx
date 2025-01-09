import React, { useEffect } from 'react';
import { link, txt } from './style.css';
import { Text } from '@/components/atoms/Text/Text';
// import Splitting from 'splitting';
import './animate.css';
import cn from 'classnames';

import { text, TextVariantProps } from './splitText.module.css';

type SplitTextProps = {
  splitText: string;
  url?: string;
  onClick?: () => void;
};

export const SplitText = ({
  splitText,
  sizes,
  url,
  onClick,
}: SplitTextProps & Partial<TextVariantProps>) => {
  return (
    <a
      href={url}
      className={`${link} link ${text({ sizes })}`}
      onClick={onClick}
    >
      <Text
        color="primary"
        className={cn('txt', txt, text({ sizes }))}
        weights="light"
        sizes={sizes}
        data-splitting
      >
        {splitText}
      </Text>
      <Text
        color="primary"
        className={cn('txt', txt, text({ sizes }))}
        weights="light"
        sizes={sizes}
        data-splitting
      >
        {splitText}
      </Text>
    </a>
  );
};
