/**
 * @fileoverview main gallery item list
 */
import { atom } from 'jotai';
import { GalleryProps } from '@/types/common';

export const galleryListState = atom<GalleryProps[]>([]);
