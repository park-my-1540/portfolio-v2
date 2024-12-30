import React, { useCallback, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Box from '@/components/layouts/Box/Box';
import { header, inner, changeCircle, dark } from './header.css';
import { Position } from '@/components/layouts/Position/Position';
import { useSetAtom, useAtomValue } from 'jotai';
import { themeState } from '@/jotai/themeAtom';
import { viewState } from '@/jotai/viewAtom';
import { ThemeMode } from '@/types/styles';
import { SplitText } from '@/components/atoms/SplitText';

export function Header() {
  const setTheme = useSetAtom(themeState);
  const changeTheme = useCallback(
    (mode: ThemeMode) => {
      setTheme({
        mode: mode,
      });
    },
    [setTheme],
  );

  const { cursorRef } = useAtomValue(viewState);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname(); // 현재 경로

  useEffect(() => {
    if (!headerRef?.current) return;

    const method = pathname?.includes('project') ? 'add' : 'remove';
    headerRef.current.classList[method]('sub');
  }, [pathname]);

  const removePoint = useCallback(() => {
    if (!cursorRef) return;
    cursorRef.current?.classList.remove('point');
  }, []);
  const addPoint = useCallback(() => {
    if (!cursorRef) return;
    cursorRef.current?.classList.add('point');
  }, []);

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
      </Box>
    </header>
  );
}

export default Header;
