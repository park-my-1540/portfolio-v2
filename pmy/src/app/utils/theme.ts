import { themeState } from '@/jotai/themeAtom';
import { getDefaultStore, useAtomValue } from 'jotai';
import { LocalStorageService } from '@/service/storage/localStorageService';
import { ThemeMode } from '@/types/styles';
const store = getDefaultStore();

const getStoredTheme = (): ThemeMode => {
  const theme = LocalStorageService.getItem('theme');
  return theme === 'light' || theme === 'dark' ? theme : 'light';
};

const hasStoredTheme = (): boolean => LocalStorageService.hasKey('theme');

export const setTheme = (mode: ThemeMode) => {
  store.set(themeState, { mode });
  LocalStorageService.setItem('theme', mode);
};

export const getTheme = (): ThemeMode =>
  hasStoredTheme() ? getStoredTheme() : useAtomValue(themeState).mode;

export const initTheme = () => {
  const mode = hasStoredTheme()
    ? getStoredTheme()
    : useAtomValue(themeState).mode;
  LocalStorageService.setItem('theme', mode);
};
