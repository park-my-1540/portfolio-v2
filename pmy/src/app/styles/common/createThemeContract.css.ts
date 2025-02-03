import { createThemeContract, createTheme } from '@vanilla-extract/css';
import { colors } from '@/styles/tokens/colors.css';

type ColorKey = keyof typeof colors;

export const vars = createThemeContract({
  color: {
    primary: '', // 주 색상
    complementary: '', // 반대 색상
    point: '', // 강조 색상
    light: '', // 흐린 색상
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
    primary: colors['blue' as ColorKey],
    complementary: colors['lightblue' as ColorKey],
    point: colors['pink' as ColorKey],
    light: colors['lightblue03' as ColorKey],
    text: {
      primary: colors['white' as ColorKey],
      tertiary: colors['lightblue02' as ColorKey],
      accent: colors['blue' as ColorKey],
      light: colors['gray' as ColorKey],
    },
    scrollbar: {
      track: colors['lightblue' as ColorKey],
      thumb: colors['blue' as ColorKey],
    },
  },
});
export const darkTheme = createTheme(vars, {
  color: {
    primary: colors['dark' as ColorKey],
    complementary: colors['lightblue' as ColorKey],
    point: colors['pink' as ColorKey],
    light: colors['dark' as ColorKey],
    text: {
      primary: colors['gray' as ColorKey],
      tertiary: colors['light' as ColorKey],
      accent: colors['white' as ColorKey],
      light: colors['gray' as ColorKey],
    },
    scrollbar: {
      track: colors['dark' as ColorKey],
      thumb: colors['lightblue' as ColorKey],
    },
  },
});
