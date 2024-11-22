import React from "react";
import { Text } from "@/components/atoms/Text/Text";
import Box from "@/components/layouts/Box/Box";
import ConnectBox from "@/components/molecules/ConnectBox";

const Connect: React.FC = () => {
  return (
        <>
          <Box borderTop="1px solid">
            <Text sizes="largeX2" weights="bold" style={{'paddingBottom':40}}>Get in Touch</Text>
            <Box display="block" padding={30} border="1px solid" borderRadius={43}>
              <Box>
            <ConnectBox></ConnectBox>
          </Box>
            </Box>
          </Box>
        </>
  );
};

export default Connect;
