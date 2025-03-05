import { getDefaultStore } from 'jotai';
import cursorsState from '@/jotai/cursorsAtom';

const store = getDefaultStore(); // Jotai store 직접 접근

export const set = (type) => {
  store.set(cursorsState, type);
};
export const get = () => {
  store.get(cursorsState);
};
