import React, { useRef, useEffect } from "react";
import { useAtomValue } from "jotai";
import { viewState } from "@/jotai/viewAtom";
import Box from "@/components/layouts/Box/Box";
import { Text } from "@/components/atoms/Text/Text";
import { Image } from "@/components/atoms/Image/Image";
import { vars } from "@/styles/common/createThemeContract.css";
import { Position } from "@/components/layouts/Position/Position";
import * as gsapUtil from "@/utils/gsapUtil";

export default function Introduction() {

  // const {currentIdx, currentPage} = useAtomValue(viewState);
  // const textRefs = useRef<(HTMLParagraphElement | null)[]>(Array().fill(null));

  //   // GSAP 애니메이션 초기화
  //   useEffect(() => {
  //     textRefs.current.forEach((item) => {
  //       if (item) {
  //         gsapUtil.horizontalClip(item); // 각각의 li 태그에 애니메이션 적용
  //       }
  //     });
  //     return() => {
  //       textRefs.current.forEach((item) => {
  //         if (item) gsap.killTweensOf(item); // 애니메이션 정리
  //       });
  //     }
  //   }, []);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       textRefs.current.forEach((item) => {
  //         if (item) gsapUtil.horizontalClip(item); // currentPage 변경 시 재적용
  //       });
  //     }, 500);
    
  // }, [currentIdx]);
  
  

    return (
        <>
        <Box
          display="flex"
          justify="center"
        >
          <Box display="block" width="30%">
            <Text 
              //  ref={(el) => {
              //   textRefs.current[1] = el;
              // }} 
              sizes="largeX2" 
              weights="bold">hello,</Text>

            <Box className="sia">
              <Text  
                //  ref={(el) => {
                //   textRefs.current[2] = el;
                // }} 
                style={{'paddingTop':25}} 
                sizes="mediumlarge">
                사용자들이 즐거움을 느끼며 사용하고 싶은 다이나믹한 UI를 개발하는 것에<br/> 가장 즐거움을 느낍니다.
                <br/>
                프론트엔드 개발자가 되기 위해 리액트에 많은 시간을 투자하고 있습니다.
                <br/>
                <br/>
                정체되지 않고 계속해서 발전하는 사람이 되고싶습니다.
              </Text>
            </Box>
          </Box>
          <Box display="block" width="20%" marginTop={150} className="test">
              <Text  
                style={{'paddingTop':25}} 
                sizes="medium">
                이미지 전문가 , 나는 그 성능을 보증합니다. 전환율 향상 및 인지도 향상 이라는 매우 구체적인 목표를 충족합니다 .<br/><br/> 내 고객은 주로 이벤트, 문화 (음악가, 음반사 등) , 패션 (스타일링) 및 예술 공예 분야에서 활동하고 있습니다 . 나는 고객과 특권적이고 직접적인 관계를 유지합니다. 경청, 신뢰 및 장수에 도움이 되는 관계.
                  각 전문가는 개인화된 접근 방식을 받습니다 .<br/><br/> 우리는 함께 문<br/><br/>제와 요구 사항을 정의합니다. 그런 다음 자원 전략을<br/><br/> 정의하는 강점과 약점에 대한 감사를 수행합니다.<br/><br/><br/> 전체적인 시각적 일관성의 일부인 혁신적인 사용자 경험을 디자인하는 것이 나에게는 최우선 과제입니다.
                  내가 좋아하는 디자인은 미니멀하고
              </Text>
            </Box>
          </Box>
        </>
      );
}
