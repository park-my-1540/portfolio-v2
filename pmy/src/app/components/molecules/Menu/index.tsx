import { useRef } from 'react';
import { wrapper, menuItem, menuInner } from './index.css';
import Box from '@/components/layouts/Box/Box';
import { Text } from '@/components/atoms/Text/Text';
import { SplitText } from '@/components/atoms/SplitText';
import * as url from '@/constants/constants';
import LocomotiveScroll from 'locomotive-scroll';
import { useAtomValue } from 'jotai';
import { locoScrollState } from '@/jotai/locoScrollAtom';
import { borderTop } from '@/styles/style.css';

function MenuItem({ menu, moveToSectionPosition }) {
  const { item, desc, link } = menu;

  return (
    <Box
      className={`${menuItem} menu`}
      responsive={{
        width: {
          desktop: 'large',
          tablet: 'large',
          mobile: 'full',
        },
      }}
    >
      <Box
        className={menuInner}
        responsive={{
          padding: {
            desktop: 'mediumLarge',
            tablet: 'mediumLarge',
            mobile: 'mediumLargeX2',
          },
          display: {
            desktop: 'block',
            tablet: 'block',
            mobile: 'none',
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
        className={borderTop}
        display="flex"
        align="end"
        responsive={{
          padding: {
            desktop: 'mediumLarge',
            tablet: 'mediumLarge',
            mobile: 'mediumLargeX2',
          },
          height: {
            desktop: 'small',
            tablet: 'small',
            mobile: 'large',
          },
        }}
      >
        <SplitText
          responsive={{
            fontSize: {
              desktop: 'small',
              tablet: 'small',
              mobile: 'large',
            },
          }}
          color="tertiary"
          type="same"
          splitText={item}
          weights="bold"
          onClick={() => moveToSectionPosition(`#${item}`)}
        />
      </Box>
    </Box>
  );
}

export default function Menu() {
  const locoScroll = useAtomValue(locoScrollState);
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
          url: url.ROUTES.PROJECTS_JDI,
        },
        {
          item: 'adcapsule',
          url: url.ROUTES.PROJECTS_ADC,
        },
      ],
    },
    {
      item: 'contact',
      link: [
        {
          item: 'git',
          url: url.GIT,
        },
        {
          item: 'notion',
          url: url.NOTION,
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
      responsive={{
        gap: {
          desktop: 'small',
          tablet: 'small',
          mobile: 'none',
        },
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
