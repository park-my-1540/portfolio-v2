import React from "react";
import { Text } from "@/components/atoms/Text/Text";
import Box from "@/components/layouts/Box/Box";
import { header } from "./header.css";
import { BaseProps } from "@/types/common";
import { Image } from "@/components/atoms/Image/Image";


export function Header({ currentPage }:BaseProps) {
  return (
    <header>
    {
      currentPage === "main" ? (
        <Box 
          className={header}
          display="flex" 
          direction="row" 
          align="center" 
          justify="between" 
          gap="large" 
          padding={20}
          height={85}
          >
          <Box display="flex" direction="row" align="center">
            <Image url="./img/pmy.jpg" sizes="small" style={{'borderRadius':"50%", "marginRight": 15}}/>
            <Text sizes="large">Mee young</Text>
          </Box>
      </Box>
      ) : (
        <Box 
          className={header}
          display="flex" direction="row" align="start" gap="large" height={85}  padding={20}>
          <Text weights="light" color="tertiary" sizes="mediumlargeX2">About Me</Text>
          <Text weights="light" color="tertiary" sizes="mediumlargeX2">Resume</Text>
          <Text weights="light" color="tertiary" sizes="mediumlargeX2">Work</Text>
        </Box>
      )
    }
  </header>
  )
}

export default Header;
