"use client";

import { useRef } from "react";
import Box from "@/components/layouts/Box/Box";
import Profile from "@/components/organisms/Profile/Profile";
import Introduction from "@/components/organisms/Introduction/Introduction";
import Connect from "@/components/organisms/Connect/Connect";


export default function About() {
  const canvasRef = useRef<HTMLDivElement>(null);
  return (
    <>
        <Box
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
          <Profile/>
          <Box
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
