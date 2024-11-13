import React, { ReactNode } from "react";
import { clsx } from "clsx"; // clsx import
import * as styles from "@/components/layouts/Flex/flex.css";

type FlexProps = {
  children: ReactNode;
  direction?: keyof typeof styles.flexDirection;
  align?: keyof typeof styles.alignItems;
  justify?: keyof typeof styles.justifyContent;
  gap?: keyof typeof styles.gap;
  className?: string;
  style?: React.CSSProperties;
};

const Flex: React.FC<FlexProps> = ({
  children,
  direction = "row",
  align = "stretch",
  justify = "start",
  gap = "none",
  className,
  style,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        styles.flex,
        styles.flexDirection[direction],
        styles.alignItems[align],
        styles.justifyContent[justify],
        styles.gap[gap],
        className // 외부에서 전달된 className도 병합
      )}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Flex;
