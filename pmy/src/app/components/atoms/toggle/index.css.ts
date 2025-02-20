import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';
import { respVars } from '@/styles/common/createResponsiveTheme.css';

const switcherBox = style({
  position: 'relative',
  width: respVars.toggle.width,
  height: respVars.toggle.height,
  borderRadius: `calc(${respVars.toggle.height} / 2)`,
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
    backgroundColor: vars.color.header.background,
    appearance: 'none',
    outline: 'none',
    transition: '0.25s -0.1s',
    selectors: {
      '&:before, &:after': {
        zIndex: 2,
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        color: vars.color.header.thumb,
      },
      '&:checked': {
        backgroundColor: vars.color.header.thumb,
      },
      '&:checked:before': {
        backgroundColor: vars.color.header.thumb,
        transition: 'color 0.5s 0.2s;',
      },
      '&:not(:checked)': {
        backgroundColor: vars.color.header.background,
        transition: 'background 0.5s -0.1s;',
      },
      '&:not(:checked):after': {
        backgroundColor: vars.color.header.background,
        transition: 'color 0.5s 0.2s;',
      },
    },
  },
]);

export const switcherLabel = style({
  zIndex: 1,
  position: 'absolute',
  top: respVars.toggle.start,
  bottom: respVars.toggle.start,
  borderRadius: `calc(${respVars.toggle.start} * 2)`,
  selectors: {
    [`${switcherInput}:checked + &`]: {
      left: respVars.toggle.start,
      right: respVars.toggle.end,
      background: vars.color.header.background,
      transition: 'left 0.5s, right 0.4s 0.2s',
    },
    [`${switcherInput}:not(:checked) + &`]: {
      left: respVars.toggle.end,
      right: respVars.toggle.start,
      background: vars.color.header.thumb,
      transition: 'left 0.4s 0.2s, right 0.5s, background 0.35s -0.1s',
    },
  },
});
