"use client";

import Box from "@/components/layouts/Box/Box";
import Experience from "@/components/organisms/Experience/Experience";
import Introduction from "@/components/organisms/Introduction/Introduction";
import Connect from "@/components/organisms/Connect/Connect";

export default function Resume() {
  return (
    <>
        <Box
          width="100%"
          border= "1px solid blue"
          height="calc(100vh - 170px)"
          margin="0"
          responsive = {{
            display: {
              desktop: 'flex',
              tablet: 'flex',
              mobile: 'block',
            }
          }}
        >
           <Box 
              border="1px solid" 
              display="flex" 
              direction="column"
              width="40%" 
              padding={38}
              >
            <Experience/>  
           </Box>
           <Box 
              border="1px solid" 
              display="flex" 
              direction="column"
              width="40%" 
              padding={38}
              >
            <Experience/>  
           </Box>
           <Box 
              border="1px solid" 
              display="flex" 
              direction="column"
              width="40%" 
              padding={38}
              >
            <Experience/>  
           </Box>
        </Box>
    </>
  );
}
