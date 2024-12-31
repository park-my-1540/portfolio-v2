// src/styles/common/themeVariants.ts
import { vars } from '@/styles/common/createThemeContract.css';
import { theme } from '@/styles/common/theme.css';

export const themeVariants = {
  theme: {
    accent: { backgroundColor: theme.theme.accent, color: vars.color.border},
    complementary: { backgroundColor: theme.theme.complementary, color: vars.color.border },
    dark: { backgroundColor: theme.theme.black, color: vars.color.border },
    default: { color: vars.color.border},
  },
};


export type ThemeVariantsType = typeof themeVariants;
