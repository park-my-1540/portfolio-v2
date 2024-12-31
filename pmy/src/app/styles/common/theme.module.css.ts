// src/styles/common/theme.module.css.ts
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { themeVariants } from './themeVariants';

export const themeBase = recipe({
  defaultVariants: {
    theme: 'accent',
  },
});

export type ThemeBaseVariantProps = RecipeVariants<typeof themeBase>;
