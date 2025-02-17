import React from 'react';
import * as styles from '@/styles/common/position.css';
import { ValueOfUnion } from '@/utils/helpers';
import { NumberOrString } from '@/types/styles';

type PositionProps = {
  position?: ValueOfUnion<typeof styles.positionVariants>;
  className?: string;
  top?: NumberOrString;
  right?: NumberOrString;
  bottom?: NumberOrString;
  left?: NumberOrString;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

// eslint-disable-next-line import/prefer-default-export
export const Position: React.FC<PositionProps> = ({
  position = 'static',
  className = '',
  top,
  right,
  bottom,
  left,
  children,
}) => {
  const inlineStyles = {
    top,
    right,
    bottom,
    left,
  };
  return (
    <div
      className={`${styles.positionVariants[position]} ${className}`}
      style={inlineStyles}
    >
      {children}
    </div>
  );
};
