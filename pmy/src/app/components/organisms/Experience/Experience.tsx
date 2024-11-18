import React from "react";
import { Text } from "@/components/atoms/Text/Text";
import Box from "@/components/layouts/Box/Box";
import Card from "@/components/molecules/Card/Card";

export default function Experience() {
    return (
        <>
          <Text sizes="largeX2" weights="bold">Introduction</Text>
          <Card
            theme="blue"
            badge="2022-Present"
            subTitle="Freelance"
            title="Graphic Desinger(Logo,Brand)"
            duration="Nov~Present"
            />
          <Card
            theme="black"
            badge="2022"
            subTitle="Freelance"
            title="Graphic Desinger(Logo,Brand)"
            />
        </>
      );
}
