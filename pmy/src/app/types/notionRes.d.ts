export interface TextRichText {
  plain_text: string;
}

export interface NotionImage {
  external?: { url: string };
  file?: { url: string };
}

interface CodeBlock {
  rich_text: TextRichText[];
}

type BlockType =
  | 'paragraph'
  | 'heading_1'
  | 'heading_2'
  | 'heading_3'
  | 'bulleted_list_item'
  | 'numbered_list_item'
  | 'image'
  | 'code'
  | 'divider';

export interface Block {
  id: string;
  type: BlockType;
  paragraph?: { rich_text: TextRichText[] };
  heading_1?: { rich_text: TextRichText[] };
  heading_2?: { rich_text: TextRichText[] };
  heading_3?: { rich_text: TextRichText[] };
  bulleted_list_item?: { rich_text: TextRichText[] };
  numbered_list_item?: { rich_text: TextRichText[] };
  image?: NotionImage;
  code?: CodeBlock;
  divider?: {};
}

export interface BlockContent {
  id: string;
  type: BlockType;
  content: string;
}

export interface BlockItem {
  archived: boolean;
  created_by: object;
  created_time: object;
  has_children: boolean;
  id: string;
  in_trash: boolean;
  last_edited_by: object;
  last_edited_time: string;
  object: string;
  paragraph: { rich_text: TextRichText[]; color: 'string' };
  parent: {
    type: string;
    page_id: string;
  };
  type: BlockType;
}
