import React from "react";
import { Text } from "@/components/atoms/Text/Text";
import Box from "@/components/layouts/Box/Box";
import { Image } from "@/components/atoms/Image/Image";

export default function Introduction() {
    return (
        <>
        <Box borderTop="1px solid">
          <Text sizes="largeX2" weights="bold" style={{'paddingBottom':40}}>Introduction</Text>
          <Box display="block" padding={30} border="1px solid" borderRadius={43}>
            <Text sizes="large" weights="bold">A Graphic Desginer</Text>
            <Box display="flex" justify="between">
              <Text style={{'paddingTop':25}} sizes="mediumlarge">
                사용자들이 즐거움을 느끼며 사용하고 싶은 다이나믹한 UI를 개발하는 것에<br/> 가장 즐거움을 느낍니다.
                <br/>
                프론트엔드 개발자가 되기 위해 리액트에 많은 시간을 투자하고 있습니다.
                <br/>
                <br/>
                정체되지 않고 계속해서 발전하는 사람이 되고싶습니다.
              </Text>
              <Image
                sizes="medium"
                url="./img/mac.png"/>
            </Box>
          </Box>
        </Box>
        </>
      );
}
