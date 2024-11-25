import React from "react";
import { Text } from "@/components/atoms/Text/Text";
import Box from "@/components/layouts/Box/Box";
import { hashtag } from "./hashtag.css"

export default function Hashtag() {
    return (
        <>
        <Box borderTop="1px solid" width="100%" paddingTop={35}>
          <Text color="primary" className={hashtag} weights="light" sizes="large">#Branding #Logo</Text>
          <Text color="primary" className={hashtag} weights="light" sizes="large">#Branding #Logo</Text>
          <Text color="primary" className={hashtag} weights="light" sizes="large">#Branding #Publisher</Text>
        </Box>
        </>
      );
}
