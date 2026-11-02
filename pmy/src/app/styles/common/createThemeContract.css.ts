import { createThemeContract, createTheme } from '@vanilla-extract/css';
import { colors } from '@/styles/tokens/colors.css';

export const vars = createThemeContract({
  color: {
    primary: '', // 주 색상
    light: '', // 흐린 색상
    dark: '',
    signal: '',
    typography: '',
    text: {
      primary: '', // 기본 텍스트 색상
      tertiary: '', // 보조 텍스트 색상 (설명 텍스트 등)
      accent: '', // 강조 텍스트 색상
      light: '', // 비활성화된 텍스트 색상
    },
    scrollbar: {
      track: '', // bg
      thumb: '',
    },
  },
});

export const lightTheme = createTheme(vars, {
  color: {
    primary: colors.mintBackground,
    light: colors.mintSurface,
    dark: colors.plumText,
    signal: '#CE2939',
    typography: '#681C93',
    text: {
      primary: colors.plumText,
      tertiary: colors.lightMuted,
      accent: colors.violetAccent,
      light: colors.lightMuted,
    },
    scrollbar: {
      track: colors.mintSurface,
      thumb: colors.violetAccent,
    },
  },
});
export const darkTheme = createTheme(vars, {
  color: {
    primary: colors.charcoalBackground,
    light: colors.charcoalSurface,
    dark: colors.paleText,
    signal: '#CE2939',
    typography: '#C59AE0',
    text: {
      primary: colors.paleText,
      tertiary: colors.darkMuted,
      accent: colors.mintAccent,
      light: colors.darkMuted,
    },
    scrollbar: {
      track: colors.charcoalSurface,
      thumb: colors.mintAccent,
    },
  },
});
