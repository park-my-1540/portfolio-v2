/**
 * @fileoverview Notion API 받아와서 page 컴포넌트에 전달
 * ISR
 */
import { REVALIDATE_LONG_TIME } from '@/../../config';
import Page from '@/components/pages/index';
import { getPageList } from '@/service/notion/notionService';

export default async function Home() {
  const [pages, toys] = await Promise.all([
    getPageList({
      pageId: 'LIST',
      cacheOptions: { next: { revalidate: REVALIDATE_LONG_TIME } },
    }),
    getPageList({
      pageId: 'TOYS',
      cacheOptions: { next: { revalidate: REVALIDATE_LONG_TIME } },
    }),
  ]);
  const list = [...(pages ?? []), ...(toys ?? [])];
  return <Page list={list} />;
}
