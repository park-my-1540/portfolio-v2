import React from 'react';
import Box from '@/components/layouts/Box/Box';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text';
import { SplitText } from '@/components/atoms/SplitText';
import {
  borderTopNone,
  borderBox,
  borderTop,
  paddingBox,
} from '@/styles/style.css';
import { list, columnWrap } from './column.css';
import { useRouter } from 'next/navigation';

export default function Column() {
  const router = useRouter();

  return (
    <Box
      className={`${borderTopNone} ${columnWrap}`}
      display="flex"
      direction="column"
      justify="between"
      responsive={{
        position: {
          desktop: 'sticky',
          tablet: 'relative',
          mobile: 'relative',
        },
        gridColumn: {
          desktop: 'one',
          tablet: 'full',
          mobile: 'full',
        },
      }}
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

      <Box
        className={`${paddingBox}`}
        responsive={{
          display: {
            desktop: 'block',
            tablet: 'block',
            mobile: 'none',
          },
        }}
      >
        <Text>Back to</Text>
        <SplitText
          splitText="Home"
          sizes="largeX2"
          // url="http://localhost:3000/"
          onClick={() => router.push('/')}
        />
      </Box>
    </Box>
  );
}
