import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/common/createThemeContract.css";
export const container = style({
  width: "100vw",
  height: "100vh",
});

export const header = style({
  height: 52,
  padding: "0 20px",
  lineHeight: "52px",
  fontSize: 24,
});

export const borderTopNone = style({
  border: '1px solid',
  borderTop: "none",
});

export const borderBox = style({
  border: "1px solid",
});

export const borderTop = style({
  borderTop: "1px solid",
});

export const paddingBox = style({
  padding: 'var(--padding-container)', // CSS 변수 사용
})

export const scrollbar = style({
  selectors: {
    '&::-webkit-scrollbar': {
      width: '5px',
      backgroundColor: vars.color.bg.primary,
    },
    '&::-webkit-scrollbar-track': {
      WebkitBoxShadow: `inset 0 0 6px ${vars.color.primary}`,
      backgroundColor: vars.color.bg.primary,
      borderLeft: `1px solid ${vars.color.bg.primary}`,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: vars.color.bg.complementary,
    },
  },
});