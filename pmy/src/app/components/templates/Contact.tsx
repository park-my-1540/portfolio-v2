'use client';

import Box from '@/components/layouts/Box/Box';
import { SplitText } from '@/components/atoms/SplitText';
import { Text, TextTitle } from '@/components/atoms/Text/Text';
import { borderTop, borderBox } from '@/styles/style.css';
export default function Contact() {
  return (
    <section className="panel contact" id="contact" data-scroll-section>
      <Box className={`target`}>
        <Box
          className={`targetInner`}
          display="flex"
          direction="column"
          justify="center"
          align="center"
        >
          <Text sizes="large">parkmy722698@gmail.com</Text>
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
