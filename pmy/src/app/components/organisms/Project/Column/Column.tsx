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
import { list, columnWrap } from './column.css';
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
          <Text
            sizes="large"
            color="accent"
            className={`${paddingBox} ${borderTop}`}
            family="roboto"
          >
            {title}
          </Text>
        </Box>
        <Box className={`${paddingYNoneBox} ${borderTop}`}>
          <Text
            sizes="mediumlarge"
            className={list}
            color="accent"
            weights="bold"
          >
            {company}
          </Text>
          <Text
            sizes="smallmedium"
            className={list}
            color="accent"
            weights="bold"
          >
            Services
          </Text>
          <Text sizes="smallmedium" className={list} weights="bold">
            {service}
          </Text>
          <Text
            sizes="smallmedium"
            className={list}
            color="accent"
            weights="bold"
          >
            Duration
          </Text>
          <Text sizes="smallmedium" className={list} weights="bold">
            {duration}
          </Text>
          <Text
            sizes="smallmedium"
            className={list}
            color="accent"
            weights="bold"
          >
            Position
          </Text>
          <Text sizes="smallmedium" className={list} weights="bold">
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
          // url="http://localhost:3000/"
          onClick={() => router.push('/')}
        />
      </Box>
    </Box>
  );
}
