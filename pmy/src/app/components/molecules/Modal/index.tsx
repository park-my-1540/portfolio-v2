import { dim } from '@/styles/style.css';
import { useAtomValue } from 'jotai';
import { modalState } from '@/jotai/modalAtom';
import * as modal from '@/utils/modal';
export default function Modal() {
  const modalOpen = useAtomValue(modalState);

  const closeMenu = () => {
    modal.closeModal();
  };

  return modalOpen && <div className={dim} onClick={closeMenu}></div>;
}
