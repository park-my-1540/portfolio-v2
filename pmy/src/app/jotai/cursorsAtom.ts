/**
 * @fileoverview cursor state
 */
import { atom } from 'jotai';
import { CursorType } from '@/types/styles';

export const cursorsState = atom<CursorType>(); // 초기값 null
