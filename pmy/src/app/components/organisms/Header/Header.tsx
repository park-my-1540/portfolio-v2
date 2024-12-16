import React, { useCallback } from 'react';
import { Text } from '@/components/atoms/Text/Text';
import Box from '@/components/layouts/Box/Box';
import { header, inner } from './header.css';
import { Position } from '@/components/layouts/Position/Position';

import { useSetAtom, useAtomValue } from 'jotai';
import { themeState } from '@/jotai/themeAtom';
import { ThemeMode } from '@/types/styles';

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

  return (
    <header className={header}>
      <Box
        className={inner}
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
          <Text sizes="small">Mee young</Text>
          <Position position="absolute" left="50%">
            <Box
              display="inline-block"
              width="30"
              height={30}
              border="1px solid"
              borderRadius="50%"
              backgroundColor="red"
            >
              <button onClick={() => changeTheme('light')}>dd</button>
            </Box>
            <Box
              display="inline-block"
              width="30"
              height={30}
              marginLeft="-10px"
              backgroundColor="#000"
              borderRadius="50%"
            >
              <button onClick={() => changeTheme('dark')}>sd</button>
            </Box>
          </Position>
        </Box>
      </Box>
    </header>
  );
}

export default Header;
