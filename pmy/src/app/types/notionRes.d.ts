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
/**
 * 정제한 데이터
 */
export interface BlockContent {
  id: string;
  type: BlockType;
  content: string;
}

// export interface BlockItem {
//   archived: boolean;
//   created_by: object;
//   created_time: object;
//   has_children: boolean;
//   id: string;
//   in_trash: boolean;
//   last_edited_by: object;
//   last_edited_time: string;
//   object: string;
//   paragraph: { rich_text: TextRichText[]; color: 'string' };
//   parent: {
//     type: string;
//     page_id: string;
//   };
//   type: BlockType;
// }

/** page */
interface NotionUser {
  object: 'user';
  id: string;
}

/** property - 다중선택 */
interface NotionPropertyMultiSelect {
  id: string;
  type: 'multi_select';
  multi_select: {
    id: string;
    name: string;
    color: string;
  }[];
}

/** property - url */
interface NotionPropertyUrl {
  id: string;
  type: 'url';
  url: string;
}

/** property - 날짜 */
interface NotionPropertyDate {
  id: string;
  type: 'date';
  date: {
    start: string;
    end: string;
    time_zone: string | null;
  };
}

/** property - RichText */
interface NotionPropertyRichText {
  id: string;
  type: 'rich_text';
  rich_text: {
    type: 'text';
    text: {
      content: string;
      link: null;
    };
    annotations: {
      bold: boolean;
      italic: boolean;
      strikethrough: boolean;
      underline: boolean;
      code: boolean;
      color: string;
    };
    plain_text: string;
    href: null;
  }[];
}

interface NotionPropertyTitle {
  id: string;
  type: 'title';
  title: {
    type: 'text';
    text: {
      content: string;
      link: null;
    };
    annotations: {
      bold: boolean;
      italic: boolean;
      strikethrough: boolean;
      underline: boolean;
      code: boolean;
      color: string;
    };
    plain_text: string;
    href: null;
  }[];
}

/** gallery - tag */
interface NotionListProperties {
  태그: NotionPropertyMultiSelect;
  Github: NotionPropertyUrl;
  WorkPeriod: NotionPropertyDate;
  Desc: NotionPropertyRichText;
  이름: NotionPropertyTitle;
}

/** jobList - tag */
interface NotionJobProperties {
  Position: NotionPropertyRichText;
  service: NotionPropertyRichText;
  생성일: NotionPropertyDate;
  type: NotionPropertyRichText;
  Duration: NotionPropertyDate;
  이름: NotionPropertyTitle;
}

export interface NotionPage {
  object: 'page';
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: NotionUser;
  last_edited_by: NotionUser;
  cover: NotionImage;
  icon: null;
  parent: {
    type: 'database_id';
    database_id: string;
  };
  archived: boolean;
  in_trash: boolean;
  properties: NotionJobProperties;
  url: string;
  public_url: string | null;
}
