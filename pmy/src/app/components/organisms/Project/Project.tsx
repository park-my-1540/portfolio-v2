import React from "react";
import { Text } from "@/components/atoms/Text/Text";
import Box from "@/components/layouts/Box/Box";
import { Image } from "@/components/atoms/Image/Image";
import SwiperComp from "@/components/organisms/Swiper/SwiperComp";
export default function Project() {
    return (
        <>
          <Text sizes="largeX2" weights="bold" arrow={true}>Jandi</Text>
          <Box
            borderTop="1px solid"
            display="flex"
            direction="column"
            height="calc(100vh - 140px)"
            >
            <Box display="flex">
              <Box width="40%" padding="30px 30px 30px 0">
                <Text sizes="large" weights="light" arrow={true}>Company</Text>
                <Box border="1px solid" padding={10} marginTop={20} borderRadius={34}>
                  <Image url="./img/pmy.jpg" sizes="smallmedium" radius="circle"/>
                </Box>
              </Box>

              <Box borderLeft="1px solid" padding="30px 0 30px 30px">
                <Text sizes="large" weights="light" arrow={true}>잔디</Text>
                <Text weights="light">2023.11~</Text>
                <Text>
                  회사소개 2021년 12월 출범부터 지금까지 가파르게 성장하여 800만이상의 고객수를 보유하고 있는제1금융 인터넷전문은행입니다.
                  프론트엔드 포지션으로 목돈 굴리기 서비스의 신규 개발 및 유지보수를 담당하고 있습니다.
                </Text>
              </Box>
            </Box>
            <Box borderTop="1px solid">
              <Box>
                  <Text sizes="large" weights="light" arrow={true}>업무</Text>
                  <Box>
                    <SwiperComp/>
                  </Box>
              </Box>
            </Box>
          </Box>
        </>
      );
}
