import React from "react";
import Box from "@/components/layouts/Box/Box";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { CardIcon } from "@/components/molecules/Card/Card";
import { IconText } from "@/components/atoms/Icon/IconText";

export default function ConnectBox() {
    return (
        <>
          <Box display="flex" direction="row" gap="mediumX2">
            <CardIcon
              theme="black"
              email="parkmy722698@gmail.com"
              title={<IconText icon={faEnvelope} fontSize="48px" color='accent'/>}
              />
            <CardIcon
              theme="highlight"
              email="https://github.com/park-my-1540"
              title={<IconText icon={faGithub} fontSize="48px" color='accent'/>}
              />
            <CardIcon
              theme="default"
              email="Freelance"
              title="Notion"
              />
          </Box>
        </>
      );
}
