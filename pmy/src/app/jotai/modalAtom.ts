/**
 * @fileoverview modalState open 여부
 */
import { atom } from 'jotai';

const modalState = atom<boolean>(false);

export default modalState;
