// src/styles/common/themeVariants.ts
import { vars } from '@/styles/common/createThemeContract.css';
import { theme } from '@/styles/common/theme.css';

export const themeVariants = {
  theme: {
    accent: { backgroundColor: theme.theme.accent, color: vars.color.accent},
    complementary: { backgroundColor: theme.theme.complementary, color: vars.color.accent },
    dark: { backgroundColor: theme.theme.black, color: vars.color.accent },
    default: { color: vars.color.tertiary},
  },
};


export type ThemeVariantsType = typeof themeVariants;
