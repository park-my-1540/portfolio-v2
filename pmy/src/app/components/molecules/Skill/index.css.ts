import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';

export const btn = style({
  position: 'absolute',
  top: '50%',
  marginTop: '-2.5rem',
  left: '-2rem',
  background: vars.color.point,
  width: '2rem',
  height: '5rem',
  borderTopLeftRadius: '0.9rem',
  borderBottomLeftRadius: '0.9rem',
  selectors: {
    '&::after': {
      content: '',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderWidth: '0px 5px 5px 0px',
      borderColor: `transparent ${vars.color.point} transparent transparent`,
      position: 'absolute',
      bottom: -3,
      right: 0,
    },
    '&::before': {
      content: '',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderWidth: '0px 0px 5px 5px',
      borderColor: `transparent transparent ${vars.color.point} transparent`,
      position: 'absolute',
      top: -3,
      right: 0,
    },
  },
});

export const wrap = style({
  position: 'absolute',
  bottom: '10%',
  right: '-41%',
  background: vars.color.text.tertiary,
  // background: vars.color.point,
  borderRadius: '15px',
});

export const line = style({
  position: 'absolute',
  top: '50%',
  left: 8,
  display: 'inline-block',
  background: '#fff',
  width: '2px',
  height: '24px',
  marginTop: -12,
  selectors: {
    '&:nth-child(1)': {
      left: 14,
    },
    '&:nth-child(2)': {
      left: 20,
    },
  },
});

export const skill = style({
  // border: '2px solid white',
  // marginLeft: -15,
});
