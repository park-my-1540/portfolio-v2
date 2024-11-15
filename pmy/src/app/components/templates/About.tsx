"use client";

import Box from "@/components/layouts/Box/Box";
import Profile from "@/components/organisms/Profile/Profile";
import Introduction from "@/components/organisms/Introduction/Introduction";
import Connect from "@/components/organisms/Connect/Connect";

export default function About() {
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
              borderRadius={42}
              width="40%" 
              display="flex" 
              direction="column"
              >
            <Profile/>  
           </Box>
          <Box
            width="60%"
            direction="column"
            justify="around"
            responsive = {{
            display: {
              desktop: 'flex',
              tablet: 'flex',
              mobile: 'block',
            }
          }}>
            <Introduction/>
            <Connect/>
          </Box>
        </Box>
    </>
  );
}
