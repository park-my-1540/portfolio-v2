'use client';

import Box from '@/components/layouts/Box/Box';
import { SplitText } from '@/components/atoms/SplitText';
import { Text, TextTitle } from '@/components/atoms/Text/Text';
import { borderTop, borderBox } from '@/styles/style.css';
import { vars } from '@/styles/common/createThemeContract.css';
export default function Contact() {
  return (
    <section className="panel contact" id="contact" data-scroll-section>
      <Box
        className="target"
        marginTop={200}
        style={{ transform: 'scale(1.4, 1.2)' }}
      >
        <Box
          display="flex"
          direction="column"
          justify="center"
          align="center"
          marginLeft="auto"
          marginRight="auto"
          padding="var(--padding-container)"
          borderRadius="50px"
          width="80vw"
          height="60vh"
          backgroundColor={vars.color.point}
        >
          <Text sizes="large" color="accent">
            parkmy722698@gmail.com
          </Text>
          <Box display="flex" direction="row" marginTop={50}>
            <SplitText
              type="same"
              splitText="GIT"
              sizes="medium"
              weights="light"
              url="URL"
            />
            <SplitText
              type="same"
              splitText="NOTION"
              sizes="medium"
              weights="light"
              url="URL"
            />
          </Box>
        </Box>
      </Box>
    </section>
  );
}
