import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';

// `::after` 공통 스타일 정의
const defaultAfter = style({
  selectors: {
    '&::after': {
      content: '"About"',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '43%',
      fontFamily: 'MangoBold',
      fontSize: '21px',
      letterSpacing: '0.5px',
    },
  },
});

const textBox = style({
  width: '150px',
  height: '150px',
  mixBlendMode: 'normal',
  fontFamily: 'MangoBold',
});

export const cursorStyles = {
  default: style({
    width: '24px',
    height: '24px',
  }),
  cursor: style({
    width: '28px',
    height: '28px',
    backgroundColor: vars.color.text.accent,
  }),
  pointer: style({
    width: '28px',
    height: '28px',
    backgroundColor: vars.color.text.accent,
  }),
  point: style({
    width: '32px',
    height: '32px',
    backgroundColor: 'transparent',
    border: `1px solid ${vars.color.text.accent}`,
    mixBlendMode: 'normal',
  }),
  project: style([
    textBox,
    defaultAfter,
    {
      backgroundColor: vars.color.light,
      color: vars.color.text.accent,
      selectors: {
        '&::after': {
          content: 'About',
        },
      },
    },
  ]),
  copy: style([
    textBox,
    defaultAfter,
    {
      backgroundColor: vars.color.text.accent,
      color: vars.color.primary,
      selectors: {
        '&::after': {
          content: 'Copy',
        },
      },
    },
  ]),
  copyEnd: style([
    textBox,
    defaultAfter,
    {
      backgroundColor: vars.color.primary,
      color: vars.color.text.accent,
      selectors: {
        '&::after': {
          content: 'Copy!',
        },
      },
    },
  ]),
};
