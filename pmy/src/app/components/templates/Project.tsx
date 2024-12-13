'use client';
import React from 'react';
import Box from '@/components/layouts/Box/Box';
import Main from '@/components/organisms/Project/Main/Main';
import Column from '@/components/organisms/Project/Column/Column';

export default function Project() {
  return (
    <>
      <div className="project">
        <Box
          margin="0.5rem"
          display="grid"
          responsive={{
            gridTemplateColumns: {
              desktop: 'oneThree',
              tablet: 'two',
              mobile: 'single',
            },
            gridTemplateRows: {
              desktop: 'single',
              tablet: 'single',
              mobile: 'single',
            },
            gridColumnGap: 'medium',
          }}
        >
          <Column />
          <Main />
        </Box>
      </div>
    </>
  );
}
