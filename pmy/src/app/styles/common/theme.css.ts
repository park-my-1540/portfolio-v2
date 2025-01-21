import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '@/styles/common/createThemeContract.css';

// 테마 정의
export const theme = {
  color: {
    white: vars.color.complementary,
    black: vars.color.border,
  },
  theme: {
    accent: vars.color.highlight.accent,
    complementary: vars.color.highlight.complementary,
    black: vars.color.border,
    white: vars.color.complementary,
  },
} as const;

// variants 객체를 recipe로 바로 사용하도록 수정
export const textColor = recipe({
  base: {}, // 기본 스타일 필요 시 추가
  variants: {
    color: {
      primary: { color: vars.color.text.primary }, // 옅은 색상
      tertiary: { color: vars.color.text.tertiary }, // 옅은 색상
      accent: { color: vars.color.text.accent },
      textLighted: { color: vars.color.text.light },
      inherit: { color: 'inherit' },
    },
  },
  defaultVariants: {
    color: 'inherit', // 기본 색상 설정
  },
});

// recipe에서 사용하는 Variant 타입 정의
export type TextColorVariantProps = RecipeVariants<typeof textColor>;
