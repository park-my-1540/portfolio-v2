import React from "react";
import { Text } from "@/components/atoms/Text/Text";
import Card from "@/components/molecules/Card/Card";

export default function Experience() {
    return (
        <>
          <Text sizes="largeX2" weights="bold" arrow={true}>EXPERIENCE</Text>
          <Card
            theme="accent"
            badge="2022-Present"
            subTitle="프론트엔드 개발자"
            title="Jandi"
            duration="Nov~Present"
            />
          <Card
            theme="dark"
            badge="2022"
            subTitle="퍼블리셔"
            title="Adcapsule"
            duration="Nov~Present"
            />
        </>
      );
}
