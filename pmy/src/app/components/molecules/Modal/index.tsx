import { useCallback } from 'react';
import { dim } from '@/styles/style.css';
import { useAtomValue, useSetAtom } from 'jotai';
import { modalState } from '@/jotai/modalAtom';
import * as animate from '@/utils/animate';
export default function Modal() {
  const modalOpen = useAtomValue(modalState);
  const setModalOpen = useSetAtom(modalState);
  const closeMenu = useCallback(() => {
    setModalOpen(false);
    animate.closeMenu();
  }, [setModalOpen]);
  return modalOpen && <div className={dim} onClick={closeMenu}></div>;
}
