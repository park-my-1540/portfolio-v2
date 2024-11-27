import { createSprinkles } from "@vanilla-extract/sprinkles";
import { responsiveProperties } from '@/styles/responsive.css';
import { colorProperties } from '@/styles/tokens/colors.css';

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
