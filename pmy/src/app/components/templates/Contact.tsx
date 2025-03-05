import { useCallback } from 'react';
import Box from '@/components/layouts/Box/Box';
import { Text, TextLink } from '@/components/atoms/Text/Text';
import { arrowLink, iconArrow, bgBtn } from '@/styles/style.css';
import * as url from '@/constants/routes';
import { colors } from '@/styles/tokens/colors.css';
import * as cursor from '@/utils/cursor';

export default function Contact() {
  let timer;
  const copyUrl = useCallback(() => {
    const temp = document.createElement('textarea');
    temp.value = 'parkmy722698@gmail.com';
    document.body.appendChild(temp);

    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
    cursor.set('copyEnd');

    clearTimeout(timer);
    timer = setTimeout(() => {
      cursor.set('copy');
    }, 500);
  }, []);

  return (
    <section className="panel" id="contact" data-scroll-section>
      <Box height="80vh">
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
          backgroundColor={colors.pink}
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
          <TextLink
            sizes="largeX3"
            wordBreak="breakWord"
            color="accent"
            weights="bold"
            decoration="underline"
            onMouseEnter={() => cursor.set('copy')}
            onMouseLeave={() => cursor.set(null)}
            style={{ padding: '0 3rem' }}
            onClick={copyUrl}
          >
            parkmy722698@gmail.com
          </TextLink>
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
