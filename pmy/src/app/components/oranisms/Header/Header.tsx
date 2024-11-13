import React from "react";
import { Text } from "@/components/atoms/Text/Text";
import Flex from "@/components/layouts/Flex/Flex";
import Box from "@/components/layouts/Box/Box";
import { sprinkles } from "@/styles/common/sprinkles.css"; // sprinkles import

const Header: React.FC = () => {
  return (
        <header>
            <Box display="flex" direction="row" align="center" justify="between" gap="small" height={85}>
                <Text>mee young</Text>
                <Text>Frontend Portfolio</Text>
            </Box>
        </header>
  );
};

export default Header;
