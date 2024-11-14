import React from "react";
import { Text } from "@/components/atoms/Text/Text";
import Box from "@/components/layouts/Box/Box";

const Header: React.FC = () => {
  return (
        <header>
            <Box display="flex" direction="row" align="center" justify="between" gap="small" height={85}>
                <Text>mee young</Text>
                <Text>폰트를 봅시다잇 이미 글씨체가 너무 이뻐요</Text>
            </Box>
        </header>
  );
};

export default Header;
