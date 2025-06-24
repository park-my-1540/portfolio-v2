export type DatabaseKey = 'ADC' | 'JDI' | 'LIST';

export interface ProjectContentProps {
  title: string;
  service: string;
  position: string;
  desc: string;
  duration: string;
}

export interface ProjectProps extends ProjectContentProps {
  id: string;
  type: string;
  img: string;
  company: string;
}

export interface Filtered extends ProjectProps {
  duration: string;
}

export interface ProjectItemProps extends ProjectProps {
  index: number;
  updateActiveImage: (index: number) => void;
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

export interface Blocks {
  id: string;
  type: BlockType;
  content: string;
  media: string | string[];
  children?: string[] | Blocks[];
}

export interface PageWithBlocks {
  blocks: Blocks[];
}
export interface NotionRes {
  pageWithBlocks: PageWithBlocks[];
  filtered: Filtered[];
}

export type BlockCollectionKeys = 'rendered' | 'text' | 'title' | 'list' | 'ul' | 'ol' | 'images' | 'quote' | 'desc';

export type BlockCollections = Record<BlockCollectionKeys, any[]>;

// export interface BlockCollections {
//   rendered: string[];
//   text: string[];
//   title: string[];
//   list: string[];
//   ul: string[];
//   ol: string[];
//   images: string[];
//   quote: string[];
// }

export interface TextRichText {
  plain_text: string;
}

export interface BlockContent {
  rich_text: TextRichText[];
}

export type NotionImage = {
  external?: { url: string };
  file?: { url: string };
};
/**
 * 새로운 블록 타입 추가 시 유지보수가 용이
 */
export type Block = {
  id: string;
  type: BlockType;
} & Partial<
  Record<
    'heading_1' | 'heading_2' | 'heading_3' | 'quote' | 'paragraph' | 'bulleted_list_item' | 'numbered_list_item',
    BlockContent
  >
> & {
    image?: NotionImage;
    video?: { file?: { url: string } };
  };

// interface Block {
//   id: string;
//   type: BlockType;

//   image?: NotionImage;
//   video?: { file?: { url: string } };

//   heading_1?: { rich_text: TextRichText[] };
//   heading_2?: { rich_text: TextRichText[] };
//   heading_3?: { rich_text: TextRichText[] };
//   quote?: { rich_text: TextRichText[] };
//   paragraph?: { rich_text: TextRichText[] };
//   bulleted_list_item?: { rich_text: TextRichText[] };
//   numbered_list_item?: { rich_text: TextRichText[] };
// }
