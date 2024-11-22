import React from "react";
import { badge, BadgeVariantProps } from './badge.module.css';
import { ThemeColor } from "@/types/styles";

type BadgeProps <T = unknown> = {
  theme: ThemeColor,
  children: React.ReactNode;
} & BadgeVariantProps & T;


export const Badge = <T,>({
  theme,
  children,
  ...rest // 추가 속성을 받을 수 있게 함
}: BadgeProps<T>) => {
  
return (
  <span className={badge({ theme })}>{children}</span>
  );
};