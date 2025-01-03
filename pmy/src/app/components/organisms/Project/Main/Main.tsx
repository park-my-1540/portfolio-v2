import React from 'react';
import Box from '@/components/layouts/Box/Box';
import { Image } from '@/components/atoms/Image/Image';
import { Text, TextTitle } from '@/components/atoms/Text/Text';
import { borderTop, borderTopNone, paddingBox } from '@/styles/style.css';
import SwiperComp from '@/components/organisms/Swiper/SwiperComp';
import renderContent from '@/utils/service/filter';
import ReactJsxParser from 'react-jsx-parser';
import { pageListProps } from '@/types/common';

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

export default function Main({ list }: pageListProps) {
  return (
    <>
      <Box
        className={borderTop}
        responsive={{
          gridColumn: {
            desktop: 'three',
            tablet: 'full',
            mobile: 'full',
          },
        }}
      >
        {/* <Text>어허이보리야</Text> */}
        {list.map((item, index) => {
          return (
            <Box key={index} className={borderTopNone}>
              {StringToComponent(renderContent(item.blocks))}
            </Box>
          );
        })}
        {/* <Box>
          <Box
            width="100%"
            height="500px"
            className={borderTopNone}
            borderTop="1px solid"
          >
            <Image
              url="./img/projects/jandi/jandi.jpg"
              radius="default"
              sizes="full"
            />
          </Box>
          <Text
            sizes="mediumlarge"
            weights="light"
            className={`${borderTopNone} ${paddingBox}`}
          >
            Exploration sonore
          </Text>
        </Box>
        <Text sizes="large" className={`${borderTopNone} ${paddingBox}`}>
          Jandi
        </Text>
        <Box
          className={`${borderTopNone} ${paddingBox}`}
          paddingBottom="5rem"
          display="grid"
          gap="large"
          responsive={{
            gridTemplateColumns: {
              desktop: 'two',
              tablet: 'two',
              mobile: 'single',
            },
            gridTemplateRows: {
              desktop: 'single',
              tablet: 'single',
              mobile: 'single',
            },
          }}
        >
          <TextTitle>
            Bisous Production propose un film abstrait puissant et délicat, où
            des matières cristallines et liquides s’animent pour créer des
            images captivantes, alliant réalisme et poésie visuelle.
          </TextTitle>
          <Text>
            Mooders a relevé le défi de traduire cette richesse visuelle en une
            expérience sonore immersive. Nous avons conçu un univers sonore
            jouant sur la force et la subtilité, harmonisant piano éthéré,
            distorsions puissantes et textures aquatiques pour refléter les
            contrastes visuels du film.
          </Text>
        </Box>

        {/* phase2 */}
        {/* <Box>
          <Box width="100%" height="500px" className={borderTopNone}>
            <SwiperComp />
          </Box>
          <Text
            sizes="mediumlarge"
            weights="light"
            className={`${borderTopNone} ${paddingBox}`}
          >
            Exploration sonore
          </Text>
          <Box
            className={`${borderTopNone} ${paddingBox}`}
            paddingBottom="5rem"
            display="grid"
            gap="large"
            responsive={{
              gridTemplateColumns: {
                desktop: 'two',
                tablet: 'two',
                mobile: 'single',
              },
              gridTemplateRows: {
                desktop: 'single',
                tablet: 'single',
                mobile: 'single',
              },
            }}
          >
            <Text>
              Bisous Production propose un film abstrait puissant et délicat, où
              des matières cristallines et liquides s’animent pour créer des
              images captivantes, alliant réalisme et poésie visuelle.
            </Text>
            <Text>
              Mooders a relevé le défi de traduire cette richesse visuelle en
              une expérience sonore immersive. Nous avons conçu un univers
              sonore jouant sur la force et la subtilité, harmonisant piano
              éthéré, distorsions puissantes et textures aquatiques pour
              refléter les contrastes visuels du film.
            </Text>
          </Box>
        </Box> */}
      </Box>
    </>
  );
}
