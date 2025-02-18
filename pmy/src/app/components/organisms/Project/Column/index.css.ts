import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';
import {
  responsiveTheme,
  rootVars,
  globalVars,
} from '@/styles/constant/constant.css';

export const list = style([
  responsiveTheme,
  {
    borderBottom: `1px solid ${vars.color.text.light}`,
    padding: `${globalVars.list.item} 0`,
  },
]);

export const itemWrap = style([
  responsiveTheme,
  {
    padding: `0 ${globalVars.list.X}`,
  },
]);
export const titleWrap = style([
  responsiveTheme,
  {
    padding: `${globalVars.list.Y} ${globalVars.list.X}`,
  },
]);

export const columnWrap = style([
  responsiveTheme,
  {
    top: '0',
    '@media': {
      'screen and (max-width: 768px)': {
        height: '85vh',
      },
      'screen and (min-width: 768px)': {
        marginBottom: '-1.5px',
        height: `calc(100vh - ${rootVars.headerHeight} - (${globalVars.padding.container} * 3))`,
      },
    },
  },
]);
