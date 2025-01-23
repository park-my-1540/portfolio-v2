import React, { useEffect } from 'react';
import Box from '@/components/layouts/Box/Box';
import { Text } from '@/components/atoms/Text/Text';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';

export default function Introduction() {
  useEffect(() => {
    Splitting({ type: 'lines' }); // Splitting을 줄 단위로 실행
  }, []);
  return (
    <>
      <Box width="70%">
        <Text style={{ paddingTop: 25 }} sizes="largeX2" weights="bold">
          <div data-highlight="half" data-splitting="lines" className="desc">
            저는 4년차 웹퍼블리셔 그리고 프론트엔드 개발자로 2년 일한
            박미영입니다.
            <br /> 깔끔하고 동적인 ui를 좋아하고, 유지보수에 최적화된 코드
            작성과 마크업에 관심이 많다. 프론트엔드 개발자가 되기위해 리액트
            공부에 많은 시간을 투자하고 있습니다. <br />
            <br />
            성능 최적화 방법에 관심이 많습니다.
            <br /> 정체되지 않고 계속해서 발전하는 사람이 되고 싶습니다.
            프론트엔드 개발자가 되기위해 리액트 공부에 많은 시간을 투자하고
            있습니다. <br />
            성능 최적화 방법에 관심이 많습니다. 정체되지 않고 계속해서 발전하는
            사람이 되고 싶습니다.
          </div>
        </Text>
      </Box>
    </>
  );
}
