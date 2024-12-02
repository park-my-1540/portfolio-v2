import React, { useRef, useEffect } from "react";
import { useAtomValue } from "jotai";
import { viewState } from "@/jotai/viewAtom";
import Box from "@/components/layouts/Box/Box";
import { Text } from "@/components/atoms/Text/Text";
import { Image } from "@/components/atoms/Image/Image";
import * as gsapUtil from "@/utils/gsapUtil";

export default function Introduction() {

  const {currentIdx, currentPage} = useAtomValue(viewState);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>(Array().fill(null));

    // GSAP 애니메이션 초기화
    useEffect(() => {
      textRefs.current.forEach((item) => {
        if (item) {
          gsapUtil.horizontalClip(item); // 각각의 li 태그에 애니메이션 적용
          console.log(item)
        }
      });
      return() => {
        textRefs.current.forEach((item) => {
          if (item) gsap.killTweensOf(item); // 애니메이션 정리
        });
      }
    }, []);

    useEffect(() => {
      setTimeout(() => {
        textRefs.current.forEach((item) => {
          if (item) gsapUtil.horizontalClip(item); // currentPage 변경 시 재적용
        });
      }, 500);
    
  }, [currentIdx]);
  
  

    return (
        <>
        <Box borderTop="1px solid">
          <Text 
            ref={(el) => {
              textRefs.current[0] = el;
            }} 
            sizes="largeX2" 
            weights="bold" 
            style={{'paddingBottom':40}}>Introduction</Text>

          <Box display="block" padding={30} border="1px solid" borderRadius={43}>
            <Text 
               ref={(el) => {
                textRefs.current[1] = el;
              }} 
              sizes="large" 
              weights="bold">A Graphic Desginer</Text>

            <Box display="flex" justify="between">
              <Text  
                 ref={(el) => {
                  textRefs.current[2] = el;
                }} 
                style={{'paddingTop':25}} 
                sizes="mediumlarge">
                사용자들이 즐거움을 느끼며 사용하고 싶은 다이나믹한 UI를 개발하는 것에<br/> 가장 즐거움을 느낍니다.
                <br/>
                프론트엔드 개발자가 되기 위해 리액트에 많은 시간을 투자하고 있습니다.
                <br/>
                <br/>
                정체되지 않고 계속해서 발전하는 사람이 되고싶습니다.
              </Text>
              <Image sizes="medium" url="./img/mac.png"/>
            </Box>
          </Box>
        </Box>
        </>
      );
}
