/** response properties type */
type NotionImage = {
  external?: { url: string };
  file?: { url: string };
};

type NotionUser = {
  object: 'user';
  id: string;
};

/** property - 다중선택 */
type NotionPropertyMultiSelect = {
  id: string;
  type: 'multi_select';
  multi_select: {
    id: string;
    name: string;
    color: string;
  }[];
};

/** property - url */
type NotionPropertyUrl = {
  id: string;
  type: 'url';
  url: string;
};

/** property - 날짜 */
type NotionPropertyDate = {
  id: string;
  type: 'date';
  date: {
    start: string;
    end: string;
    time_zone: string | null;
  };
};

/** property - RichText */
type NotionPropertyRichText = {
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
};

type NotionPropertyTitle = {
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
};

/** properties - gallery */
interface NotionListProperties {
  태그: NotionPropertyMultiSelect;
  Github: NotionPropertyUrl;
  WorkPeriod: NotionPropertyDate;
  Desc: NotionPropertyRichText;
  이름: NotionPropertyTitle;
}

/** properties - jobList */
interface NotionJobProperties {
  position: NotionPropertyRichText;
  service: NotionPropertyRichText;
  생성일: NotionPropertyDate;
  type: NotionPropertyRichText;
  company: NotionPropertyRichText;
  duration: NotionPropertyDate;
  이름: NotionPropertyTitle;
}

/* response - getDatabaseQuery */
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
