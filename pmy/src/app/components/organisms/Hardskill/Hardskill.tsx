import React from "react";
import { Text } from "@/components/atoms/Text/Text";
import { CardImages } from "@/components/molecules/Card/Card";

const hardskills = [
  {
    type: 'react',
    url: './svg/hardskill/react.svg'
  },
  {
    type: 'javascript',
    url: './svg/hardskill/javascript.svg'
  },
  {
    type: 'angularjs',
    url: './svg/hardskill/angularjs.svg'
  },
  {
    type: 'html',
    url: './svg/hardskill/html.svg'
  },
  {
    type: 'css',
    url: './svg/hardskill/css.svg'
  },
]

export default function HardSkill() {
    return (
        <>
          <Text sizes="largeX2" weights="bold">HardSkill</Text>
          <CardImages
            theme="dark"
            hardskills={hardskills}
          />
        </>
      );
}
