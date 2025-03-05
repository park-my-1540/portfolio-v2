import { styleVariants } from '@vanilla-extract/css';

export const positionVariants = styleVariants({
  absolute: { position: 'absolute' },
  relative: { position: 'relative' },
  fixed: { position: 'fixed' },
  sticky: { position: 'sticky' },
  static: { position: 'static' },
});
