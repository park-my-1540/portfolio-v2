/**
 * @fileoverview Notion API 받아와서 page 컴포넌트에 전달
 * ISR
 */
import { REVALIDATE_LONG_TIME } from '@/../../config';
import Page from '@/components/pages/index';
import { getPageList } from '@/service/notion/notionService';

export default async function Home() {
  const pages = await getPageList({
    pageId: 'LIST',
    next: { revalidate: REVALIDATE_LONG_TIME },
  });

  return <Page list={pages} />;
}
