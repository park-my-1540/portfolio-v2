// global.css.ts
import './layers.css';
import './reset.css';
import { globalStyle } from '@vanilla-extract/css';
import { globalFontFace } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';
import { colors } from './tokens/colors.css';
import * as layers from './layers.css';

// Medium 폰트 설정
globalFontFace('MangoLight', {
  fontWeight: 400,
  fontStyle: 'normal',
  src: 'url("/fonts/Pretendard-Light.otf") format("truetype")',
});

// Regular 폰트 설정
globalFontFace('MangoRegular', {
  fontWeight: 700,
  fontStyle: 'normal',
  src: 'url("/fonts/Pretendard-Regular.otf") format("truetype")',
});
// Bold 폰트 설정
globalFontFace('MangoBold', {
  fontWeight: 700,
  fontStyle: 'normal',
  src: 'url("/fonts/Pretendard-Bold.otf") format("truetype")',
});

globalStyle('#__next', {
  '@layer': {
    [layers.reset]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
  },
});

globalStyle('body, html', {
  '@layer': {
    [layers.reset]: {
      height: '100%',
      fontFamily: 'MangoRegular',
      cursor: 'none',
      letterSpacing: '0.6px',
    },
  },
});

globalStyle('body', {
  '@layer': {
    [layers.reset]: {
      margin: 0,
      overflowX: 'hidden',
      backgroundColor: vars.color.primary,
      color: colors.lightblue,
      transition: 'background-color 0.3s ease-in-out',
    },
  },
});

globalStyle(':root', {
  '@layer': {
    [layers.reset]: {
      fontSize: '16px',
    },
  },
  '@media': {
    'screen and (max-width: 1024px)': {
      fontSize: '17px',
    },
    'screen and (max-width: 768px)': {
      fontSize: '14px',
    },
  },
});

globalStyle('button', {
  '@layer': {
    [layers.reset]: {
      transition: 'opacity 0.3s ease', // 오퍼시티 전환 효과
    },
  },
});

globalStyle('canvas', {
  '@layer': {
    [layers.reset]: {
      borderRadius: '32px',
    },
  },
});

// 비활성화된 버튼 스타일
globalStyle('button:disabled', {
  opacity: 0.5, // 비활성화된 버튼의 오퍼시티
  cursor: 'not-allowed', // 비활성화된 상태에서 커서 스타일 변경
});

globalStyle('p', {
  wordBreak: 'break-word',
  whiteSpace: 'break-spaces',
});

globalStyle('h2', {
  wordBreak: 'keep-all',
  whiteSpace: 'break-spaces',
});

globalStyle('ul', {
  marginLeft: '5px',
});

globalStyle('li', {
  position: 'relative',
  marginLeft: '-15px',
  padding: '2px 0 2px 15px',
  display: 'list-item',
  lineHeight: '1.7',
  textAlign: 'match-parent',
  whiteSpace: 'normal',
  wordWrap: 'break-word', // 너무 긴 단어도 줄바꿈
});

globalStyle('ul > li', {
  fontFamily: 'MangoBold',
  paddingLeft: '5px',
  fontSize: '1.1rem',
});

globalStyle('li > ul', {
  paddingLeft: '25px',
});

globalStyle('ul ul > li', {
  paddingLeft: '15px',
  fontSize: '1rem',
});

globalStyle('ul ul > li::before', {
  content: "''",
  display: 'block',
  position: 'absolute',
  left: '0',
  top: '12px',
  width: '5px',
  height: '5px',
  borderRadius: '50%',
  background: vars.color.dark,
});

globalStyle('ul ul ul > li', {
  fontFamily: 'MangoRegular',
});

globalStyle('ul ul ul > li::before', {
  content: "''",
  display: 'block',
  position: 'absolute',
  left: '0',
  top: '12px',
  width: '5px',
  height: '5px',
  borderRadius: '50%',
  background: 'transparent',
  border: `1px solid ${vars.color.dark}`,
});

globalStyle('ul ul ul ul > li::before', {
  content: "''",
  display: 'block',
  position: 'absolute',
  left: '0',
  top: '12px',
  width: '5px',
  height: '5px',
  borderRadius: '0',
  background: vars.color.dark,
});
