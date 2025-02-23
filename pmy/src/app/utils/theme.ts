import { themeState } from '@/jotai/themeAtom';
import { getDefaultStore } from 'jotai';
import { LocalStorageService } from '@/service/storage/localStorageService';
import { ThemeMode } from '@/types/styles';
const store = getDefaultStore();

const getInitialTheme = (): ThemeMode => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
  return 'light'; // SSR 시 기본값
};

// 로컬스토리지에서 테마 가져오기
const getStoredTheme = (): ThemeMode => {
  const theme = LocalStorageService.getItem('theme');
  return theme === 'light' || theme === 'dark' ? theme : 'light';
};

// 로컬스토리지에 테마 값이 있는지 확인
const hasStoredTheme = (): boolean => LocalStorageService.hasKey('theme');

// 현재 테마 가져오기 (저장된 값 우선)
export const getTheme = (): ThemeMode => {
  return hasStoredTheme() ? getStoredTheme() : getInitialTheme();
};

// 테마 설정 함수
export const setTheme = (mode: ThemeMode) => {
  store.set(themeState, { mode });
  LocalStorageService.setItem('theme', mode);
};

// 초기 테마 설정 (앱 실행 시 1회 실행)
export const initTheme = () => {
  const mode = getTheme();
  store.set(themeState, { mode });
  LocalStorageService.setItem('theme', mode);
};
