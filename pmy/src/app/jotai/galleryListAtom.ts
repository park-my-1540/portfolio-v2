/**
 * @fileoverview main gallery item list
 */
import { atom } from 'jotai';
import { ProjectProps } from '@/types/common';

const galleryListState = atom<ProjectProps[]>([]);
export default galleryListState;
