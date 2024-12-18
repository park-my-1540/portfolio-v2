import React, { useEffect } from 'react';
import { link, txt } from './style.css';
import { Text } from '@/components/atoms/Text/Text';
import Splitting from 'splitting';
import './animate.css';
import cn from 'classnames';

import { text, TextVariantProps } from './splitText.module.css';

type SplitTextProps = {
  splitText: string;
  url: string;
};

export const SplitText = ({
  splitText,
  sizes,
  url,
}: SplitTextProps & Partial<TextVariantProps>) => {
  useEffect(() => {
    Splitting();
  }, []);
  return (
    <a href={url} className={`${link} link ${text({ sizes })}`}>
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
