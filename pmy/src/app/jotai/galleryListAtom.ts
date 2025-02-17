/**
 * @fileoverview main gallery item list
 */
import { atom } from 'jotai';
import { ProjectProps } from '@/types/common';

export const galleryListState = atom<ProjectProps[]>([]);
