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
            desktop: 'w60',
            tablet: 'w70',
            mobile: 'full',
          },
        }}
      >
        <div data-highlight="half" data-splitting="lines" className="desc">
          <Text sizes="largeX2" weights="bold">
            안녕하세요.
            <br />
            <br />
            안녕하세요! 웹 퍼블리셔로 4년, 프론트엔드 개발자로 2년간 일하고 있는 박미영입니다.
            <br />
            <br />
            단순히 기능만 구현하기보다는 서비스를 더 가치 있게 만드는 개발을 좋아합니다. <br />
            가독성 좋고 깔끔한 코드, 그리고 사용자가 자연스럽고 쉽게 사용할 수 있는 직관적인 UI에
            신경을 많이 씁니다. 성능 최적화나 유지보수성도 중요하게 생각하고 있어요.
            <br />
            <br /> 더 좋은 코드를 위해 꾸준히 배우고 동료들과 함께 성장하는 개발자가 되고 싶습니다!
          </Text>
        </div>
      </Box>
    </>
  );
}
