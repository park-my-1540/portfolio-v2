import { borderTop, paddingBox, headingWrap, bg } from '@/styles/style.css';
import { PageWithBlocks, BlockCollections } from '@/types/common';

// 이미지 렌더링 함수
const renderImages = (images: string[]): string =>
  images.length >= 2
    ? `<Box width="100%" className={'${borderTop}'}><SwiperComp image={${JSON.stringify(images)}}/></Box>`
    : `<Box width="100%" className={'${borderTop}'}><Image url=${JSON.stringify(images[0])} radius="default" className={'${bg}'} sizes="main"/></Box>`;

// 비디오 렌더링 함수
const renderVideo = (url: string): string =>
  `<Box width="100%" height="500px" className={'${borderTop}'}><video controls width="100%"><source src="${url}" type="video/mp4" /></video></Box>`;

// 텍스트 블록을 감싸는 그리드 박스 생성
const renderBox = (content: string[]): string =>
  content.length > 0
    ? `<Box className={'${paddingBox} ${borderTop} renderBOx'} paddingBottom="5rem"> ${content.join('')} </Box>`
    : '';

// Bullet List 및 Number List를 재귀적으로 처리하는 함수
const renderList = (items: { content: string; children: any[] }[], type: 'ul' | 'ol'): string => {
  if (!items.length) return '';
  return `<${type}> 
    ${items
      .map(({ content, children }) => {
        return `<li>${content} 
          ${children && children.length > 0 ? renderList(children, type) : ''}
        </li>`;
      })
      .join('')}
  </${type}>`;
};
export default function renderContent(blocksData: PageWithBlocks) {
  const block: BlockCollections = {
    rendered: [],
    text: [],
    desc: [],
    title: [],
    list: [],
    ul: [],
    ol: [],
    images: [],
    quote: [],
  };

  const NUMBER = 'numbered_list_item';

  blocksData.blocks.forEach((blk) => {
    const { type, content, children, media } = blk;
    switch (type) {
      case 'heading_1':
        block.title.push(`<TextTitle sizes="large" className={'${borderTop} ${paddingBox}'}>${content}</TextTitle>`);
        break;
      case 'heading_3':
        block.desc.push(
          `<TextTitle key={blk.id} className={'${borderTop} ${headingWrap}'} lineHeight="md">${content}</TextTitle>`,
        );
        break;
      case 'quote':
        block.quote.push(`<Text sizes="quote" key={blk.id}>${content}</Text>`);
        break;
      case 'image':
        block.images.push(media);
        break;
      case 'video':
        block.rendered.push(renderVideo(content));
        break;
      case NUMBER:
        block.ol.push({ content, children });
        break;
      default:
        block.rendered.push('');
    }
  });

  block.list.push(renderList(block.ul, 'ul'));
  block.list.push(renderList(block.ol, 'ul'));
  block.text.push(`<Box>${block.list.join('')}</Box>`);
  if (block.images && block.images.length > 0) {
    block.rendered.push(renderImages(block.images[0]));
  }

  if (block.title.length > 0) {
    block.rendered.push(`<Box>${block.title.join('')}</Box>`);
  }

  if (block.desc.length > 0) {
    block.rendered.push(`<Box>${block.desc.join('')}</Box>`);
  }

  block.rendered.push(renderBox(block.text));
  block.rendered.push(renderBox(block.quote));
  return block.rendered.join('');
}
