import { useRef } from 'react';
import { wrapper, menuItem, menuInner } from './style.css';
import Box from '@/components/layouts/Box/Box';
import { Text } from '@/components/atoms/Text/Text';
import { SplitText } from '@/components/atoms/SplitText';

import LocomotiveScroll from 'locomotive-scroll';
import { useAtomValue } from 'jotai';
import { viewState } from '@/jotai/viewAtom';
import { borderTop } from '@/styles/style.css';

function MenuItem({ menu, moveToSectionPosition }) {
  const { item, desc, link } = menu;

  return (
    <Box className={`${menuItem} menu`}>
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
          <Text sizes="smallmedium" weights="light">
            {desc}
          </Text>
        )}
        {link &&
          link.map((item, index) => (
            <SplitText
              key={index}
              type="same"
              splitText={item.item}
              sizes="smallmedium"
              weights="light"
              url={item.url}
            />
          ))}
      </Box>
      <Box
        height="5rem"
        className={borderTop}
        responsive={{
          padding: {
            desktop: 'large',
            tablet: 'large',
            mobile: 'small',
          },
        }}
      >
        <SplitText
          color="tertiary"
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
      className={`menuWrap ${wrapper}`}
      gap="small"
      responsive={{
        flexDirection: {
          desktop: 'row',
          tablet: 'row',
          mobile: 'column',
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
