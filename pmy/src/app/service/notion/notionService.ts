/**
 * @fileoverview 데이터 가공 로직
 */
import { DATABASE_ID } from '@/../../config';
import { Blocks, TextRichText, DatabaseKey } from '@/types/common';
import { getPublishedImageUrl } from '@/utils/helpers';
import { getDatabaseQuery, getPageChildren, patchBlock } from './notionClient';
import { NotionPage } from './notionType';
import convertToPermanentMedia from './CloudinaryApi';

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
        type: page.properties?.type?.rich_text?.[0]?.plain_text || '',
      }));
    }

    // 기본적으로 상세 정보를 반환
    return data.results.map((page: NotionPage) => {
      const originalImgUrl = page.cover?.file?.url || '';
      const updatedImgUrl = originalImgUrl ? getPublishedImageUrl(originalImgUrl, page.id) : '';

      return {
        id: page.id,
        duration: `${page.properties?.duration?.date?.start}~${page.properties?.duration?.date?.end}` || '',
        position: page.properties?.position?.rich_text?.[0]?.plain_text || '',
        service: page.properties?.service?.rich_text?.[0]?.plain_text || '',
        type: page.properties?.type?.rich_text?.[0]?.plain_text || '',
        img: updatedImgUrl,
        title: page.properties?.이름?.title?.[0]?.plain_text || '',
        company: page.properties?.company?.rich_text?.[0]?.plain_text || '',
      };
    });
  } catch (error) {
    console.error('Error fetching list data:', error);
    return [];
  }
}

// 2. Notion 블록 내 이미지 및 비디오를 Cloudinary로 업로드 후 URL 업데이트
export const updateMediaBlocks = async (pageId: DatabaseKey): Promise<string[]> => {
  const allMediaBlocks = await getPageChildren(pageId);
  if (!allMediaBlocks?.results?.length) return [];

  const uploadTasks = allMediaBlocks.results.map(async (mediaBlock: any, index: number) => {
    const { type, id: blockId } = mediaBlock;
    if (!type || !mediaBlock[type]) return null;

    let mediaUrl: string | null = null;
    let mediaType: 'image' | 'video' | null = null;
    if (type === 'image' || type === 'video') {
      const mediaData = mediaBlock[type];
      if (mediaData.type === 'file') {
        mediaUrl = mediaData.file.url;
      } else if (mediaData.type === 'external') {
        mediaUrl = mediaData.external.url;
      }

      mediaType = type;
    }

    if (!mediaUrl || !mediaType) return null;

    return convertToPermanentMedia(mediaUrl, `${pageId}_${mediaType}block_${index + 1}`, mediaType).then(
      (convertedMediaUrl) => ({
        blockId,
        convertedMediaUrl,
      }),
    );
  });

  // 변환된 미디어 리스트 가져오기
  const mediaUpdates = (await Promise.allSettled(uploadTasks))
    .filter((result) => result.status === 'fulfilled' && result.value !== null)
    .map(
      (result) =>
        (
          result as PromiseFulfilledResult<{
            blockId: string;
            convertedMediaUrl: string;
          }>
        ).value,
    );

  if (!mediaUpdates.length) {
    return [];
  }

  // Notion 블록 업데이트 병렬 처리
  await Promise.allSettled(
    mediaUpdates.map(({ blockId, convertedMediaUrl }) => patchBlock(blockId, convertedMediaUrl)),
  );

  return mediaUpdates.map((i) => i.convertedMediaUrl);
};

// 2. 페이지 블록 가져오기 함수 - Notion API에서 페이지 블록을 가져오는 함수 (하위 Bullet까지 포함)
export async function getPageBlocks(pageId: DatabaseKey): Promise<Blocks[]> {
  try {
    const data = await getPageChildren(pageId);
    const convertedUrls = await updateMediaBlocks(pageId);
    const blocks: Blocks[] = await Promise.all(
      data.results.map(async (block) => {
        let content = '';
        let media = new Set();
        switch (block.type) {
          case 'paragraph':
          case 'heading_1':
          case 'heading_2':
          case 'heading_3':
          case 'bulleted_list_item':
          case 'numbered_list_item':
          case 'quote':
            content = block[block.type]?.rich_text?.map((text: TextRichText) => text.plain_text).join('') || '';

            return {
              id: block.id,
              type: block.type,
              content,
              children: block.has_children ? await getPageBlocks(block.id as DatabaseKey) : [],
            };

          case 'image': {
            // Notion에 직접 업로드된 이미지인 경우 Cloudinary로 변환
            convertedUrls.forEach((url) => media.add(url));
            break;
          }
          case 'video': {
            content = convertedUrls[0];
            break;
          }
          default:
            content = `[Unsupported block type: ${block.type}]`;
        }

        return { id: block.id, type: block.type, content, media: [...media] };
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
