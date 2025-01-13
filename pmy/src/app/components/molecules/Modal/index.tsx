import { dim } from '@/styles/style.css';
import { useAtomValue, useSetAtom } from 'jotai';
import { modalState } from '@/jotai/modalAtom';
export default function Modal() {
  const modalOpen = useAtomValue(modalState);
  const setModalOpen = useSetAtom(modalState);
  return (
    modalOpen && <div className={dim} onClick={() => setModalOpen(false)}></div>
  );
}
