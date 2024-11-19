import React from "react";
import Hashtag from "@/components/molecules/Hashtag/Hashtag";
import { arrow } from "./side.css";
import Box from "@/components/layouts/Box/Box";
const Side: React.FC = () => {
  return (
       <>
        <Box 
          align="end"
          justify="end"
          display="flex"
          direction="column"
          width="25%"
          marginRight={50}
          >
          <div className={arrow}></div>
          <Hashtag/>
        </Box>
       </>
  );
};

export default Side;
