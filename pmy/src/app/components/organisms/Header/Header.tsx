import React, { useCallback, useRef, useEffect } from 'react';
import { LocalStorageService } from '@/utils/service/localStorageService';
import { usePathname } from 'next/navigation';
import Box from '@/components/layouts/Box/Box';
import { header, inner, changeCircle, dark, menuBtn } from './header.css';
import { Position } from '@/components/layouts/Position/Position';
import { useSetAtom, useAtomValue, useAtom } from 'jotai';
import { themeState } from '@/jotai/themeAtom';
import { viewState } from '@/jotai/viewAtom';
import { modalState } from '@/jotai/modalAtom';

import { ThemeMode } from '@/types/styles';
import { SplitText } from '@/components/atoms/SplitText';
import { TextLink } from '@/components/atoms/Text/Text';
import Menu from '@/components/molecules/Menu';

export function Header() {
  const setTheme = useSetAtom(themeState);
  const [modalOpen, setModalOpen] = useAtom(modalState);

  const { cursorRef } = useAtomValue(viewState);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname(); // 현재 경로

  const removePoint = useCallback(() => {
    if (!cursorRef) return;
    cursorRef.current?.classList.remove('point');
  }, []);
  const addPoint = useCallback(() => {
    if (!cursorRef) return;
    cursorRef.current?.classList.add('point');
  }, []);

  const changeTheme = useCallback(
    (mode: ThemeMode) => {
      LocalStorageService.setItem('theme', mode);
      setTheme({
        mode: mode,
      });
    },
    [setTheme],
  );

  const onClickMenu = useCallback(() => {
    setModalOpen((prevState) => !prevState);
  }, [setModalOpen]);

  useEffect(() => {
    if (!headerRef?.current) return;

    const method = pathname?.includes('project') ? 'add' : 'remove';
    headerRef.current.classList[method]('sub');
  }, [pathname]);

  return (
    <Box
      className={header}
      ref={headerRef}
      responsive={{
        padding: {
          desktop: 'large',
          tablet: 'large',
          mobile: 'xLarge',
        },
      }}
    >
      <Box
        className={`${inner} inner`}
        display="flex"
        direction="row"
        align="center"
        justify="between"
        responsive={{
          padding: {
            desktop: 'large',
            tablet: 'large',
            mobile: 'xLarge',
          },
        }}
      >
        <Box display="flex" direction="row" align="center" justify="center">
          <SplitText splitText="Mee Young" sizes="medium" />
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

        <TextLink
          weights="bold"
          sizes="smallmedium"
          className={menuBtn}
          onClick={onClickMenu}
        >
          {modalOpen ? 'CLOSE' : 'MENU'}
        </TextLink>

        {modalOpen && <Menu />}
      </Box>
    </Box>
  );
}

export default Header;
