import {
  createThemeContract,
  assignVars,
  globalStyle,
  createGlobalTheme,
} from '@vanilla-extract/css';
import { spaceVars } from '@/styles/tokens/space.css';

export const rootVars = createGlobalTheme(':root', {
  textHeight: '2.85rem',
  headerHeight: '70px',
});

export const respVars = createThemeContract({
  text: {
    size: '',
  },
  header: {
    height: '',
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
  toggle: {
    width: null,
    height: null,
    start: null,
    end: null,
    icon: null,
  },
});

globalStyle(':root', {
  vars: assignVars(respVars, {
    text: {
      size: '17px',
    },
    header: {
      height: '70px',
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
    toggle: {
      width: '150px',
      height: '40px',
      start: '7px',
      end: '70px',
      icon: '15px',
    },
  }),
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1024px)': {
      vars: assignVars(respVars, {
        text: {
          size: '18px',
        },
        header: {
          height: '70px',
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
        toggle: {
          width: '150px',
          height: '40px',
          start: '7px',
          end: '87px',
          icon: '15px',
        },
      }),
    },
    'screen and (max-width: 768px)': {
      vars: assignVars(respVars, {
        text: {
          size: '19px',
        },
        header: {
          height: '50px',
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
        toggle: {
          width: '80px',
          height: '30px',
          start: '7px',
          end: '40px',
          icon: '11px',
        },
      }),
    },
  },
});
