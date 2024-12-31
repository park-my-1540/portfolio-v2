import React from 'react';
import { useAtomValue } from 'jotai';
import { viewState } from '@/jotai/viewAtom';
import { Text } from '@/components/atoms/Text/Text';
import Box from '@/components/layouts/Box/Box';
import { wrap, scroll, spinAgain, rotate } from './scrollIndicator.css';
import { Position } from '@/components/layouts/Position/Position';
import { vars } from '@/styles/common/createThemeContract.css';
import { ScrollIndicatorProps } from '@/types/common';

export default function ScrollIndicator({ slideRef }: ScrollIndicatorProps) {
  return <></>;
}
