import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';

const base = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const variants = {
  cover: {
    cover: style({ backgroundSize: 'cover' }),
    contain: style({ backgroundSize: 'contain' }),
  },
  sizes: {
    small: style({
      width: 50,
      height: 50,
    }),
    smallmedium: style({
      width: 100,
      height: 100,
    }),
    medium: style({
      minWidth: 200,
      minHeight: 200,
    }),
    large: style({
      width: 300,
      height: 300,
    }),
    card: style({
      width: '100%',
      height: 300,
    }),
    full: style({
      width: '100%',
      height: '80vh',
    }),
  },
  radius: {
    default: style({
      borderRadius: 0,
    }),
    circle: style({
      borderRadius: '50%',
    }),
    round: style({
      borderRadius: '11px',
    }),
  },
};

export const image = recipe({
  base: {
    ...base,
  },
  variants,
  defaultVariants: {
    sizes: 'small',
    radius: 'default',
  },
});

export type ImageVariantProps = RecipeVariants<typeof image>;
