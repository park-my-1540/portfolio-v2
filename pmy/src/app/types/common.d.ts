import { SwiperRef } from 'swiper/react';
import { ValueOfUnion } from '@/utils/utils';

const pageValue = ['main', 'about', 'some'] as const;
type DatabaseKey = 'ADC' | 'JDI' | 'LIST';
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
  img: string;
  id: string;
  position: string;
  service: string;
  title: string;
  company: string;
  type: DatabaseKey;
}

interface GalleryItemProps extends GalleryProps {
  index: number;
  updateActiveImage: (index: number) => void;
}

///////
interface NotionRes {
  pageWithBlocks: PageWithBlocks[];
  filtered: Filtered[];
}

interface PageWithBlocks {
  blocks: Blocks[];
}

interface Blocks {
  id: string;
  type: BlockType;
  content: string;
}

interface Filtered {
  company: string;
  duration: string;
  id: string;
  img: string;
  position: string;
  service: string;
  title: string;
  type: string;
}

type BlockType =
  | 'image'
  | 'heading_3'
  | 'paragraph'
  | 'bulleted_list_item'
  | 'numbered_list_item';

interface BlockCollections {
  rendered: string[];
  text: string[];
  list: string[];
  ul: string[];
  ol: string[];
  images: string[];
}

// interface Page {
//   id: string;
//   blocks: Blocks[]; // Blocks는 위에서 정의한 Block[]
//   filtered: Filtered[];
// }
