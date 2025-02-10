import { SwiperRef } from 'swiper/react';
import { ValueOfUnion } from '@/utils/helpers';

const pageValue = ['main', 'about', 'some'] as const;
// type DatabaseKey = 'ADC' | 'JDI' | 'LIST';
type PageType = ValueOfUnion<typeof pageValue>;
type SwiperRefType = SwiperRef;

interface BaseProps {}

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
  id: string;
  type: string;
  img?: string;
  position?: string;
  service?: string;
  title?: string;
  company?: string;
}

interface GalleryItemProps extends GalleryProps {
  index: number;
  updateActiveImage: (index: number) => void;
}

// ///////
// interface NotionRes {
//   pageWithBlocks: PageWithBlocks[];
//   filtered: Filtered[];
// }

// interface PageWithBlocks {
//   blocks: Blocks[];
// }

// interface Blocks {
//   id: string;
//   type: BlockType;
//   content: string;
// }

// interface Filtered {
//   id: string;
//   type: string;
//   company?: string;
//   duration?: string;
//   img?: string;
//   position?: string;
//   service?: string;
//   title?: string;
// }

// type BlockType =
//   | 'image'
//   | 'video'
//   | 'heading_1'
//   | 'heading_2'
//   | 'heading_3'
//   | 'quote'
//   | 'paragraph'
//   | 'bulleted_list_item'
//   | 'numbered_list_item';

// interface BlockCollections {
//   rendered: string[];
//   text: string[];
//   title: string[];
//   list: string[];
//   ul: string[];
//   ol: string[];
//   images: string[];
//   quote: string[];
// }
