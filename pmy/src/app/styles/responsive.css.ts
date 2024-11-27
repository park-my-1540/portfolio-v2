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
    display: ['none', 'block', 'flex', 'inline'],
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
  },
});
