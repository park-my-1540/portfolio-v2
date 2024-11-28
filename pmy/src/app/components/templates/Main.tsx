"use client";

import { useRef } from "react";
import Matter from "@/components/organisms/Main/Matter/Matter";
import Box from "@/components/layouts/Box/Box";

export default function Main() {
  const canvasRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <script src="https://www.jsdelivr.com/package/npm/poly-decomp"></script>
      <script src="https://cdn.jsdelivr.net/npm/pathseg@1.2.1/pathseg.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/poly-decomp@0.3.0/build/decomp.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.17.1/matter.js"></script>

        <Box
          height="calc(100vh - 85px)"
          margin="0"
          padding='30px 0px 30px 140px'
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
          <Matter canvasRef = {canvasRef}/>
          {/* <Side/> */}
        </Box>
    </>
  );
}
