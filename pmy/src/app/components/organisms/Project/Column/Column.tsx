import React from 'react';
import Box from '@/components/layouts/Box/Box';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text';
import { SplitText } from '@/components/atoms/SplitText';
import { Filtered } from '@/types/common';
import {
  borderTopNone,
  borderTop,
  paddingBox,
  paddingYNoneBox,
} from '@/styles/style.css';
import { list, columnWrap } from './index.css';
import { useRouter } from 'next/navigation';
export default function Column({ filtered }: { filtered: Filtered[] }) {
  const router = useRouter();
  const { duration, img, position, service, title, company } = filtered[0];
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
            url={img}
            radius="default"
            sizes="card"
          />
          <Text sizes="large" className={`${paddingBox} ${borderTop}`}>
            {title}
          </Text>
        </Box>
        <Box className={`${paddingYNoneBox} ${borderTop}`}>
          <Text sizes="mediumlarge" className={list}>
            {company}
          </Text>
          <Text sizes="smallmedium" className={list}>
            Services
          </Text>
          <Text sizes="smallmedium" className={list}>
            {service}
          </Text>
          <Text sizes="smallmedium" className={list}>
            Duration
          </Text>
          <Text sizes="smallmedium" className={list}>
            {duration}
          </Text>
          <Text sizes="smallmedium" className={list}>
            Position
          </Text>
          <Text sizes="smallmedium" className={list}>
            {position}
          </Text>
        </Box>
      </Box>

      <Box
        className={`${paddingYNoneBox}`}
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
          onClick={() => router.push('/')}
        />
      </Box>
    </Box>
  );
}
