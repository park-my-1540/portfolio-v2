'use client';

import Box from '@/components/layouts/Box/Box';
import Experience from '@/components/organisms/Experience/Experience';
import HardSkill from '@/components/organisms/Hardskill/Hardskill';
import { ResponsiveBox } from '@/components/layouts/ResponsiveBox/ResponsiveBox';

export default function Resume() {
  return (
    <>
      <Box
        justify="end"
        align="stretch"
        height="100%"
        responsive={{
          display: {
            desktop: 'flex',
            tablet: 'flex',
            mobile: 'block',
          },
        }}
      >
        {/* <ResponsiveBox gap="mediumX2">
              <Box 
                  display="flex" 
                  direction="column"
                  width="100%"
                  >
                <Experience/>  
              </Box>
              <Box 
                  display="flex" 
                  direction="column"
                  width="100%"
                  >
                <HardSkill/>  
              </Box>
              <Box 
                  display="flex" 
                  direction="column"
                  width="100%"
                  >
                <Experience/>  
              </Box>
            </ResponsiveBox> */}
      </Box>
    </>
  );
}
