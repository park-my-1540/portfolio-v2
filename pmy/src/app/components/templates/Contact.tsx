'use client';

import React, { useEffect, useRef } from 'react';
import Box from '@/components/layouts/Box/Box';
import { SplitText } from '@/components/atoms/SplitText';
import { Text, TextTitle } from '@/components/atoms/Text/Text';
import { borderTopNone } from '@/styles/style.css';
export default function Contact() {
  return (
    <section className="panel contact" id="contact" data-scroll-section>
      <Box border="1px solid" margin="1.5rem 0">
        <Box padding="0.5rem 1.5rem 1.5rem">
          <TextTitle
            sizes="big"
            weights="bold"
            stroke="stroke"
            style={{ paddingBottom: '0.5rem' }}
          >
            CONTACT
          </TextTitle>

          <Box display="flex" direction="column">
            <Box border="1px solid" padding="4rem 1.5rem 1.5rem">
              <Text>parkmy@gmail.com</Text>
            </Box>
            <Box className={borderTopNone} padding="4rem 1.5rem 1.5rem">
              <SplitText
                type="same"
                splitText="NOTION"
                sizes="medium"
                weights="light"
                url="URL"
              />
            </Box>
            <Box className={borderTopNone} padding="4rem 1.5rem 1.5rem">
              <SplitText
                type="same"
                splitText="GIT"
                sizes="medium"
                weights="light"
                url="URL"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
