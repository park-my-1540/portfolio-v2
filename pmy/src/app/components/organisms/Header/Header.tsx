import React, { useRef, useEffect } from 'react';
import { LocalStorageService } from '@/service/storage/localStorageService';
import { usePathname } from 'next/navigation';
import Box from '@/components/layouts/Box/Box';
import { header, inner, changeCircle, dark, menuBtn, sub } from './index.css';
import { Position } from '@/components/layouts/PositionContainer/Position';
import { useSetAtom, useAtomValue, useAtom } from 'jotai';
import { themeState } from '@/jotai/themeAtom';
import { cursorState } from '@/jotai/cursorAtom';
import { modalState } from '@/jotai/modalAtom';

import { ThemeMode } from '@/types/styles';
import { SplitText } from '@/components/atoms/SplitText';
import { TextLink } from '@/components/atoms/Text/Text';
import Menu from '@/components/molecules/Menu';

import * as animate from '@/utils/animate';

const MenuToggle = () => {
  const setModalOpen = useSetAtom(modalState);
  const modalOpen = useAtomValue(modalState);
  const onClickMenu = () => {
    modalOpen ? animate.closeMenu() : animate.openMenu();
    setModalOpen((prev) => !prev);
  };

  return (
    <TextLink
      weights="bold"
      sizes="smallmedium"
      className={menuBtn}
      onClick={onClickMenu}
    >
      {modalOpen ? 'CLOSE' : 'MENU'}
    </TextLink>
  );
};

const ThemeToggle = () => {
  const setTheme = useSetAtom(themeState);
  const { cursorRef } = useAtomValue(cursorState);
  const changeTheme = (mode: ThemeMode) => {
    LocalStorageService.setItem('theme', mode);
    setTheme({
      mode: mode,
    });
  };

  const removePoint = () => {
    if (!cursorRef) return;
    cursorRef.current?.classList.remove('point');
  };
  const addPoint = () => {
    if (!cursorRef) return;
    cursorRef.current?.classList.add('point');
  };

  return (
    <Box display="flex" direction="row" align="center" justify="center">
      <SplitText splitText="Mee Young" sizes="medium" weights="bold" />
      <Position position="absolute" left="50%">
        <button
          onMouseEnter={addPoint}
          onMouseLeave={removePoint}
          onClick={() => changeTheme('light')}
          className={`${changeCircle} changeTheme`}
        />
        <button
          onMouseEnter={addPoint}
          onMouseLeave={removePoint}
          className={`${changeCircle} ${dark} changeTheme`}
          onClick={() => changeTheme('dark')}
        />
      </Position>
    </Box>
  );
};

export function Header() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname(); // 현재 경로

  useEffect(() => {
    if (!headerRef?.current) return;

    const method = pathname?.includes('project') ? 'add' : 'remove';
    headerRef.current.classList[method](sub);
  }, [pathname]);

  return (
    <Box
      className={header}
      responsive={{
        padding: {
          desktop: 'large',
          tablet: 'large',
          mobile: 'xLarge',
        },
      }}
    >
      <Box
        ref={headerRef}
        className={`${inner} inner`}
        display="flex"
        direction="row"
        align="center"
        justify="between"
        responsive={{
          padding: {
            desktop: 'large',
            tablet: 'large',
            mobile: 'medium',
          },
        }}
      >
        <ThemeToggle />
        <MenuToggle />
        <Menu />
      </Box>
    </Box>
  );
}

export default Header;
