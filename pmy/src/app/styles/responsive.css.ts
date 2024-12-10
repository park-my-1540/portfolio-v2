import { defineProperties } from '@vanilla-extract/sprinkles';
import { sizeVars } from './tokens/sizes.css';
import { spaceVars } from './tokens/space.css';

export const responsiveProperties = defineProperties({
  conditions: {
    mobile: { '@media': 'screen and (max-width: 768px)' },
    tablet: { '@media': 'screen and (min-width: 768px) and (max-width: 1024px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'desktop',
  properties: {
    display: ['none', 'block', 'flex', 'inline', "grid"],
    width: sizeVars.width,
    height: sizeVars.height,
    padding: spaceVars,
    margin: spaceVars,
    gap: spaceVars,
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
      oneThree: '1fr 3fr', // 1:3 비율
      auto: 'auto',
      none: 'none',
      single: 'repeat(1, 1fr)',
      two: 'repeat(2, 1fr)',
      three: 'repeat(3, 1fr)',
      four: 'repeat(4, 1fr)',
      custom: 'repeat(4, 1fr)', // 추가 항목
    },
    gridTemplateRows: {
      auto: 'auto', // 행 크기가 내용에 따라 자동 조정
      none: 'none', // 행 정의 없음
      single: '1fr', // 하나의 행이 부모 높이를 모두 차지
      two: 'repeat(2, 1fr)', // 두 개의 행이 높이를 균등 분할
      three: 'repeat(3, 1fr)', // 세 개의 행이 높이를 균등 분할
      fill: 'repeat(auto-fill, minmax(0, 1fr))', // 가능한 모든 공간을 균등 분할
    },
    gridColumnGap: spaceVars,
    gridRowGap: spaceVars,
    gridAutoFlow: ['row', 'column', 'row dense', 'column dense'],
    gridAutoColumns: ['auto', 'min-content', 'max-content', '1fr'],
    gridAutoRows: ['auto', 'min-content', 'max-content', '1fr'],
  },
});