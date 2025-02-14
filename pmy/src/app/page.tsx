/**
 * @fileoverview Notion API 받아와서 page 컴포넌트에 전달
 * SSR + SSG
 */
import Page from '@/components/pages/index';
import { getPageList } from '@/service/notion/notionService';

export default async function Home() {
  const pages = await getPageList('LIST');
  return <Page list={pages} />;
}
