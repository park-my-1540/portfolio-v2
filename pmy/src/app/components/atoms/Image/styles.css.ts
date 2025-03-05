import { style } from '@vanilla-extract/css';

export const loadtyles = {
  loading: style({
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
  }),
  loaded: style({
    opacity: 1,
    transition: 'opacity 0.3s ease-in-out',
  }),
};
