import React, { useEffect } from 'react';
import Splitting from 'splitting';
import Box from '@/components/layouts/Box/Box';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text';
import {
  borderTopNone,
  borderBox,
  borderTop,
  paddingBox,
} from '@/styles/style.css';
import { list, home, text, columnWrap } from './column.css';
import './animate.css';

export default function Column() {
  useEffect(() => {
    Splitting();
  }, []);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/splitting/dist/splitting.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/splitting/dist/splitting-cells.css"
      />
      <script src="https://unpkg.com/splitting/dist/splitting.min.js"></script>
      <Box
        className={`${borderTopNone} ${columnWrap}`}
        display="flex"
        direction="column"
        justify="between"
      >
        <Box>
          <Box>
            <Image
              className={borderTop}
              url="./img/projects/jandi/jandi.jpg"
              radius="default"
              sizes="card"
            />
            <Text sizes="large" className={`${paddingBox} ${borderTop}`}>
              Jandi
            </Text>
          </Box>
          <Box className={`${paddingBox} ${borderTop}`}>
            <Text sizes="mediumlarge" className={list}>
              DISTORTED BEAUTY
            </Text>
            <Text sizes="small" color="tertiary" className={list}>
              Services
            </Text>
            <Text sizes="small" className={list}>
              SOUND DESIGN
            </Text>
            <Text sizes="small" color="tertiary" className={list}>
              CREDITS
            </Text>
            <Text sizes="small" className={list}>
              DA & 3D - Bisous productions
            </Text>
          </Box>
        </Box>

        <Box className={`${paddingBox}`}>
          <Text>Back to</Text>
          <a href="#" className={`${home} home`}>
            <span className={`${text} text`} data-splitting>
              Home
            </span>
            <span className={`${text} text`} data-splitting>
              Home
            </span>
          </a>
        </Box>

        {/* back to Works */}
      </Box>
    </>
  );
}
