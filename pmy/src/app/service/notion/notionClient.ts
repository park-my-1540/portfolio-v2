/**
 * @fileoverview API 요청만 처리
 */
import { TOKEN, REVALIDATE_TIME } from '@/../../config';
import { DatabaseKey } from '@/types/common';

const BASE_URL = 'https://api.notion.com/v1';

// 데이터베이스 쿼리 요청
export async function getDatabaseQuery(
  databaseId: DatabaseKey,
  cacheOptions?: { next?: { revalidate: number } },
) {
  const url = `${BASE_URL}/databases/${databaseId}/query`;
  const finalCacheOptions = cacheOptions ?? {
    next: { revalidate: REVALIDATE_TIME },
  };
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      next: finalCacheOptions.next,
      body: JSON.stringify({
        sorts: [
          {
            property: 'duration',
            direction: 'descending',
          },
        ],
      }),
    });

    if (!res.ok) {
      throw new Error('Error fetching data');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching database query:', error);
    return null;
  }
}

// 페이지 자식 블록 가져오기
export async function getPageChildren(pageId: DatabaseKey) {
  const url = `${BASE_URL}/blocks/${pageId}/children`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Notion-Version': '2022-06-28',
      },
      next: {
        revalidate: REVALIDATE_TIME,
      },
    });

    if (!res.ok) {
      throw new Error('Error fetching page children');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching page children:', error);
    return null;
  }
}
