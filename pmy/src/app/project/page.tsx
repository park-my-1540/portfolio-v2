import Project from '@/components/templates/Project';
import { getPageWithBlocks } from '@/utils/service/notion';
import { Page } from '@/types/common';

export default async function index() {
  const list: Page[] = await getPageWithBlocks();
  return <Project list={list} />;
}
