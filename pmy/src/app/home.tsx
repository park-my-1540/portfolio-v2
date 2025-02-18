'use client';
import React, { useEffect, useRef } from 'react';
import { lightTheme, darkTheme } from '@/styles/common/createThemeContract.css';
import { LocalStorageService } from '@/service/storage/localStorageService';
import PageTransition from '@/components/layouts/transition/PageTransition';
import Header from '@/components/organisms/Header/Header';
import CustomCursor from '@/components/molecules/CustomCursor';
import Modal from '@/components/molecules/Modal';
import { useAtomValue } from 'jotai';
import { themeState } from '@/jotai/themeAtom';

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bodyRef = useRef<HTMLBodyElement>(null);
  const { mode } = useAtomValue(themeState);
  const theme = LocalStorageService.hasKey('theme')
    ? LocalStorageService.getItem('theme')
    : useAtomValue(themeState).mode;

  useEffect(() => {
    bodyRef.current?.classList.remove(lightTheme, darkTheme);
    bodyRef.current?.classList.add(theme === 'dark' ? darkTheme : lightTheme);
  }, [theme, mode]);

  return (
    <body
      className={`${theme === 'dark' ? darkTheme : lightTheme}`}
      ref={bodyRef}
    >
      <Modal />
      <CustomCursor />
      <Header />
      <PageTransition>{children}</PageTransition>
    </body>
  );
}
