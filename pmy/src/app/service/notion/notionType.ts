export type DatabaseKey = 'ADC' | 'JDI' | 'LIST';

export interface NotionRes {
  pageWithBlocks: PageWithBlocks[];
  filtered: Filtered[];
}

export interface PageWithBlocks {
  blocks: Blocks[];
}

export interface Blocks {
  id: string;
  type: BlockType;
  content: string;
}

export interface Filtered {
  id: string;
  type: string;
  company?: string;
  duration?: string;
  img?: string;
  position?: string;
  service?: string;
  title?: string;
}

export type BlockType =
  | 'image'
  | 'video'
  | 'heading_1'
  | 'heading_2'
  | 'heading_3'
  | 'quote'
  | 'paragraph'
  | 'bulleted_list_item'
  | 'numbered_list_item';

export interface BlockCollections {
  rendered: string[];
  text: string[];
  title: string[];
  list: string[];
  ul: string[];
  ol: string[];
  images: string[];
  quote: string[];
}
