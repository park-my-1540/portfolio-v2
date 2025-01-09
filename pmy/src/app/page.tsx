import Page from '@/components/pages/index';
import { getPageList } from '@/utils/service/notion';

export default async function Home() {
  const pages = await getPageList('LIST');
  return <Page list={pages} />;
}
