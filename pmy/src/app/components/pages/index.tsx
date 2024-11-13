"use client";

import { useRef } from "react";
import MatterComponent from "@/components/oranisms/Main/MatterComponent";
import Box from "@/components/layouts/Box/Box";
import Profile from "@/components/oranisms/Profile/Profile";
import Header from "@/components/oranisms/Header/Header";
export default function Home() {
  const canvasRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/pathseg@1.2.1/pathseg.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/poly-decomp@0.3.0/build/decomp.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.17.1/matter.js"></script>
        <Header/>
        <Box
          margin="0"
          responsive = {{
            display: {
              desktop: 'flex',
              tablet: 'flex',
              mobile: 'block',
            }
          }}
        >
          <Profile/>
          <MatterComponent canvasRef = {canvasRef}/>
        </Box>
    </>
  );
}
