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
            desktop: 'w80',
            tablet: 'w80',
            mobile: 'full',
          },
        }}
      >
        <div data-highlight="half" data-splitting="lines" className="desc">
          <Text sizes="largeX2" weights="bold">
            안녕하세요.
            <br />
            <br />
            퍼블리셔로 시작해 4년 동안 다양한 UI를 구현했고, <br />
            프론트엔드 개발자로 전향한 뒤에는 2년간 사용자 중심의 인터랙션을 만들어왔습니다.
            <br />
            기능을 구현하는 것에 그치지 않고, <br />
            디자이너·기획자와 함께 더 나은 방향을 고민하며 <br />
            서비스의 완성도를 높이는 데 집중해왔습니다.
            <br />
            <br />
            코드는 읽기 쉬워야 하고, UI는 자연스러워야 한다고 생각합니다. <br />
            사용자가 편하게 쓸 수 있는 흐름, 그리고 유지보수가 쉬운 구조를 늘 고민합니다.
            <br />
            <br />
            앞으로도 변화하는 기술을 꾸준히 배우고, <br />
            사용자와 개발자 모두에게 좋은 경험을 주는 웹을 만들어가고 싶습니다.
          </Text>
        </div>
      </Box>
    </>
  );
}
