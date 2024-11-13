import React from "react";
import * as styles from "@/styles/common/position.css";

type PositionProps = {
    position?: keyof typeof styles.positionVariants;
    className?: string;
    top?: number | string;
    right?: number | string;
    bottom?: number | string;
    left?: number | string;
    children: React.ReactNode;
    style?: React.CSSProperties;
};

// eslint-disable-next-line import/prefer-default-export
export const Position: React.FC<PositionProps> = ({
  position = "static",
  className = "",
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
