import React, { useCallback, useRef, useEffect } from 'react';
import { LocalStorageService } from '@/utils/service/localStorageService';
import { usePathname } from 'next/navigation';
import Box from '@/components/layouts/Box/Box';
import { header, inner, changeCircle, dark } from './header.css';
import { Position } from '@/components/layouts/Position/Position';
import { useSetAtom, useAtomValue } from 'jotai';
import { themeState } from '@/jotai/themeAtom';
import { viewState } from '@/jotai/viewAtom';
import { ThemeMode } from '@/types/styles';
import { SplitText } from '@/components/atoms/SplitText';
import { Text } from '@/components/atoms/Text/Text';

export function Header() {
  const setTheme = useSetAtom(themeState);
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

  useEffect(() => {
    if (!headerRef?.current) return;

    const method = pathname?.includes('project') ? 'add' : 'remove';
    headerRef.current.classList[method]('sub');
  }, [pathname]);

  return (
    <header className={header} ref={headerRef}>
      <Box
        className={`${inner} inner`}
        display="flex"
        direction="row"
        align="center"
        justify="between"
        padding="small"
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
        <Text color="inherit" weights="bold" sizes="medium">
          MENU?
        </Text>
      </Box>
    </header>
  );
}

export default Header;
