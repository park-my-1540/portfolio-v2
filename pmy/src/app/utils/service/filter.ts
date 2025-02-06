import { borderTop, paddingBox } from '@/styles/style.css';
import { PageWithBlocks, BlockCollections } from '@/types/common';

// 이미지 렌더링 함수
const renderImages = (images: string[]) =>
  images.length >= 2
    ? `<Box width="100%" height="500px"><SwiperComp image={${JSON.stringify(images)}}/></Box>`
    : `<Box width="100%" height="500px"><Image url="${images}" radius="default" sizes="full"/></Box>`;
// 비디오 렌더링 함수
const renderVideo = (url) =>
  `<Box width="100%" height="500px" className={'${borderTop}'}><video controls width="100%"><source src="${url}" type="video/mp4" /></video></Box>`;
// 텍스트 블록을 감싸는 그리드 박스 생성
const renderGridBox = (content) =>
  content.length > 0
    ? `<Box className={'${paddingBox} ${borderTop}'} paddingBottom="5rem" display="grid" gap="large" responsive={{ gridTemplateColumns: { desktop: 'two', tablet: 'two', mobile: 'single' }, gridTemplateRows: { desktop: 'single', tablet: 'single', mobile: 'single' } }}> ${content.join('')} </Box>`
    : '';

export default function renderContent(blocksData: PageWithBlocks) {
  const block: BlockCollections = {
    rendered: [],
    text: [],
    title: [],
    list: [],
    ul: [],
    ol: [],
    images: [],
    quote: [],
  };

  const BULLET = 'bulleted_list_item';
  const NUMBER = 'numbered_list_item';

  blocksData.blocks.forEach((blk) => {
    const { type, content, id } = blk;

    switch (type) {
      case 'heading_1':
        block.title.push(
          `<TextTitle sizes="large" className={'${borderTop} ${paddingBox}'}>${content}</TextTitle>`,
        );
        break;
      case 'heading_3':
        block.text.push(`<TextTitle key={blk.id}>${content}</TextTitle>`);
        break;
      case 'quote':
        block.quote.push(`<Text sizes="quote" key={blk.id}>${content}</Text>`);
        break;
      case 'image':
        block.images.push(content);
        break;
      case 'video':
        block.rendered.push(renderVideo(content));
        break;
      case BULLET:
        block.ul.push(`<li>${content}</li>`);
        break;
      case NUMBER:
        block.ol.push(`<li>${content}</li>`);
        break;
    }
  });

  block.list.push(`<ul>${block.ul.join('')}</ul>`);
  block.list.push(`<ol>${block.ol.join('')}</ol>`);
  block.text.push(`<Box>${block.list.join('')}</Box>`);

  block.images.length > 0 && block.rendered.push(renderImages(block.images));
  block.title.length > 0 &&
    block.rendered.push(`<Box>${block.title.join('')}</Box>`);

  block.rendered.push(renderGridBox(block.text));
  block.rendered.push(renderGridBox(block.quote));

  return block.rendered.join('');
}
