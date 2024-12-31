'use client';
import { lightTheme, darkTheme } from '@/styles/common/createThemeContract.css';
import { LocalStorageService } from '@/utils/service/localStorageService';
import PageTransition from '@/components/layouts/transition/PageTransition';
import Header from '@/components/organisms/Header/Header';
import CustomCursor from '@/components/molecules/CustomCursor';

import { useAtomValue } from 'jotai';
import { themeState } from '@/jotai/themeAtom';

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { mode } = useAtomValue(themeState);
  const theme = LocalStorageService.hasKey('theme')
    ? LocalStorageService.getItem('theme')
    : mode;

  return (
    <body className={`${theme === 'dark' ? darkTheme : lightTheme}`}>
      <CustomCursor />
      <Header />
      <PageTransition>{children}</PageTransition>
    </body>
  );
}
