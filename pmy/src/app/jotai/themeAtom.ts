import { atom } from 'jotai';
import { ThemeMode } from '@/types/styles';

type themeType = {
  mode: ThemeMode;
};

export const themeState = atom<themeType>({
  mode: 'light',
});
