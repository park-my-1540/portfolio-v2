import { Client } from '@notionhq/client';
import { DATABASE_ID, TOKEN } from '@/../../config';
// notion 클라이언트 인스턴스 생성
const notion = new Client({
  auth: TOKEN, // 환경 변수에서 토큰 가져오기
});
const database_id = DATABASE_ID; // 환경 변수에서 데이터베이스 ID 가져오기

// Notion 데이터베이스에서 일정 정보를 가져오는 함수
export async function getPageList() {
  try {
    const { results } = await notion.databases.query({
      database_id: database_id,
    });
    const calendar = results.map((page) => {
      return {
        id: page.id,
        // title: page.properties.Name.title[0]?.text.content,
        // date: page.properties.Date.date.start,
        // tags: page.properties.Tags.rich_text[0]?.text.content,
        // description: page.properties.Description.rich_text[0]?.text.content,
      };
    });
    return calendar;
  } catch (error) {
    console.error('Error fetching calendar data:', error);
    return [];
  }
}

// 2. 페이지 블록 가져오기 함수
export async function getPageBlocks(pageId:string) {
  try {
    const { results } = await notion.blocks.children.list({
      block_id: pageId,
    });

    // 블록 내용 처리
    const blocks = results.map((block) => {
      let content = '';

      // 블록 타입에 따라 처리
      switch (block.type) {
        case 'paragraph':
        case 'heading_1':
        case 'heading_2':
        case 'heading_3':
        case 'bulleted_list_item':
        case 'numbered_list_item':
        case 'to_do':
        case 'quote':
          // 텍스트가 있는 경우만 추출
          content = block[block.type]?.rich_text?.map((text) => text.plain_text).join('') || '';
          break;
        case 'image':
          // 이미지 URL 추출
          content = block.image?.external?.url || block.image?.file?.url || '';
          break;
        case 'code':
          // 코드 블록의 텍스트 추출
          content = block.code?.rich_text?.map((text) => text.plain_text).join('') || '';
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
export async function getPageWithBlocks() {
  try {
    // 캘린더 데이터 가져오기
    const calendar = await getPageList();

    // 각 페이지의 블록 데이터 가져오기
    const calendarWithBlocks = await Promise.all(
      calendar.map(async (item) => {
        const blocks = await getPageBlocks(item.id);
        return { ...item, blocks };
      })
    );

    return calendarWithBlocks;
  } catch (error) {
    console.error('Error fetching calendar with blocks:', error);
    return [];
  }
}
