import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';
import { rootVars, respVars } from '@/styles/common/createResponsiveTheme.css';

export const list = style({
  borderBottom: `1px solid ${vars.color.text.light}`,
  padding: `${respVars.list.item} 0`,
});

export const itemWrap = style({
  padding: `0 ${respVars.list.X}`,
});
export const titleWrap = style({
  padding: `${respVars.list.Y} ${respVars.list.X}`,
});

export const columnWrap = style({
  top: '0',
  '@media': {
    'screen and (max-width: 768px)': {
      height: '85vh',
    },
    'screen and (min-width: 768px)': {
      marginBottom: '-1.5px',
      height: `calc(100vh - ${respVars.header.height} - (${respVars.padding.container} * 3))`,
    },
  },
});
