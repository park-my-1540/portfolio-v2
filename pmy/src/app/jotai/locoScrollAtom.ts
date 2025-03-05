/**
 * @fileoverview scrollState
 */
import { atom } from 'jotai';
import LocomotiveScroll from 'locomotive-scroll';

type locoScrollType = LocomotiveScroll | undefined;

const locoScrollState = atom<locoScrollType>();
export default locoScrollState;
