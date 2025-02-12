import { dim } from '@/styles/style.css';
import { useAtomValue, useSetAtom } from 'jotai';
import { modalState } from '@/jotai/modalAtom';
import * as animate from '@/utils/animate';
export default function Modal() {
  const modalOpen = useAtomValue(modalState);
  const setModalOpen = useSetAtom(modalState);
  const closeMenu = () => {
    setModalOpen(false);
    animate.closeMenu();
  };
  return modalOpen && <div className={dim} onClick={closeMenu}></div>;
}
