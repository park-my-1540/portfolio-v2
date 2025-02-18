import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '@/styles/common/createThemeContract.css';
import { colors } from '../tokens/colors.css';
// variants 객체를 recipe로 바로 사용하도록 수정
export const textColor = recipe({
  base: {}, // 기본 스타일 필요 시 추가
  variants: {
    color: {
      primary: { color: vars.color.primary },
      tertiary: { color: colors.lightblue },
      accent: { color: vars.color.text.accent },
      textLighted: { color: vars.color.text.light },
      point: { color: colors.pink },
      inherit: { color: 'inherit' },
      transparent: { color: 'transparent' },
    },
    bgColor: {
      primary: { backgroundColor: vars.color.primary },
      tertiary: { backgroundColor: vars.color.text.tertiary },
      accent: { backgroundColor: vars.color.text.accent },
      textLighted: { backgroundColor: vars.color.text.light },
      inherit: { backgroundColor: 'inherit' },
      transparent: { backgroundColor: 'transparent' },
    },
  },
  defaultVariants: {
    color: 'inherit', // 기본 색상 설정
  },
});

// recipe에서 사용하는 Variant 타입 정의
export type TextColorVariantProps = RecipeVariants<typeof textColor>;
