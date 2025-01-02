import { SwiperRef } from 'swiper/react';
import { ValueOfUnion } from "@/utils/utils";

const pageValue = ["main", "about", "some"] as const;

export type PageType = ValueOfUnion<typeof pageValue>;
export type SwiperRefType = SwiperRef;

interface BaseProps {
}
  
interface HeaderProps extends BaseProps {
    title: string;
}
  
interface NavigationProps extends BaseProps {
    slideRef: React.RefObject<HTMLElement>;
    enumPage: readonly PageType[];
    onBulletClick: (index: number) => void;
}
  
interface ScrollIndicatorProps extends BaseProps {
    slideRef: React.RefObject<HTMLDivElement>;
}

interface SwiperProps {
    onSlideChange: (index: number) => void;
    swiperRef: React.RefObject<SwiperRefType>;
    pages: React.ReactNode[];
}

interface GalleryProps {
    src: string,
    category: string,
    subtitle: string,
    title: string,
}

interface GalleryItemProps extends GalleryProps {
    index: number,
    updateActiveImage: (index:number) => void,
}

type BlockType = 
  | 'image'
  | 'heading_3'
  | 'paragraph'
  | 'bulleted_list_item'
  | 'numbered_list_item';


interface Blocks {
        id: string;
        type: BlockType;
        content: string;
}

interface BlockCollections {
    rendered: string[];
    text: string[];
    list: string[];
    ul: string[];
    ol: string[];
    images: string[];
};