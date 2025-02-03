'use client';

import Box from '@/components/layouts/Box/Box';
import { Text, TextLink } from '@/components/atoms/Text/Text';
import { arrowLink, iconArrow, bgBtn } from '@/styles/style.css';
import { vars } from '@/styles/common/createThemeContract.css';
import * as url from '@/constants';

export default function Contact() {
  return (
    <section className="panel" id="contact" data-scroll-section>
      <Box>
        <Box
          className="target"
          display="flex"
          direction="column"
          justify="around"
          align="center"
          marginLeft="auto"
          marginRight="auto"
          borderRadius="60px"
          width="100vw"
          height="70vh"
          backgroundColor={vars.color.point}
        >
          <Text
            sizes="mediumlarge"
            color="point"
            weights="bold"
            bgColor="accent"
            className={bgBtn}
          >
            CONTACT
          </Text>
          <Text
            sizes="largeX3"
            color="accent"
            weights="bold"
            decoration="underline"
            style={{ padding: '0 3rem' }}
          >
            parkmy722698@gmail.com
          </Text>
          <Box display="flex" direction="row">
            <TextLink
              sizes="mediumlarge"
              url={url.GIT}
              color="accent"
              className={arrowLink}
            >
              GIT <span className={iconArrow}></span>
            </TextLink>
            <TextLink
              sizes="mediumlarge"
              url={url.NOTION}
              color="accent"
              className={arrowLink}
            >
              NOTION <span className={iconArrow}></span>
            </TextLink>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
