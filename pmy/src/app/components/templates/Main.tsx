"use client";
import Matter from "@/components/organisms/Main/Matter/Matter";
import Box from "@/components/layouts/Box/Box";

export default function Main() {
  return (
    <>
      <script src="https://www.jsdelivr.com/package/npm/poly-decomp"></script>
      <script src="https://cdn.jsdelivr.net/npm/pathseg@1.2.1/pathseg.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/poly-decomp@0.3.0/build/decomp.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.17.1/matter.js"></script>

        <Box
          margin="0"
          justify="center"
          responsive = {{
            display: {
              desktop: 'flex',
              tablet: 'flex',
              mobile: 'block',
            },
            width: {
              desktop: 'full',
              tablet: 'shrink',
              mobile: 'full',
            }
          }}
        >
          {/* <Matter/> */}
        </Box>
    </>
  );
}
