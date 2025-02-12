/**
 * @fileoverview scrollState
 */
import { atom } from 'jotai';
import LocomotiveScroll from 'locomotive-scroll';

type locoScrollType = LocomotiveScroll | undefined;

export const locoScrollState = atom<locoScrollType>();
