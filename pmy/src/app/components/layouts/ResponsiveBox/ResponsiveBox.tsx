import React from "react";
import Box from "@/components/layouts/Box/Box";

type ResponsiveBoxProps = {
  children: React.ReactNode;
  width?: string;
  border?: string;
  padding?: number | string;
};

export const ResponsiveBox = ({ children, width = "100%", padding = 30, ...rest }: ResponsiveBoxProps) => (
  <Box
    {...rest}
    responsive={{
      display: {
        desktop: "flex",
        tablet: "flex",
        mobile: "block",
      },
      width: {
        desktop: 'expanded',
        tablet: 'shrink',
        mobile: 'full',
      },
    }}
    padding={padding}
  >
    {children}
  </Box>
);
