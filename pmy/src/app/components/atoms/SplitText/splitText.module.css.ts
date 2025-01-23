import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/common/createThemeContract.css';

const base = {
  margin: '0',
  lineHeight: '1.2',
  // color: vars.color.complementary,
};

const variants = {
  sizes: {
    small: style({
      fontSize: '0.75rem',
      height: '0.8rem',
      lineHeight: '0.8rem',
    }),
    smallmedium: style({
      fontSize: '0.875rem',
      height: '1rem',
    }),
    medium: style({
      fontSize: '1rem',
      height: '1.5rem',
      lineHeight: '1.3rem',
    }),
    mediumlarge: style({
      fontSize: '1.3rem',
      lineHeight: '1.3rem',
      height: '1.8rem',
    }),
    mediumlargeX2: style({
      fontSize: '1.5625rem',
      height: '2.1625rem',
    }),
    large: style({
      fontSize: '1.75rem',
      height: '2.25rem',
    }),
    largeX2: style({
      fontSize: '3rem',
      height: '3.5rem',
    }),
    big: style({
      fontSize: '4.375rem',
      lineHeight: '4.375rem',
      height: '4.875rem',
    }),
  },
  weights: {
    light: style({
      fontWeight: 300,
      fontFamily: 'MangoLight',
    }),
    normal: style({
      fontWeight: 400,
      fontFamily: 'MangoRegular',
    }),
    bold: style({
      fontWeight: 700,
      fontFamily: 'MangoBold',
    }),
  },
  family: {
    roboto: style({
      fontFamily: 'Roboto',
    }),
    MangoRegular: style({
      fontFamily: 'MangoRegular',
    }),
  },
};

export const text = recipe({
  base: {
    ...base,
  },
  variants,
  defaultVariants: {
    sizes: 'small',
    weights: 'normal',
  },
});

export type TextVariantProps = RecipeVariants<typeof text>;
