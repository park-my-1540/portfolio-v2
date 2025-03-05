'use client';

import React, { useEffect, useRef } from 'react';
import { useAtomValue } from 'jotai';
import { lightTheme, darkTheme } from '@/styles/common/createThemeContract.css';
import PageTransition from '@/components/layouts/transition/PageTransition';
import Header from '@/components/organisms/Header/Header';
import CustomCursor from '@/components/molecules/CustomCursor';
import Modal from '@/components/molecules/Modal';
import themeState from '@/jotai/themeAtom';
import * as theme from '@/utils/theme';

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bodyRef = useRef<HTMLBodyElement>(null);
  const { mode } = useAtomValue(themeState);
  const _theme = theme.getTheme();

  useEffect(() => {
    bodyRef.current?.classList.remove(lightTheme, darkTheme);
    bodyRef.current?.classList.add(_theme === 'dark' ? darkTheme : lightTheme);
  }, [_theme, mode]);

  useEffect(() => {
    theme.initTheme();
  }, []);

  return (
    <body
      className={`${mode === 'dark' ? darkTheme : lightTheme}`}
      ref={bodyRef}
    >
      <Modal />
      <CustomCursor />
      <Header />
      <PageTransition>{children}</PageTransition>
    </body>
  );
}
