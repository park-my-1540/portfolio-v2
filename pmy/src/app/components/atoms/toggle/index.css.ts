import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '@/styles/common/createThemeContract.css';
import { colors } from '@/styles/tokens/colors.css';
import { respVars } from '@/styles/common/createResponsiveTheme.css';
import { sub } from '@/components/organisms/Header/index.css';

const switcherBox = style({
  position: 'relative',
  width: respVars.toggle.width,
  height: respVars.toggle.height,
  borderRadius: calc(respVars.toggle.height).divide(2).toString(),
});
export const switcher = style([
  switcherBox,
  {
    display: 'inline-block',
  },
]);
export const switcherInput = style([
  switcherBox,
  {
    backgroundColor: colors.lightblue,
    appearance: 'none',
    outline: 'none',
    transition: '0.25s -0.1s',
    selectors: {
      '&:before, &:after': {
        zIndex: 2,
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        color: colors.lightblue,
      },
      '&:checked': {
        backgroundColor: colors.lightblue,
      },
      '&:checked:before': {
        backgroundColor: colors.lightblue,
        transition: 'color 0.5s 0.2s;',
      },
      '&:not(:checked)': {
        backgroundColor: colors.lightblue,
        transition: 'background 0.5s -0.1s;',
      },
      '&:not(:checked):after': {
        backgroundColor: colors.lightblue,
        transition: 'color 0.5s 0.2s;',
      },
      [`${sub} &:checked`]: {
        backgroundColor: colors.grayDark,
      },
      [`${sub} &:checked:before`]: {
        backgroundColor: colors.grayDark,
      },
    },
  },
]);
export const switcherIcon = style({
  width: respVars.toggle.icon,
});
export const switcherLabel = style({
  zIndex: 1,
  position: 'absolute',
  top: respVars.toggle.start,
  bottom: respVars.toggle.start,
  borderRadius: calc(respVars.toggle.height).multiply(2).toString(),
  textAlign: 'center',
  lineHeight: calc(respVars.toggle.icon).multiply(2).toString(),
  selectors: {
    [`${switcherInput}:checked + &`]: {
      left: respVars.toggle.start,
      right: respVars.toggle.end,
      background: vars.color.primary,
      transition: 'left 0.5s, right 0.4s 0.2s',
    },
    [`${switcherInput}:not(:checked) + &`]: {
      left: respVars.toggle.end,
      right: respVars.toggle.start,
      background: vars.color.primary,
      transition: 'left 0.4s 0.2s, right 0.5s, background 0.35s -0.1s',
    },
    [`${sub} ${switcherInput}:checked + &`]: {
      background: vars.color.light,
    },
    [`${sub} ${switcherInput}:not(:checked) + &`]: {
      background: vars.color.light,
    },
  },
});
