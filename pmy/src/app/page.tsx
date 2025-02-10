import Page from '@/components/sections/index';
import { getPageList } from '@/service/notion/notionService';

export default async function Home() {
  const pages = await getPageList('LIST');
  return <Page list={pages} />;
}
