"use client";

import { useRef } from "react";
import MatterComponent from "@/components/organisms/Main/MatterComponent";
import Box from "@/components/layouts/Box/Box";
import Side from "@/components/organisms/Side/Side";
export default function Main() {
  const canvasRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/pathseg@1.2.1/pathseg.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/poly-decomp@0.3.0/build/decomp.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.17.1/matter.js"></script>
        <Box
          border= "1px solid red"
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
          <Side/>
          <MatterComponent canvasRef = {canvasRef}/>
        </Box>
    </>
  );
}
