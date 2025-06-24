/** response properties type */
type NotionImage = {
  external?: { url: string };
  file?: { url: string };
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

/** 공통 구조 */
type NotionTextContent = {
  type: 'text';
  text: {
    content: string;
    link: null;
  };
  plain_text: string;
  href: null;
};

type NotionProperty<T extends 'rich_text' | 'title'> = {
  id: string;
  type: T;
} & Record<T, NotionTextContent>;

type NotionPropertyRichText = NotionProperty<'rich_text'>;
type NotionPropertyTitle = NotionProperty<'title'>;

/** properties - jobList */
interface NotionJobProperties {
  position: NotionPropertyRichText;
  service: NotionPropertyRichText;
  type: NotionPropertyRichText;
  company: NotionPropertyRichText;
  duration: NotionPropertyDate;
  desc: NotionPropertyRichText;
  이름: NotionPropertyTitle;
}

/* response - getDatabaseQuery */
export interface NotionPage {
  id: string;
  cover: NotionImage;
  properties: NotionJobProperties;
}
