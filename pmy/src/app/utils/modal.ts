// 📂 src/utils/modal.ts
import { modalState } from '@/jotai/modalAtom';
import { getDefaultStore } from 'jotai';
import * as animate from '@/utils/animate';
const store = getDefaultStore(); // Jotai store 직접 접근

export const closeModal = () => {
  store.set(modalState, false);
  animate.closeMenu();
};

export const openModal = () => {
  store.set(modalState, true);
  animate.openMenu();
};
