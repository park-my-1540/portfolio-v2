import { cursorsState } from '@/jotai/cursorsAtom';
import { getDefaultStore } from 'jotai';
const store = getDefaultStore(); // Jotai store 직접 접근

export const set = (type) => {
  store.set(cursorsState, type);
};
