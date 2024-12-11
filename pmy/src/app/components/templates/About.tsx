'use client';

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Box from '@/components/layouts/Box/Box';
import Introduction from '@/components/organisms/Introduction/Introduction';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // Register GSAP ScrollTrigger plugin

export default function About() {
  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      gsap.from('.line-2', {
        scrollTrigger: {
          trigger: '.orange',
          scroller: '#main-container',
          scrub: true,
          pin: true,
          start: 'top top',
          end: '+=100%',
        },
        scaleX: 0,
        transformOrigin: 'left center',
        ease: 'none',
      });
      ScrollTrigger.refresh();
    });
  }, []);

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
