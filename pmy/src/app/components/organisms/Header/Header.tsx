import React from 'react';
import { Text } from '@/components/atoms/Text/Text';
import Box from '@/components/layouts/Box/Box';
import { header } from './header.css';
import { Position } from '@/components/layouts/Position/Position';
export function Header() {
  return (
    <header className={header}>
      <Box
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
              width="15"
              height={15}
              border="1px solid"
              borderRadius="50%"
              backgroundColor="red"
            ></Box>
            <Box
              display="inline-block"
              width="15"
              height={15}
              marginLeft="-3px"
              backgroundColor="#000"
              borderRadius="50%"
            ></Box>
          </Position>
        </Box>
      </Box>
    </header>
  );
}

export default Header;
