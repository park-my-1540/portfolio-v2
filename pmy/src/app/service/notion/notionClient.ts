/**
 * @fileoverview API 요청만 처리
 */
import { Client } from '@notionhq/client';
import { TOKEN } from '@/../../config';
import { DatabaseKey } from './notionType';
const notion = new Client({ auth: TOKEN });

export async function getDatabaseQuery(databaseId: DatabaseKey) {
  return notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: 'duration',
        direction: 'descending',
      },
    ],
  });
}

export async function getPageChildren(pageId: DatabaseKey) {
  return notion.blocks.children.list({ block_id: pageId });
}
