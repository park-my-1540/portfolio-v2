import { defineProperties } from '@vanilla-extract/sprinkles';
import { sizeVars } from './tokens/sizes.css';
import { spaceVars } from './tokens/space.css';

export const responsiveProperties = defineProperties({
  conditions: {
    mobile: { '@media': 'screen and (max-width: 768px)' },
    tablet: {
      '@media': 'screen and (min-width: 768px) and (max-width: 1024px)',
    },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'desktop',
  properties: {
    display: ['none', 'block', 'flex', 'inline', 'grid'],
    position: ['relative', 'absolute', 'static', 'sticky'],
    flexDirection: ['column', 'row'],
    width: sizeVars.width,
    height: sizeVars.height,
    gap: sizeVars.gap,
    fontSize: sizeVars.font,
    paddingTop: spaceVars,
    paddingBottom: spaceVars,
    paddingLeft: spaceVars,
    paddingRight: spaceVars,
    margin: spaceVars,
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    gridTemplateColumns: {
      full: 'repeat(24, minmax(0, 1fr))', // 1:3 비율
      oneThree: '1fr 3fr', // 1:3 비율
      single: 'repeat(1, 1fr)',
      two: 'repeat(2, 1fr)',
      wideNarrow: '20vw 1fr 15vw',
      mediumNarrow: '15vw 1fr 10vw',
    },
    gridTemplateRows: {
      auto: 'auto', // 행 크기가 내용에 따라 자동 조정
      none: 'none', // 행 정의 없음
      single: '1fr', // 하나의 행이 부모 높이를 모두 차지
      two: 'repeat(2, 1fr)', // 두 개의 행이 높이를 균등 분할
      three: 'repeat(3, 1fr)', // 세 개의 행이 높이를 균등 분할
      fill: 'repeat(auto-fill, minmax(0, 1fr))', // 가능한 모든 공간을 균등 분할
    },
    gridColumn: {
      one: 'span 6/span 6',
      three: 'span 18/span 18',
      full: '1/-1',
    },
    gridColumnGap: spaceVars,
    gridRowGap: spaceVars,
    gridAutoFlow: ['row', 'column', 'row dense', 'column dense'],
    gridAutoColumns: ['auto', 'min-content', 'max-content', '1fr'],
    gridAutoRows: ['auto', 'min-content', 'max-content', '1fr'],
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
  },
});
