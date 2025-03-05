import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '@/styles/common/createThemeContract.css';
import { respVars } from '@/styles/common/createResponsiveTheme.css';
import { responsiveStyle } from '@/styles/common/responsive.css';

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

export const columnWrap = style([
  {
    top: '0',
  },
  responsiveStyle({
    mobile: {
      height: '85vh',
    },
    tablet: {
      marginBottom: '-1.5px',
      height: calc('100vh')
        .subtract(respVars.header.height)
        .subtract(calc(respVars.padding.container).multiply(3))
        .toString(),
    },
    desktop: {
      marginBottom: '-1.5px',
      height: calc('100vh')
        .subtract(respVars.header.height)
        .subtract(calc(respVars.padding.container).multiply(3))
        .toString(),
    },
  }),
]);
