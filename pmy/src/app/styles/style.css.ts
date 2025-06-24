import { style, globalStyle } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '@/styles/common/createThemeContract.css';
import { respVars } from '@/styles/common/createResponsiveTheme.css';
import { responsiveStyle } from '@/styles/common/responsive.css';

// border - style
export const borderTopNone = style({
  border: '1.5px solid',
  borderTop: 'none',
});

export const borderBox = style({
  border: '1.5px solid',
});

export const borderTop = style({
  borderTop: '1.5px solid',
});

export const borderX = style({
  borderLeft: '1.5px solid',
  borderRight: '1.5px solid',
});

// layout - project page
export const pageContainer = style({
  paddingTop: calc(respVars.header.height).add(calc(respVars.padding.header).multiply(2)).toString(),
});
export const paddingBox = style({
  padding: respVars.padding.container,
});
export const headingWrap = style({
  padding: `${respVars.list.Y} ${respVars.padding.container}`,
});

export const scrollbar = style({
  selectors: {
    '&::-webkit-scrollbar': {
      width: '5px',
      backgroundColor: vars.color.scrollbar.track,
    },
    '&::-webkit-scrollbar-track': {
      WebkitBoxShadow: `inset 0 0 6px ${vars.color.scrollbar.track}`,
      backgroundColor: vars.color.scrollbar.track,
      borderLeft: `1px solid ${vars.color.scrollbar.track}`,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: vars.color.scrollbar.thumb,
    },
  },
});

export const project = style({
  height: '100vh',
  overflowY: 'scroll',
  backgroundColor: vars.color.light,
  color: vars.color.dark,
  transition: 'background-color 0.3s ease-in-out',
  selectors: {
    '&::before': {
      content: '',
      display: 'block',
      width: 'calc(100% - 5px)',
      height: 40,
      background: vars.color.light,
      position: 'absolute',
      top: 0,
      zIndex: 9,
      transition: 'background-color 0.3s ease-in-out',
    },
  },
});

// dim
export const dim = style({
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  background: 'rgb(13 13 13)',
  opacity: 0.7,
  zIndex: 99,
});

// button
export const bgBtn = style({
  padding: '0.3rem 0.7rem',
  borderRadius: '.9rem',
});

// icon
export const iconArrow = style({
  display: 'inline-block',
  width: '1.3rem',
  height: '1.3rem',
  position: 'relative',
  top: 15,
  left: 10,
  borderLeft: `3px solid ${vars.color.text.accent}`,
  transform: 'rotate(45deg)',
  transition: 'all 0.5s cubic-bezier(0.5, 0, 0, 1), opacity 0.5s cubic-bezier(0.5, 0, 0, 1)',
  selectors: {
    '&::before': {
      content: '',
      display: 'block',
      width: 'calc(100% - 7px)',
      height: 3,
      position: 'absolute',
      top: 2,
      left: -4,
      transform: 'rotate(45deg)',
      background: vars.color.text.accent,
    },
    '&::after': {
      content: '',
      display: 'block',
      width: 'calc(100% - 7px)',
      height: 3,
      position: 'absolute',
      top: 2,
      left: -11,
      transform: 'rotate(-45deg)',
      background: vars.color.text.accent,
    },
  },
});

export const arrowLink = style({
  display: 'flex',
  position: 'relative',
  paddingRight: '3rem',
  selectors: {
    '&:hover': {
      color: vars.color.light,
    },
  },
});

globalStyle(`${arrowLink}:hover ${iconArrow}`, {
  color: vars.color.light,
  top: 1,
  left: 13,
});

export const bg = style({
  backgroundColor: '#dee2e64d',
});

export const mobileOnly = style([
  responsiveStyle({
    mobile: {
      display: 'block',
    },
    tablet: {
      display: 'none',
    },
    desktop: {
      display: 'none',
    },
  }),
]);
