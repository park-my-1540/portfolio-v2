/**
 * @fileoverview cursor state
 */
import { atom } from 'jotai';
import { CursorType } from '@/types/styles';

const cursorsState = atom<CursorType>(); // 초기값 null
export default cursorsState;
