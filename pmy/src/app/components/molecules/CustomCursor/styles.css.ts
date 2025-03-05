import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/tokens/colors.css';

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
    width: '48px',
    height: '48px',
    backgroundColor: colors.purple,
  }),
  pointer: style({
    width: '48px',
    height: '48px',
    backgroundColor: colors.purple,
  }),
  point: style({
    width: '60px',
    height: '60px',
    backgroundColor: colors.pink02,
    mixBlendMode: 'normal',
  }),
  project: style([
    textBox,
    defaultAfter,
    {
      backgroundColor: '#ffffffc8',
      color: colors.blue,
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
      backgroundColor: colors.blue,
      color: colors.white,
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
      backgroundColor: colors.white,
      color: colors.blue,
      selectors: {
        '&::after': {
          content: 'Copy!',
        },
      },
    },
  ]),
};
