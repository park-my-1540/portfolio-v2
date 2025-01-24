// app/utils/notion.ts
import { Client } from '@notionhq/client';
import { DATABASE_ID, TOKEN } from '@/../../config';
import {
  NotionPage,
  BlockContent,
  TextRichText,
  Block,
} from '@/types/notionRes';
import { DatabaseKey } from '@/types/common';
// Notion 클라이언트 인스턴스 생성
const notion = new Client({
  auth: TOKEN,
});

// 공통된 fetch 요청 함수
async function fetchNotionData(url: string, method: 'POST' | 'GET' = 'POST') {
  try {
    const res = await fetch(url, {
      method: method,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      cache: 'no-cache', // no-cache 설정
    });
    return await res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// 1. Notion 데이터베이스에서 일정 정보를 가져오는 함수
export async function getPageList(
  pageId: DatabaseKey,
  returnIdsOnly: boolean = false,
) {
  try {
    const database_id = DATABASE_ID[pageId];
    const data = await fetchNotionData(
      `https://api.notion.com/v1/databases/${database_id}/query`,
      'POST',
    );
    // returnIdsOnly가 true일 경우, id만 반환
    if (returnIdsOnly) {
      return data.results.map((page: NotionPage) => ({
        id: page.id,
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

// 2. 페이지 블록 가져오기 함수
export async function getPageBlocks(
  pageId: DatabaseKey,
): Promise<BlockContent[]> {
  try {
    const data = await fetchNotionData(
      `https://api.notion.com/v1/blocks/${pageId}/children`,
      'GET',
    );

    // 블록 내용 처리
    const blocks: BlockContent[] = data.results.map((block: Block) => {
      let content = '';

      switch (block.type) {
        case 'paragraph':
        case 'heading_1':
        case 'heading_2':
        case 'heading_3':
        case 'bulleted_list_item':
        case 'numbered_list_item':
          content =
            block[block.type]?.rich_text
              ?.map((text: TextRichText) => text.plain_text)
              .join('') || '';
          break;
        case 'image':
          content = block.image?.external?.url || block.image?.file?.url || '';
          break;
        case 'code':
          content =
            block.code?.rich_text
              ?.map((text: TextRichText) => text.plain_text)
              .join('') || '';
          break;
        case 'divider':
          content = '---'; // 구분선
          break;
        default:
          content = `[Unsupported block type: ${block.type}]`;
      }

      return {
        id: block.id,
        type: block.type,
        content,
      };
    });

    return blocks;
  } catch (error) {
    console.error(`Error fetching blocks for page ${pageId}:`, error);
    return [];
  }
}

// 3. 페이지와 블록 데이터 모두 가져오기
export async function getPageWithBlocks(pageId: DatabaseKey) {
  try {
    const page = await getPageList(pageId, true);
    const list = await getPageList('LIST');
    const filtered = list.filter((item) => item.type === pageId);

    const pageWithBlocks = await Promise.all(
      page.map(async (item) => {
        const blocks = await getPageBlocks(item.id);
        return { blocks };
      }),
    );
    return { pageWithBlocks, filtered };
  } catch (error) {
    console.error('Error fetching page with blocks:', error);
    return [];
  }
}
