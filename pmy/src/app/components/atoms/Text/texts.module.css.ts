import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';

const base = {
  margin: '0',
  lineHeight: '1.3',
  cursor: 'pointer',
  WebkitFontSmoothing: 'antialiased',
};

const variants = {
  sizes: {
    small: style({
      fontSize: '0.75rem', // 12px
    }),
    smallmedium: style({
      fontSize: '0.875rem', // 14px
    }),
    medium: style({
      fontSize: '1rem', // 16px
    }),
    mediumlarge: style({
      fontSize: '1.3rem', // 20px
    }),
    mediumlargeX2: style({
      fontSize: '1.5625rem', // 25px
    }),
    large: style({
      fontSize: '1.75rem', // 28px
    }),
    largeX2: style({
      fontSize: '2.5rem', // 40px
    }),
    big: style({
      fontSize: '4.375rem', // 70px
      lineHeight: '4.375rem', // 70px
    }),
    title: style({
      fontSize: '6vw', // 70px
      lineHeight: '6vw', // 70px
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
  display: {
    inlineBlock: style({
      display: 'inline-block',
    }),
  },
  vertical: {
    textTop: style({
      verticalAlign: 'text-Top',
    }),
  },
  textAlign: {
    center: style({
      textAlign: 'center',
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
