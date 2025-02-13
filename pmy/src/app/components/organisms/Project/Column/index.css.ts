import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';

export const list = style({
  padding: '.6rem 0 .4rem',
  borderBottom: `1px solid ${vars.color.text.light}`,
});

export const columnWrap = style({
  top: '0',
  height: 'calc(100vh - ((var(--padding-container)*5) + var(--textHeight)))',
});
