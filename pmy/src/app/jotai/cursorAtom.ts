/**
 * @fileoverview cursor Ref
 */
import { atom } from 'jotai';

type CursorType = {
  cursorRef?: React.RefObject<HTMLDivElement> | null;
  containerRef?: React.RefObject<HTMLDivElement> | null;
};

export const cursorState = atom<CursorType>({
  cursorRef: null,
  containerRef: null,
});
