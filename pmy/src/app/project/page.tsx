import Project from '@/components/templates/Project';
import { getPageWithBlocks } from '@/utils/service/notion';
export default async function index() {
  const quotes: quoteType = await getPageWithBlocks();
  return <Project list={quotes} />;
}

type propsType = {
  params: { quoteID: number };
};

type quoteType = {
  results: object[];
  quote: string;
  author: string;
};
