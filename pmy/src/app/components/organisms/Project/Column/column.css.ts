import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';

export const list = style({
  padding: ".6rem 0 .4rem",
  borderBottom: `1px solid ${vars.color.border.muted}`,
})

export const columnWrap = style({
  top: '0',
  height : 'calc(100vh - (20px + 1.6rem*2 + 2.85rem))'
})