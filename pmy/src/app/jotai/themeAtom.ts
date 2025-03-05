import { atom } from 'jotai';
import { ThemeMode } from '@/types/styles';

type themeType = {
  mode: ThemeMode;
};

const themeState = atom<themeType>({
  mode: 'light',
});

export default themeState;
