import React from "react";
import { Text } from "@/components/atoms/Text/Text";
import Box from "@/components/layouts/Box/Box";

export default function Profile() {
    return (
        <>
          <Text sizes="small" weights="bold">Hello</Text>
          <Text sizes="big" weights="bold">My name<br/>is Sia</Text>
          <Box display="block">
            <Text style={{'paddingTop':25}} sizes="mediumlarge">
                나는 어떠어떠한 걸 지향한다 추후에 수정
            </Text>
        </Box>
        </>
      );
}
