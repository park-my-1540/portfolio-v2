import React from "react";
import { Text } from "@/components/atoms/Text/Text";
import Box from "@/components/layouts/Box/Box";

export default function Introduction() {
    return (
        <>
        <Box borderTop="1px solid">
          <Text sizes="largeX2" weights="bold" style={{'paddingBottom':40}}>Introduction</Text>
          <Box display="block" padding={30} border="1px solid" borderRadius={43}>
            <Text sizes="large" weights="bold">A Graphic Desginer</Text>
            <Text style={{'paddingTop':25}} sizes="mediumlarge">
              페이지의 전체 레이아웃을 Flexbox로 구성할 수 있습니다. 예를 들어, MainTemplate에서 Header, MainContent, Sidebar, Footer를 Flexbox로 배치하여 레이아웃을 구성합니다.
              예시: MainTemplate에서 Flexbox를 사용해 페이지의 헤더, 본문, 사이드바를 배치하는 구조.
            </Text>
          </Box>
        </Box>
        </>
      );
}
