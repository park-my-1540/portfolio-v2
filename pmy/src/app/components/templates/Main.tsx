'use client';

import React, { useRef } from 'react';
import Box from '@/components/layouts/Box/Box';
import Matter from '@/components/organisms/Main/Matter/MatterCanvas';
import ScrollArrow from '@/components/molecules/ScrollArrow';
import Line from '@/components/atoms/line';
import { Text } from '@/components/atoms/Text/Text';
import { Position } from '../layouts/PositionContainer/Position';

export default function Main() {
  const svgRef = useRef<HTMLDivElement>(null);
  return (
    <section data-scroll-section id="main">
      <Box className="main">
        <Box height="100vh">
          <Line />
          <Position position="absolute" top="20%" left={0} right={0}>
            <Box
              width="full"
              height="auto"
              paddingTop={20}
              borderTop="2px solid"
              responsive={{
                margin: {
                  desktop: 'large',
                  tablet: 'large',
                  mobile: 'xLarge',
                },
              }}
            >
              <Text sizes="medium">
                FRONT-END DEVELOPER
                <br />
                FOCUSED ON UI INTERACTION <br />
                ACCESSIBILITY / COMPONENT SYSTEM <br />
                FROM DESIGN TO FUNCTION
              </Text>
            </Box>
          </Position>
          <Box position="relative" width="100%" height="100%" ref={svgRef}>
            <Matter />
          </Box>
          <ScrollArrow />
        </Box>
      </Box>
    </section>
  );
}
