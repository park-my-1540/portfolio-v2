import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';

export const list = style({
  padding: ".6rem 0 .4rem",
  borderBottom: `1px solid ${vars.color.border.muted}`,
})

export const columnWrap = style({
  top: '1rem',
  height : 'calc(100vh - (20px + 1.6rem*2 + 2.85rem))'
})

// Keyframes 정의
const slideIn = keyframes({
  from: {
    transform: 'translateY(-1em) rotate(-0.5turn) scale(0.5)',
    opacity: '0',
  },
});

// 스타일 정의
export const char = style({
  animation: `${slideIn} 1s cubic-bezier(0.5, 0, 0.5, 1) both`,
  animationDelay: 'calc(60ms * var(--char-index))',
});

export const home = style({
  overflow: 'hidden',
  display: 'block',
  position: 'relative',
  height: '47px',
  lineHeight: '40px',
  fontSize: '3rem',
  color: '#000',
  fontWeight: 'bold',
  fontStyle: 'italic',
});

export const text = style({
  position: 'absolute',
  left: 0,
  top: 0,
  transition: 'transform 0.5s cubic-bezier(0.5, 0, 0, 1), opacity 0.5s cubic-bezier(0.5, 0, 0, 1)',
  selectors: {
    '&:nth-child(1)': {
      transform: 'translateY(0)',
      opacity: 1,
      fontFamily: "Playfair Display",
      fontWeight: 500,
    },
    '&:nth-child(2)': {
      transform: 'translateY(-100%)',
      opacity: 0,
      fontFamily: "Roboto",
      fontWeight: 500,
    },
  }
})
