import { borderTopNone, paddingBox } from '@/styles/style.css';
import { Blocks, BlockCollections } from "@/types/common";

// 이미지 렌더링 함수
const renderImages = (images: string[]) => {
  return images.map((image, index) => (
    `<Box key=${`image-${index}`} width="100%" height="500px" className={borderTopNone}>
      <Image url=${image} radius="default" sizes="full" />
    </Box>`
  ));
};

export default function renderContent(blocksData: Blocks[]) {
  const block: BlockCollections = {
    rendered: [],
    text: [],
    list: [],
    ul: [],
    ol: [],
    images: [],
  };

  const BULLET = 'bulleted_list_item';
  const NUMBER = 'numbered_list_item';

  let olFlag = false;
  let ulFlag = false;

  blocksData.forEach((blk) => {
    const { type, content, id } = blk;

    switch (type) {
      case 'heading_3':
        block.text.push(
          `<TextTitle key={blk.id}>${content}</TextTitle>`
        );
        break;

        case 'image':
          block.images.push(content);
          // 이미지가 두 개 이상일 경우 스와이퍼 컴포넌트로 렌더링
          if (block.images.length === 2) {
            block.rendered.push(
              `<Box width="100%" height="500px" className={borderTopNone}>
                <SwiperComp/>
              </Box>`
            );
            block.images = []; // 배열 초기화
          }
          break;
  
        // case 'paragraph':
        //   textBlocks.push(
        //     `<Br/>`
        //   );
        //   break;
  
      case BULLET:
        block.ul.push(`<li>${content}</li>`);
        break;

      case NUMBER:
        block.ol.push(`<li>${content}</li>`);
        break;

           // default:
      //   textBlocks.push(
      //     `<Text key={block.id} sizes="medium">음냐링</Text>`
      //   );
      //   break;
    }

    if (block.ul.length > 0 && type !== BULLET && !olFlag) {
      block.list.push(`<ul>${block.ul.join('')}</ul>`);
      block.ul = [];
      olFlag = true;
    }

    if (block.ol.length > 0 && type !== NUMBER && !ulFlag) {
      block.list.push(`<ol>${block.ol.join('')}</ol>`);
      block.ol = [];
      ulFlag = true;
    }

    if (block.list.length > 0 && ulFlag && olFlag) {
      block.text.push(`<Box>${block.list.join('')}</Box>`);
      block.list = [];
      ulFlag = olFlag = false;
    }

  });

  // 남아 있는 이미지 처리
  block.rendered.push(...renderImages(block.images));

  block.rendered.push(`
    <Box
      className={'${borderTopNone} ${paddingBox}'}
      paddingBottom="5rem"
      display="grid"
      gap="large"
      responsive={{
        gridTemplateColumns: {
          desktop: 'two',
          tablet: 'two',
          mobile: 'single',
        },
        gridTemplateRows: {
          desktop: 'single',
          tablet: 'single',
          mobile: 'single',
        }
      }}
    >${block.text.join('')}</Box>
  `);

  return block.rendered;
}
