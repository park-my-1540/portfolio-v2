import React from "react";
import { button, ButtonVariantProps } from './badge.module.css';
import { ThemeColor } from "@/types/styles";

type BadgeProps <T = unknown> = {
  theme: ThemeColor,
  children: React.ReactNode;
} & ButtonVariantProps & T;


export const Badge = <T,>({
  theme,
  children,
  ...rest // 추가 속성을 받을 수 있게 함
}: BadgeProps<T>) => {
  
return (
  <span className={button({ theme })}>{children}</span>
  );
};