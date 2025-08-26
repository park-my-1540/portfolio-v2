import Image from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text';
import Box from '@/components/layouts/Box/Box';
import {
  altTooltip,
  content,
  desktopImg,
  imgStyle,
  inner,
  listBox,
  mobileImg,
  rectangle,
  small,
  wrapper,
} from './index.css';

const skills = [
  {
    name: 'Familiar',
    skill: [
      { name: 'html', url: '/svg/hardskill/html.svg' },
      { name: 'css', url: '/svg/hardskill/css.svg' },
      { name: 'scss', url: '/svg/hardskill/scss.svg' },
      { name: 'javascript', url: '/svg/hardskill/javascript.svg' },
      { name: 'typescript', url: '/svg/hardskill/typescript.svg' },
      { name: 'angular', url: '/svg/hardskill/angularjs.svg' },
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
    name: 'Used in project',
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
      {
        name: 'supabase',
        url: '/svg/hardskill/supabase2.webp',
        type: 'sm',
      },
      {
        name: 'remix',
        url: '/svg/hardskill/remix2.png',
        type: 'sm',
      },
      {
        name: 'shadcn',
        url: '/svg/hardskill/shadcn2.png',
        type: 'sm',
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
        type: 'sm',
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
  const { type, url, name, mobile } = skill;
  const isRectangle = type === 'md';

  return (
    <Box className={`${listBox} ${wrapper}`}>
      {isRectangle ? (
        <>
          <Image
            sizes="rectangle"
            className={`${desktopImg} ${rectangle} ${imgStyle}`}
            radius="round"
            url={url}
            alt={name}
          />
          <Image sizes="small" className={`${mobileImg} ${small} ${imgStyle}`} radius="round" url={mobile} alt={name} />
          <span className={altTooltip}>{name}</span>
        </>
      ) : (
        <>
          <Image sizes="small" className={`${small} ${imgStyle}`} radius="round" url={url} alt={name} />
          <span className={altTooltip}>{name}</span>
        </>
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

          <Text sizes="large" weights="bold" style={{ whiteSpace: 'nowrap', margin: '40px 0 20px' }} color="primary">
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
