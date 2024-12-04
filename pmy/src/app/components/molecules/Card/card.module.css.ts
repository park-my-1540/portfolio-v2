import { vars } from '@/styles/common/createThemeContract.css'
import { theme } from '@/styles/common/theme.css'
import { recipe } from '@vanilla-extract/recipes';

const variants = {
  theme: {
    highlight: { backgroundColor: theme.theme.highlight, color: vars.color.accent },
        white: { backgroundColor: theme.theme.white, color: vars.color.accent },
        black: { backgroundColor: theme.theme.black, color: vars.color.accent },
        default: { color: theme.theme.black},
    },
}
export const card = recipe({
    variants: variants, // 상황에 따라
    defaultVariants: { //fallback으로 사용할 variants 설정
      theme: 'highlight',
    },
  });