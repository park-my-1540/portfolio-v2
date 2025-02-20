import React, { useRef, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Box from '@/components/layouts/Box/Box';
import { Toggle } from '@/components/atoms/toggle/toggle';
import { header, inner, menuBtn, sub } from './index.css';
import { Position } from '@/components/layouts/PositionContainer/Position';
import { useAtomValue } from 'jotai';
import { modalState } from '@/jotai/modalAtom';
import { SplitText } from '@/components/atoms/SplitText';
import { TextLink } from '@/components/atoms/Text/Text';
import Menu from '@/components/molecules/Menu';
import * as modal from '@/utils/modal';
import * as theme from '@/utils/theme';

const MenuToggle = () => {
  const modalOpen = useAtomValue(modalState);
  const onClickMenu = () => {
    modalOpen ? modal.closeModal() : modal.openModal();
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
  const changeTheme = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const mode = event.target.checked ? 'light' : 'dark';
      theme.setTheme(mode);
    },
    [],
  );

  return <Toggle changeTheme={changeTheme} />;
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
            desktop: 'mediumLargeX2',
            tablet: 'large',
            mobile: 'medium',
          },
        }}
      >
        <Box
          display="flex"
          direction="row"
          align="center"
          justify="between"
          width="100%"
        >
          <SplitText
            splitText="Mee Young"
            sizes="medium"
            weights="bold"
            type="same"
          />
          <ThemeToggle />
          <MenuToggle />
        </Box>
        <Menu />
      </Box>
    </Box>
  );
}

export default Header;
