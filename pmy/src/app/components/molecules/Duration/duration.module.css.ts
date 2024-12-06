import { vars } from '@/styles/common/createThemeContract.css'
import { theme } from '@/styles/common/theme.css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

const variants = {
  theme: {
      accent: { backgroundColor: vars.color.accent },
      complementary: { backgroundColor: vars.color.accent},
      dark: { backgroundColor: vars.color.accent },
      default: { backgroundColor: theme.theme.black },
  },
}
export const duration = recipe({
    variants: variants, // 상황에 따라
    defaultVariants: { //fallback으로 사용할 variants 설정
      theme: 'accent',
    },
  });
export type DurationVariantProps = RecipeVariants<typeof duration>;