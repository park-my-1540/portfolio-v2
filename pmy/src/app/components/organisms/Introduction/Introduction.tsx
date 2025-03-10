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
            에이전시에서 퍼블리셔로 4년, 프론트엔드 개발자로 2년간 사용자 중심의 UI를
            만들어왔습니다.
            <br /> <br /> 단순한 기능 구현을 넘어 서비스의 가치를 높이는 개발을 지향하며, 동료와
            긴밀히 소통하며 더 나은 해결책을 고민합니다. 코드의 가독성과 일관성을 중요하게 생각하며,
            사용자 경험을 최우선으로 직관적이고 자연스러운 UI 개발에 관심이 많습니다. 성능 최적화와
            유지보수성을 고려한 지속 가능한 코드를 작성하기 위해 늘 노력합니다.
            <br />
            <br /> 앞으로도 끊임없이 성장하고 변화하는 기술을 꾸준히 학습하며, 사용자와 개발자
            모두가 만족할 수 있는 서비스를 만들어가겠습니다.
            <br />
            <br />
          </Text>
        </div>
      </Box>
    </>
  );
}
