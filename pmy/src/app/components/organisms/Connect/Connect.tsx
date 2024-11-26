import React from "react";
import { Text } from "@/components/atoms/Text/Text";
import Box from "@/components/layouts/Box/Box";
import ConnectBox from "@/components/molecules/ConnectBox";

const Connect: React.FC = () => {
  return (
        <>
          <Box borderTop="1px solid">
            <Text sizes="largeX2" weights="bold" style={{'paddingBottom':40}}>Get in Touch</Text>
              <ConnectBox/>
          </Box>
        </>
  );
};

export default Connect;
