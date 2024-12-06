import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { themeVariants } from '@/styles/common/themeVariants';

const base = {
  display: 'inline-block',
  padding: '7px 10px',
  borderRadius: 32,
  fontSize: '14px',
};

export const badge = recipe({
  base: {
    ...base,
  },
  variants: themeVariants, // 공통 모듈 사용
  defaultVariants: {
    theme: 'accent',
  },
});

export type BadgeVariantProps = RecipeVariants<typeof badge>;
