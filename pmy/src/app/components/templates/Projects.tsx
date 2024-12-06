"use client";

import Box from "@/components/layouts/Box/Box";
import { ResponsiveBox } from "@/components/layouts/ResponsiveBox/ResponsiveBox";
import Project from "@/components/organisms/Project/Project";
import Connect from "@/components/organisms/Connect/Connect";

export default function About() {
  return (
    <>
        <Box
          justify="end"
          margin="0"
          responsive = {{
            display: {
              desktop: 'flex',
              tablet: 'flex',
              mobile: 'block',
            },
            height: {
              desktop: 'full',
              tablet: 'full',
              mobile: 'full',
            }
          }}
        > 
          <ResponsiveBox
            padding="0 40px"
            direction="column"
            justify="around"
            >
            <Project/>
          </ResponsiveBox>
        </Box>
    </>
  );
}
