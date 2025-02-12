/**
 * @fileoverview scrollState
 */
import { atom } from 'jotai';

type scrollType = boolean;

export const scrollStartState = atom<scrollType>(false);
