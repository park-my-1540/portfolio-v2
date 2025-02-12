/**
 * @fileoverview Notion API 받아와서 page 컴포넌트에 전달
 * 서버사이드로 데이터 로드후 클라에서 렌더링 SSR
 */
import Page from '@/components/pages/index';
import { getPageList } from '@/service/notion/notionService';

export default async function Home() {
  const pages = await getPageList('LIST');
  return <Page list={pages} />;
}
