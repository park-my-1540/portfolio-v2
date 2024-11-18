import { vars } from '@/styles/common/createThemeContract.css'
import { theme } from '@/styles/common/theme.css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

const base = {
  display:'inline-block',
  padding: '7px 10px',
  borderRadius: 32,
  fontSize: '14px',

}
const variants = {
  theme: {
        blue: { backgroundColor: theme.theme.blue, color: vars.color.accent },
        white: { backgroundColor: theme.theme.white, color: vars.color.accent },
        black: { backgroundColor: theme.theme.black, color: vars.color.accent },
    },
}
export const button = recipe({
    base: { //공통적으로 적용시킬것
      ...base
    },
    variants: variants, // 상황에 따라
    defaultVariants: { //fallback으로 사용할 variants 설정
      theme: 'blue',
    },
  });
export type ButtonVariantProps = RecipeVariants<typeof button>;