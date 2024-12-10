"use client";
import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Box from "@/components/layouts/Box/Box";
import Main from "@/components/organisms/Project/Main/Main";
import Column from "@/components/organisms/Project/Column/Column";

gsap.registerPlugin(ScrollTrigger);

export default function Project() {

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });
    
    locoScroll.on("scroll", ScrollTrigger.update);


  }, []);
  return (
    <>
        <Box
          ref={containerRef}
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
            gridColumnGap:"medium"
          }}>
            <Column/>
            <Main/>
        </Box>
    </>
  )
}
