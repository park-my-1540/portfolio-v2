import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/tokens/colors.css';
const base = {
  margin: '0',
  lineHeight: '1.3',
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
    largeX3: style({
      fontSize: '3.5rem', // 40px
    }),
    big: style({
      fontSize: '4.375rem', // 70px
      lineHeight: '4.375rem !important', // 70px
    }),
    title: style({
      fontSize: '6vw', // 70px
      lineHeight: '6vw !important', // 70px
    }),
    full: style({
      fontSize: '12vw', // 70px
      letterSpacing: '-.6rem',
    }),
    quote: style({
      fontSize: '1rem', // 12px
      lineHeight: '1.5 !important',
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
  stroke: {
    stroke: style({
      color: 'transparent !important',
      WebkitFontSmoothing: 'antialiased',
      WebkitTextStroke: `2px ${colors.lightblue}`,
    }),
  },
  decoration: {
    underline: style({
      textDecoration: 'underline',
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
