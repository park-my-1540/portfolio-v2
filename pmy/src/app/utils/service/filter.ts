import { borderTopNone, paddingBox } from '@/styles/style.css';


// 이미지 렌더링 함수
const renderImages = (images) => {
  return images.map((image, index) => (
    `<Box key=${`image-${index}`} width="100%" height="500px" className={borderTopNone}>
      <Image url=${image} radius="default" sizes="full" />
    </Box>`
  ));
};

export default function renderContent(blocks) {
  const renderedBlocks = [];
  const textBlocks = [];
  let listBlocks = [];
  let ulBlocks = [];
  let olBlocks = [];
  let images = []; // 이미지를 임시 저장하는 배열

  const BULLET = 'bulleted_list_item';
  const NUMBER = 'numbered_list_item';
  
  let olF = false;
  let ulF = false;

  blocks.forEach((block) => {
    const { type, content, children } = block;

    switch (type) {
      case 'heading_3':
        textBlocks.push(
          `<TextTitle key={block.id}>${content}</TextTitle>`
        );
        break;

      case 'image':
        images.push(content);
        // 이미지가 두 개 이상일 경우 스와이퍼 컴포넌트로 렌더링
        if (images.length === 2) {
          renderedBlocks.push(
            `<Box width="100%" height="500px" className={borderTopNone}>
              <SwiperComp/>
            </Box>`
          );
          images = []; // 배열 초기화
        }
        break;

      // case 'paragraph':
      //   textBlocks.push(
      //     `<Br/>`
      //   );
      //   break;

      case BULLET:
        ulBlocks.push(`<li>${content}</li>`);
        break;

      case NUMBER:
        olBlocks.push(`<li>${content}</li>`);
        break;

      // default:
      //   textBlocks.push(
      //     `<Text key={block.id} sizes="medium">음냐링</Text>`
      //   );
      //   break;
    }


    if(ulBlocks.length>0 && type !== BULLET && !olF) {
      listBlocks.push(`<ul>${ulBlocks.join('')}</ul>`)
      olF = true;
    }
    if(olBlocks.length>0 && type !== NUMBER && !ulF) {
      listBlocks.push(`<ol>${olBlocks.join('')}</ol>`);
      ulF = true;
    }

    if(listBlocks.length>0 && ulF && olF){
      textBlocks.push(`<Box>${listBlocks.join('')}</Box>`)
      listBlocks=[]
      ulF = olF = false
    }


    // 하위 블록이 있는 경우 재귀 호출
    if (children && children.length > 0) {
      renderedBlocks.push(...renderContent(children));
    }
  });

   // 남아 있는 이미지 처리
  renderedBlocks.push(...renderImages(images));

  renderedBlocks.push(`
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
        >${textBlocks.join('')}</Box>
    `)

  return renderedBlocks;
}