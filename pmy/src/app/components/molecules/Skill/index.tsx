import React, { useState, useRef, useCallback } from 'react';
import Box from '@/components/layouts/Box/Box';
import { wrap, btn, line } from './index.css';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text';
import { paddingBox } from '@/styles/style.css';
import * as animate from '@/utils/animate';

export default function Skill() {
  const toggleRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);

  const onClick = () => {
    setOpen((prevState) => !prevState);
    isOpen ? animate.openToggle(toggleRef) : animate.closeToggle(toggleRef);
  };

  return (
    <Box className={wrap} ref={toggleRef}>
      <Box position="relative" className={paddingBox}>
        <button className={btn} onClick={onClick}>
          <span className={line}></span>
          <span className={line}></span>
          <span className={line}></span>
        </button>
        <Text color="accent" sizes="mediumlarge" weights="bold">
          Tool Stack
        </Text>
        <Box
          paddingTop="1.5rem"
          position="relative"
          width="25rem"
          height="10rem"
          display="flex"
          gap="medium"
        >
          <Image sizes="small" radius="round" url="./svg/hardskill/CSS3.svg" />
          <Image sizes="small" radius="round" url="./svg/hardskill/HTML5.svg" />
          <Image
            sizes="small"
            radius="round"
            url="./svg/hardskill/javascript.svg"
          />
          <Image
            sizes="small"
            radius="round"
            url="./svg/hardskill/typescript.svg"
          />
          <Image sizes="small" radius="round" url="./svg/hardskill/react.svg" />
          <Image
            sizes="small"
            radius="round"
            url="./svg/hardskill/angularjs.svg"
          />
        </Box>
      </Box>
    </Box>
  );
}
