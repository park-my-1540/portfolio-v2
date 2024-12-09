import React from "react";
import { useAtomValue } from "jotai";
import { viewState } from "@/jotai/viewAtom";
import { Text } from "@/components/atoms/Text/Text";
import Box from "@/components/layouts/Box/Box";
import { header } from "./header.css";
import { Image } from "@/components/atoms/Image/Image";

export function Header() {
  return (
    <header>
      <Box 
          className={header}
          display="flex" 
          direction="row" 
          align="center" 
          justify="between" 
          gap="large" 
          padding={20}
          height={40}
          >
          <Box display="flex" direction="row" align="center">
            <Text sizes="small">Mee young</Text>
          </Box>
      </Box>
  </header>
  )
}

export default Header;
