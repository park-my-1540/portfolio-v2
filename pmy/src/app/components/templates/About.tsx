'use client';

import Box from '@/components/layouts/Box/Box';
import Introduction from '@/components/organisms/Introduction/Introduction';

export default function About() {
  return (
    <>
      <section className="panel orange color-light">
        <div>
          <span className="line line-2"></span>
          <Box display="flex">
            <Box display="flex" direction="column">
              <Introduction />
            </Box>
          </Box>
        </div>
      </section>
    </>
  );
}
