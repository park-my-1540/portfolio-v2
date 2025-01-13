import { useRef } from 'react';
import { wrapper, menuItem, menuInner } from './style.css';
import Box from '@/components/layouts/Box/Box';
import { Text } from '@/components/atoms/Text/Text';
import { SplitText } from '@/components/atoms/SplitText';

import LocomotiveScroll from 'locomotive-scroll';
import { useAtomValue } from 'jotai';
import { viewState } from '@/jotai/viewAtom';

function MenuItem({ menu, moveToSectionPosition }) {
  const { item, desc, link } = menu;

  return (
    <Box className={menuItem}>
      <Box
        className={menuInner}
        responsive={{
          padding: {
            desktop: 'mediumLarge',
            tablet: 'mediumLarge',
            mobile: 'small',
          },
        }}
      >
        {desc && (
          <Text sizes="small" weights="light">
            {desc}
          </Text>
        )}
        {link &&
          link.map((item) => (
            <SplitText
              type="same"
              splitText={item.item}
              sizes="small"
              weights="light"
              url={item.url}
            />
          ))}
      </Box>
      <Box
        height="5rem"
        borderTop="1px solid"
        responsive={{
          padding: {
            desktop: 'large',
            tablet: 'large',
            mobile: 'small',
          },
        }}
      >
        <SplitText
          type="same"
          splitText={item}
          sizes="large"
          weights="bold"
          onClick={() => moveToSectionPosition(`#${item}`)}
        />
      </Box>
    </Box>
  );
}

export default function Menu() {
  const { locoScroll } = useAtomValue(viewState);
  const scrollRef = useRef<LocomotiveScroll | null>(null);

  const menuList = [
    {
      item: 'main',
      desc: 'parkmys portfolio',
    },
    {
      item: 'about',
      desc: 'about my skrr',
    },
    {
      item: 'project',
      link: [
        {
          item: 'jandi',
          url: 'http://localhost:3000/project/JDI',
        },
        {
          item: 'adcapsule',
          url: 'http://localhost:3000/project/ADC',
        },
      ],
    },
    {
      item: 'contact',
      link: [
        {
          item: 'git',
          url: 'url',
        },
        {
          item: 'notion',
          url: 'url',
        },
      ],
    },
  ];

  if (locoScroll) {
    scrollRef.current = locoScroll;
  }

  const getScrollPositionOfElement = (elementSelector: string) => {
    const element = document.querySelector(elementSelector);
    if (!element || !scrollRef.current) return;

    const scrollInstance = scrollRef.current?.scroll.instance;
    const { top } = element.getBoundingClientRect();
    return top + scrollInstance.scroll.y;
  };
  const moveToSectionPosition = (className: string) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo(getScrollPositionOfElement(className), {
      duration: 0,
    });
  };

  return (
    <Box
      className={wrapper}
      display="flex"
      gap="small"
      responsive={{
        flexDirection: {
          desktop: 'row',
          tablet: 'row',
          mobile: 'column',
        },
        paddingX: {
          desktop: 'large',
          tablet: 'large',
          mobile: 'xLarge',
        },
      }}
    >
      {menuList.map((item, index) => {
        return (
          <MenuItem
            menu={item}
            key={index}
            moveToSectionPosition={moveToSectionPosition}
          />
        );
      })}
    </Box>
  );
}
