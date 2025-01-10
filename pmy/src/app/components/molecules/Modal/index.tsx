import { dim } from './style.css';
import { useAtomValue } from 'jotai';
import { modalState } from '@/jotai/modalAtom';
export default function Modal() {
  const modalOpen = useAtomValue(modalState);
  return modalOpen && <div className={dim}></div>;
}
