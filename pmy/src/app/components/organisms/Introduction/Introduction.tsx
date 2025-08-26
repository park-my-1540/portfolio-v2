import { Text } from '@/components/atoms/Text/Text';
import Box from '@/components/layouts/Box/Box';
import { useEffect } from 'react';
import 'splitting/dist/splitting-cells.css';
import 'splitting/dist/splitting.css';

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
            저는 에이전시에서 4년간 퍼블리셔로 근무하며 다양한 웹사이트와 앱의 UI를 구현했습니다. 웹 표준·접근성을
            준수하고 반응형·크로스 브라우징을 지원하며, 디자인 의도를 정확히 반영하는 역할을 담당했습니다.
            <br />
            <br />
            이후 프론트엔드 개발자로 전향해 약 2년간 협업툴 웹 애플리케이션을 운영했습니다. 사용자 피드백을 반영해
            기능을 개선하고 성능을 최적화하며, 실제 문제를 해결하는 경험을 쌓았습니다.
            <br />
            <br />
            저는 단순한 기능 구현을 넘어 서비스의 가치를 높이고, 직관적으로 사용할 수 있는 UI를 만들기 위해 작은 요소
            하나까지 고민합니다.
            <br />
            앞으로도 변화하는 기술을 꾸준히 학습하며, 협업을 통해 더 나은 해답을 제시하는 개발자로 성장하고 싶습니다.
            <br />
            <br />
            사용자에게는 ‘쉽고 즐거운 경험’을, 동료에게는 ‘함께 일하고 싶은 개발자’가 되는 것이 제 목표입니다.
          </Text>
        </div>
      </Box>
    </>
  );
}
