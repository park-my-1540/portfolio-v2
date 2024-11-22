import { vars } from '@/styles/common/createThemeContract.css'
import { theme } from '@/styles/common/theme.css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

const variants = {
  theme: {
      blue: { backgroundColor: vars.color.accent },
      white: { backgroundColor: vars.color.accent},
      black: { backgroundColor: vars.color.accent },
      default: { backgroundColor: theme.theme.black },
  },
}
export const duration = recipe({
    variants: variants, // 상황에 따라
    defaultVariants: { //fallback으로 사용할 variants 설정
      theme: 'blue',
    },
  });
export type DurationVariantProps = RecipeVariants<typeof duration>;