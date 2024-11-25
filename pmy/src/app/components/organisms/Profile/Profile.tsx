import React from "react";
import { Text } from "@/components/atoms/Text/Text";
import { Image } from "@/components/atoms/Image/Image";

export default function Profile() {
    return (
        <>
          <Text sizes="small" weights="bold">Hello</Text>
          <Text sizes="big" weights="bold">My name<br/>is Sia</Text>
          <Image
            sizes="large"
            url="./img/hi.png"
            />
          <Text style={{'paddingTop':25}} sizes="mediumlarge">
            나는 어떠어떠한 걸 지향한다 추후에 수정
          </Text>
        </>
      );
}
