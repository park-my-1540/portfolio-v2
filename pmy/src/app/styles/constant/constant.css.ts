import {
  createThemeContract,
  style,
  assignVars,
  createGlobalTheme,
} from '@vanilla-extract/css';
import { spaceVars } from '@/styles/tokens/space.css';

export const rootVars = createGlobalTheme(':root', {
  textHeight: '2.85rem',
  headerHeight: '70px',
});

export const globalVars = createThemeContract({
  text: {
    size: '',
  },
  padding: {
    container: '',
    header: '',
  },
  list: {
    X: '',
    Y: '',
    item: '',
  },
});

export const responsiveTheme = style({
  vars: assignVars(globalVars, {
    text: {
      size: '17px',
    },
    padding: {
      container: '1.6rem',
      header: '1.6rem',
    },
    list: {
      X: spaceVars.mediumSmall,
      Y: spaceVars.mediumSmall,
      item: spaceVars.mediumSmall,
    },
  }),
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1024px)': {
      vars: assignVars(globalVars, {
        text: {
          size: '18px',
        },
        padding: {
          container: '0.65rem',
          header: '2rem',
        },
        list: {
          X: spaceVars.large,
          Y: spaceVars.mediumLarge,
          item: spaceVars.mediumSmall,
        },
      }),
    },
    'screen and (max-width: 768px)': {
      vars: assignVars(globalVars, {
        text: {
          size: '19px',
        },
        padding: {
          container: '0.65rem',
          header: '2rem',
        },
        list: {
          X: spaceVars.large,
          Y: spaceVars.mediumLargeX2,
          item: spaceVars.medium,
        },
      }),
    },
  },
});
