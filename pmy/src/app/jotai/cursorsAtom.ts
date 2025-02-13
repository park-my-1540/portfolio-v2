/**
 * @fileoverview cursor state
 */
import { atom } from 'jotai';

type CursorType = 'point' | 'pointer' | 'project' | null;

export const cursorsState = atom<CursorType>(null); // 초기값 null
