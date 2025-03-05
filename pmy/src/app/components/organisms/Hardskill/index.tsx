import React from 'react';
import { Text } from '@/components/atoms/Text/Text';
import Box from '@/components/layouts/Box/Box';
import Image from '@/components/atoms/Image/Image';
import {
  listBox,
  content,
  inner,
  rectangle,
  small,
  desktopImg,
  mobileImg,
} from './index.css';

const skills = [
  {
    name: 'Familiar',
    skill: [
      { name: 'angular', url: '/svg/hardskill/angularjs.svg' },
      { name: 'html', url: '/svg/hardskill/html.svg' },
      { name: 'css', url: '/svg/hardskill/css.svg' },
      { name: 'scss', url: '/svg/hardskill/scss.svg' },
      { name: 'javascript', url: '/svg/hardskill/javascript.svg' },
      { name: 'typescript', url: '/svg/hardskill/typescript.svg' },
      {
        name: 'react',
        url: '/svg/hardskill/react.png',
        type: 'md',
        mobile: '/svg/hardskill/react2.svg',
      },
      {
        name: 'next.js',
        url: '/svg/hardskill/next.png',
        type: 'md',
        mobile: '/svg/hardskill/nextjs2.svg',
      },
      {
        name: 'jquery',
        url: '/svg/hardskill/jquery.png',
        type: 'md',
        mobile: '/svg/hardskill/jquery.svg',
      },
      {
        name: 'quill',
        url: '/svg/hardskill/quill.png',
        type: 'md',
        mobile: '/svg/hardskill/quill2.png',
      },
    ],
  },
  {
    name: 'Tried',
    skill: [
      {
        name: 'recoil',
        url: '/svg/hardskill/recoil.png',
        type: 'md',
        mobile: '/svg/hardskill/recoil2.svg',
      },
      {
        name: 'jotai',
        url: '/svg/hardskill/jotai.png',
        type: 'md',
        mobile: '/svg/hardskill/jotai2.png',
      },
      {
        name: 'redux',
        url: '/svg/hardskill/redux.png',
        type: 'md',
        mobile: '/svg/hardskill/redux2.svg',
      },
      {
        name: 'vanilla-extract',
        url: '/svg/hardskill/vanilla.png',
        type: 'md',
        mobile: '/svg/hardskill/vanilla2.svg',
      },
      {
        name: 'gsap',
        url: '/svg/hardskill/gsap.png',
        type: 'md',
        mobile: '/svg/hardskill/gsap2.svg',
      },
    ],
  },
  {
    name: 'Community',
    skill: [
      { name: 'notion', url: '/svg/hardskill/notion.svg' },
      { name: 'figma', url: '/svg/hardskill/figma.svg' },
      { name: 'zeplin', url: '/svg/hardskill/zeplin.svg' },
      {
        name: 'confluence',
        url: '/svg/hardskill/confluence.png',
        type: 'md',
        mobile: '/svg/hardskill/confluence2.svg',
      },
    ],
  },
  {
    name: 'Deployment',
    skill: [
      {
        name: 'vercel',
        url: '/svg/hardskill/vercel.png',
        type: 'md',
        mobile: '/svg/hardskill/vercel2.svg',
      },
    ],
  },
];

function IconBox({ skill }) {
  const {
    type, url, name, mobile
  } = skill;
  const isRectangle = type === 'md';

  return (
    <Box className={listBox}>
      {isRectangle ? (
        <>
          <Image
            sizes="rectangle"
            className={`${desktopImg} ${rectangle}`}
            radius="round"
            url={url}
            alt={name}
          />
          <Image
            sizes="small"
            className={`${mobileImg} ${small}`}
            radius="round"
            url={mobile}
            alt={name}
          />
        </>
      ) : (
        <Image
          sizes="small"
          className={small}
          radius="round"
          url={url}
          alt={name}
        />
      )}
    </Box>
  );
}

export default function HardSkill() {
  return (
    <Box
      display="flex"
      justify="center"
      responsive={{
        width: {
          desktop: 'w80',
          tablet: 'full',
          mobile: 'full',
        },
        flexDirection: {
          desktop: 'row',
          tablet: 'row',
          mobile: 'column',
        },
      }}
    >
      {skills.slice(0, -2).map((item, index) => (
        <Box key={`${index}-${item.name}`} className={`${content} _skillBox`}>
          <Text sizes="large" weights="bold" color="primary">
            {item.name}
          </Text>

          <Box className={inner}>
            {item.skill.map((skill, skillIndex) => (
              <IconBox skill={skill} key={`${skill.name}-${skillIndex}`} />
            ))}
          </Box>
        </Box>
      ))}

      <Box className={`${content} _skillBox`}>
        <Text sizes="large" weights="bold" color="primary">
          {skills[skills.length - 2].name} {/* Community */}
        </Text>

        <Box className={inner}>
          {skills[skills.length - 2].skill.map((skill, skillIndex) => (
            <IconBox skill={skill} key={`${skill.name}-${skillIndex}`} />
          ))}

          <Text
            sizes="large"
            weights="bold"
            style={{ whiteSpace: 'nowrap', margin: '40px 0 20px' }}
            color="primary"
          >
            {skills[skills.length - 1].name}
          </Text>

          {skills[skills.length - 1].skill.map((skill, skillIndex) => (
            <IconBox skill={skill} key={`${skill.name}-${skillIndex}`} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
