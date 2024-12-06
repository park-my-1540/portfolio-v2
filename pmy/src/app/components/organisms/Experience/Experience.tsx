import React from "react";
import { Text } from "@/components/atoms/Text/Text";
import Card from "@/components/molecules/Card/Card";

export default function Experience() {
    return (
        <>
          <Text sizes="largeX2" weights="bold" arrow={true}>Experience</Text>
          <Card
            theme="accent"
            badge="2022-Present"
            subTitle="Freelance"
            title="Graphic Desinger(Logo,Brand)"
            duration="Nov~Present"
            />
          <Card
            theme="dark"
            badge="2022"
            subTitle="Freelance"
            title="Graphic Desinger(Logo,Brand)"
            duration="Nov~Present"
            />
          <Card
            theme="dark"
            badge="2022"
            subTitle="Freelance"
            title="Graphic Desinger(Logo,Brand)"
            duration="Nov~Present"
            />
        </>
      );
}
