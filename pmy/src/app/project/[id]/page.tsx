import Project from '@/components/templates/Project';
import { getPageWithBlocks } from '@/utils/service/notion';
import { DatabaseKey, NotionRes } from '@/types/common';
//서버에서 실행
export default async function ProjectPage({
  params,
}: {
  params: { id: DatabaseKey };
}) {
  const { id: pageId } = params; // params.id는 url 에서 추출된 동적 경로

  // 각 페이지의 블록 데이터 가져오기
  const result = await getPageWithBlocks(pageId);

  // 비어있다면 빈객체 할당
  const list: NotionRes =
    result && 'pageWithBlocks' in result
      ? result
      : { pageWithBlocks: [], filtered: [] };

  return <Project list={list} />;
}

// 동적 경로를 정적으로 생성
export async function generateStaticParams() {
  return [{ id: 'ADC' }, { id: 'JDI' }];
}
