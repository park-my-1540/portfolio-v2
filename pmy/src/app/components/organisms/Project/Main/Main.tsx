import React from 'react';
import Box from '@/components/layouts/Box/Box';
import { Image } from '@/components/atoms/Image/Image';
import { Text, TextTitle } from '@/components/atoms/Text/Text';
import { borderTop, borderTopNone } from '@/styles/style.css';
import SwiperComp from '@/components/organisms/Swiper/SwiperComp';
import renderContent from '@/service/content/renderService';
import ReactJsxParser from 'react-jsx-parser';
import { PageWithBlocks } from '@/types/common';

function StringToComponent(componentStringArray: string) {
  const jsxContent = componentStringArray;

  return (
    <ReactJsxParser
      jsx={jsxContent}
      components={{
        SwiperComp: SwiperComp as React.ComponentType<any>,
        Box: Box as React.ComponentType<any>,
        Text: Text as React.ComponentType<any>,
        TextTitle: TextTitle as React.ComponentType<any>,
        Image: Image as React.ComponentType<any>,
      }}
    />
  );
}

export default function Main({ blocks }: { blocks: PageWithBlocks[] }) {
  return (
    <>
      <Box
        responsive={{
          gridColumn: {
            desktop: 'three',
            tablet: 'full',
            mobile: 'full',
          },
          width: {
            desktop: 'fullPlusGap',
            tablet: 'full',
            mobile: 'full',
          },
        }}
      >
        <Box className={borderTopNone}>
          {blocks.map((block, index) => (
            <React.Fragment key={index}>
              {StringToComponent(renderContent(block))}
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </>
  );
}
