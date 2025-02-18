import React from 'react';
import { Text } from '@/components/atoms/Text/Text';
import Box from '@/components/layouts/Box/Box';
import { Image } from '@/components/atoms/Image/Image';
import { listBox, content, inner } from './index.css';

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
      { name: 'react', url: '/svg/hardskill/react.png', type: 'md' },
      { name: 'next.js', url: '/svg/hardskill/next.png', type: 'md' },
      { name: 'jquery', url: '/svg/hardskill/jquery.png', type: 'md' },
      { name: 'quill', url: '/svg/hardskill/quill.png', type: 'md' },
    ],
  },
  {
    name: 'Tried',
    skill: [
      {
        name: 'vanilla-extract',
        url: '/svg/hardskill/vanilla.png',
        type: 'md',
      },
      { name: 'recoil', url: '/svg/hardskill/recoil.png', type: 'md' },
      { name: 'jotai', url: '/svg/hardskill/jotai.png', type: 'md' },
      { name: 'gsap', url: '/svg/hardskill/gsap.png', type: 'md' },
      { name: 'redux', url: '/svg/hardskill/redux.png', type: 'md' },
    ],
  },
  {
    name: 'Community',
    skill: [
      { name: 'notion', url: '/svg/hardskill/notion.svg' },
      { name: 'figma', url: '/svg/hardskill/figma.svg' },
      { name: 'zeplin', url: '/svg/hardskill/zeplin.svg' },
      { name: 'confluence', url: '/svg/hardskill/confluence.png', type: 'md' },
    ],
  },
  {
    name: 'Deployment',
    skill: [{ name: 'vercel', url: '/svg/hardskill/vercel.png', type: 'md' }],
  },
];

export default function HardSkill() {
  return (
    <Box display="flex" justify="center" width="80%">
      {skills.slice(0, -2).map((item, index) => (
        <Box key={`${index}-${item.name}`} className={content}>
          <Text sizes="large" weights="bold" color="primary">
            {item.name}
          </Text>

          <Box className={inner}>
            {item.skill.map((skill, skillIndex) => (
              <Box key={`${skill.name}-${skillIndex}`} className={listBox}>
                <Image
                  sizes={`${skill.type === 'md' ? 'rectangle' : 'small'}`}
                  radius="round"
                  url={skill.url}
                  alt={skill.name}
                />
              </Box>
            ))}
          </Box>
        </Box>
      ))}

      {/* 🔹 마지막 두 개(Community + Deployment)를 하나의 박스에 합쳐 렌더링 */}
      <Box className={content}>
        <Text sizes="large" weights="bold" color="primary">
          {skills[skills.length - 2].name} {/* Community */}
        </Text>

        <Box className={inner}>
          {skills[skills.length - 2].skill.map((skill, skillIndex) => (
            <Box key={`${skill.name}-${skillIndex}`} className={listBox}>
              <Image
                sizes={`${skill.type === 'md' ? 'rectangle' : 'small'}`}
                radius="round"
                url={skill.url}
                alt={skill.name}
              />
            </Box>
          ))}

          <Text
            sizes="large"
            weights="bold"
            style={{ whiteSpace: 'noWrap', margin: '40px 0 20px' }}
            color="primary"
          >
            {skills[skills.length - 1].name}
          </Text>

          {skills[skills.length - 1].skill.map((skill, skillIndex) => (
            <Box key={`${skill.name}-${skillIndex}`} className={listBox}>
              <Image
                sizes={`${skill.type === 'sm' ? 'small' : 'rectangle'}`}
                radius="round"
                url={skill.url}
                alt={skill.name}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
