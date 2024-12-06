// src/styles/common/theme.module.css.ts
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { themeVariants } from './themeVariants';

export const themeBase = recipe({
  variants: themeVariants, // 공통 모듈 사용
  defaultVariants: {
    theme: 'accent',
  },
});

export type ThemeBaseVariantProps = RecipeVariants<typeof themeBase>;
