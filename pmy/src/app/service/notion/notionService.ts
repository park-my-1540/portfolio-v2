/**
 * @fileoverview 데이터 가공 로직
 */
import { DATABASE_ID } from '@/../../config';
import { getDatabaseQuery, getPageChildren } from './notionClient';
import { NotionPage } from './notionType';
import { Blocks, TextRichText, Block, DatabaseKey } from '@/types/common';

// 1. Notion 데이터베이스에서 일정 정보를 가져오는 함수
export async function getPageList({
  pageId,
  returnIdsOnly = false,
  cacheOptions,
}: {
  pageId: DatabaseKey;
  returnIdsOnly?: boolean;
  cacheOptions?: { next?: { revalidate: number } };
}) {
  const database_id = DATABASE_ID[pageId as string];

  try {
    const data = await getDatabaseQuery(database_id, cacheOptions);

    if (returnIdsOnly) {
      return data.results.map((page: NotionPage) => ({
        id: page.id,
        type: page.properties?.type?.rich_text[0]?.plain_text || '',
      }));
    }

    // 기본적으로 상세 정보를 반환
    return data.results.map((page: NotionPage) => ({
      id: page.id,
      duration:
        `${page.properties?.duration?.date.start}~${page.properties?.duration?.date.end}` ||
        '',
      position: page.properties?.position?.rich_text[0]?.plain_text || '',
      service: page.properties?.service?.rich_text[0]?.plain_text || '',
      type: page.properties?.type?.rich_text[0]?.plain_text || '',
      img: page.cover?.file?.url || '',
      title: page.properties?.이름?.title[0]?.plain_text || '',
      company: page.properties?.company?.rich_text[0]?.plain_text || '',
    }));
  } catch (error) {
    console.error('Error fetching list data:', error);
    return [];
  }
}

// 2. 페이지 블록 가져오기 함수 - Notion API에서 페이지 블록을 가져오는 함수 (하위 Bullet까지 포함)
export async function getPageBlocks(pageId: DatabaseKey): Promise<Blocks[]> {
  try {
    const data = await getPageChildren(pageId);

    const blocks: Blocks[] = await Promise.all(
      data.results.map(async (block) => {
        let content = '';

        switch (block.type) {
          case 'paragraph':
          case 'heading_1':
          case 'heading_2':
          case 'heading_3':
          case 'bulleted_list_item':
          case 'numbered_list_item':
          case 'quote':
            content =
              block[block.type]?.rich_text
                ?.map((text: TextRichText) => text.plain_text)
                .join('') || '';

            return {
              id: block.id,
              type: block.type,
              content,
              children: block.has_children
                ? await getPageBlocks(block.id as DatabaseKey)
                : [],
            };

          case 'image':
            content =
              block.image?.external?.url || block.image?.file?.url || '';
            break;
          case 'video':
            content = block.video?.file?.url || '';
            break;
          default:
            content = `[Unsupported block type: ${block.type}]`;
        }

        return { id: block.id, type: block.type, content };
      }),
    );

    return blocks;
  } catch (error) {
    console.error(`Error fetching blocks for page ${pageId}:`, error);
    return [];
  }
}

// 3. 페이지와 블록 데이터 모두 가져오기
export async function getPageWithBlocks(pageId: DatabaseKey) {
  try {
    const page = await getPageList({ pageId, returnIdsOnly: true });
    const list = await getPageList({ pageId: 'LIST' });
    const filtered = list.filter((item) => item.type && item.type === pageId);
    const pageWithBlocks = await Promise.all(
      page.map(async (item) => {
        const blocks = await getPageBlocks(item.id as DatabaseKey);
        return { blocks };
      }),
    );
    return { pageWithBlocks, filtered };
  } catch (error) {
    console.error('Error fetching page with blocks:', error);
    return [];
  }
}
