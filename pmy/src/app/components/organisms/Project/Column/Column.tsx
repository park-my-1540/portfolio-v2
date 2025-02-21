import React from 'react';
import Box from '@/components/layouts/Box/Box';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text';
import { SplitText } from '@/components/atoms/SplitText';
import { Filtered } from '@/types/common';
import { borderTop, borderBox } from '@/styles/style.css';
import { itemWrap, titleWrap } from './index.css';
import { list, columnWrap } from './index.css';
import { useRouter } from 'next/navigation';
export default function Column({ filtered }: { filtered: Filtered[] }) {
  const router = useRouter();
  const { duration, img, position, service, title, company } = filtered[0];
  return (
    <Box
      className={`${borderBox} ${columnWrap}`}
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
          <Image url={img} radius="default" sizes="card" cover="cover" />
          <Text sizes="large" className={`${titleWrap} ${borderTop}`}>
            {title}
          </Text>
        </Box>
        <Box className={`${itemWrap} ${borderTop}`}>
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
        className={`${itemWrap}`}
        responsive={{
          display: {
            desktop: 'block',
            tablet: 'none',
            mobile: 'none',
          },
        }}
      >
        <Text>Back to</Text>
        <SplitText
          splitText="WORKS"
          sizes="largeX2"
          onClick={() => router.back()}
        />
      </Box>
    </Box>
  );
}
