import { ValueOfUnion } from '@/utils/helpers';

type DatabaseKey = 'ADC' | 'JDI' | 'LIST';

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
  id: string;
  type: string;
  company?: string;
  duration?: string;
  img?: string;
  position?: string;
  service?: string;
  title?: string;
}

type BlockType =
  | 'image'
  | 'video'
  | 'heading_1'
  | 'heading_2'
  | 'heading_3'
  | 'quote'
  | 'paragraph'
  | 'bulleted_list_item'
  | 'numbered_list_item';

interface BlockCollections {
  rendered: string[];
  text: string[];
  title: string[];
  list: string[];
  ul: string[];
  ol: string[];
  images: string[];
  quote: string[];
}

interface TextRichText {
  plain_text: string;
}

interface Block {
  id: string;
  type: BlockType;
  paragraph?: { rich_text: TextRichText[] };
  heading_1?: { rich_text: TextRichText[] };
  heading_2?: { rich_text: TextRichText[] };
  heading_3?: { rich_text: TextRichText[] };
  bulleted_list_item?: { rich_text: TextRichText[] };
  numbered_list_item?: { rich_text: TextRichText[] };
  image?: NotionImage;
  video?: { file?: { url: string } };
}

/**
 * 정제한 데이터
 */
interface BlockContent {
  id: string;
  type: BlockType;
  content: string;
}
