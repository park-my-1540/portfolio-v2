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
        highlight: { backgroundColor: theme.theme.highlight, color: vars.color.accent },
        white: { backgroundColor: theme.theme.white, color: vars.color.accent },
        black: { backgroundColor: theme.theme.black, color: vars.color.accent },
        default: { backgroundColor: theme.theme.black, color: vars.color.accent },
    },
}
export const badge = recipe({
    base: { //공통적으로 적용시킬것
      ...base
    },
    variants: variants, // 상황에 따라
    defaultVariants: { //fallback으로 사용할 variants 설정
      theme: 'highlight',
    },
  });
export type BadgeVariantProps = RecipeVariants<typeof badge>;