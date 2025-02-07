import React, { useEffect } from 'react';
import Box from '@/components/layouts/Box/Box';
import { Text } from '@/components/atoms/Text/Text';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';

export default function Introduction() {
  useEffect(() => {
    const initialize = async () => {
      const { default: Splitting } = await import('splitting');
      Splitting({ type: 'lines' });
    };
    initialize();
  }, []);
  return (
    <>
      <Box
        responsive={{
          width: {
            desktop: 'sixty',
            tablet: 'seventy',
            mobile: 'full',
          },
        }}
      >
        <div data-highlight="half" data-splitting="lines" className="desc">
          <Text style={{ paddingTop: 50 }} sizes="largeX2" weights="bold">
            안녕하세요.
            <br />
            <br />
            4년간 웹 퍼블리셔로 경험을 쌓았으며, 이후 2년간 프론트엔드 개발자로
            일하고 있는 박미영입니다. <br /> <br />
            깔끔하고 다이나믹한 UI를 만드는 것을 좋아하며, 유지보수가 용이한
            코드와 성능 최적화에 관심이 많습니다.
            <br />
            재사용 가능한 컴포넌트 설계와 디자인 시스템 활용에 흥미를 갖고
            있으며, 이를 효과적으로 적용하는 방법 또한 관심이 많습니다.
            <br />
            <br />더 나은 코드를 위해 끊임없이 학습하고, 협업을 통해 성장하는
            개발자가 되고자 합니다.
          </Text>
        </div>
      </Box>
    </>
  );
}
