import { useRef, useCallback } from 'react';
import { wrapper, menuItem, menuInner } from './index.css';
import Box from '@/components/layouts/Box/Box';
import { Text } from '@/components/atoms/Text/Text';
import { SplitText } from '@/components/atoms/SplitText';
import * as url from '@/constants/constants';
import LocomotiveScroll from 'locomotive-scroll';
import { useAtomValue } from 'jotai';
import { locoScrollState } from '@/jotai/locoScrollAtom';
import { borderTop } from '@/styles/style.css';
import * as modal from '@/utils/modal';

export interface SubMenu {
  name: string;
  path: string;
}
export interface MainMenu {
  name: string;
  desc?: string;
  path?: string;
  subMenus?: SubMenu[];
}

export type MenuItem = MainMenu | SubMenu;

const menuList: MenuItem[] = [
  {
    name: 'main',
    desc: "meeyoung's portfolio",
  },
  {
    name: 'about',
    desc: 'About Me',
  },
  {
    name: 'project',
    subMenus: [
      { name: 'Jandi', path: url.ROUTES.PROJECTS_JDI },
      { name: 'Adcapsule', path: url.ROUTES.PROJECTS_ADC },
    ],
  },
  {
    name: 'contact',
    subMenus: [
      { name: 'Git', path: url.GIT },
      { name: 'Notion', path: url.NOTION },
    ],
  },
];

function MenuItem({ item, moveToSectionPosition }) {
  const { name, desc, subMenus } = item;

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
        {subMenus &&
          subMenus.map((item, index) => (
            <SplitText
              key={`${item.name}-${index}`}
              type="same"
              splitText={item.name}
              sizes="smallmedium"
              weights="light"
              url={item.path}
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
          splitText={name}
          weights="bold"
          onClick={() => moveToSectionPosition(`#${name}`)}
        />
      </Box>
    </Box>
  );
}

export default function Menu() {
  const locoScroll = useAtomValue(locoScrollState);
  const scrollRef = useRef<LocomotiveScroll | null>(null);

  if (locoScroll) {
    scrollRef.current = locoScroll;
  }

  const getScrollPositionOfElement = useCallback((elementSelector: string) => {
    const element = document.querySelector(elementSelector);
    if (!element || !scrollRef.current) return;
    const scrollInstance = scrollRef.current?.scroll.instance;
    const { top } = element.getBoundingClientRect();
    return top + scrollInstance.scroll.y;
  }, []);
  const moveToSectionPosition = useCallback((className: string) => {
    if (!scrollRef.current) return;
    const position = getScrollPositionOfElement(className);
    scrollRef.current.scrollTo(position, { duration: 0 });

    modal.closeModal();
  }, []);

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
            key={`${index}-${item}`}
            item={item}
            moveToSectionPosition={moveToSectionPosition}
          />
        );
      })}
    </Box>
  );
}
