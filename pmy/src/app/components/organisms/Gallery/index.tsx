import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import useOnScreen from '@/utils/hook/useOnScreen';
import cn from 'classnames';
import { GalleryProps, GalleryItemProps } from '@/types/common';
import './style.css';
import Box from '@/components/layouts/Box/Box';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100',
    title: '111 Dracaena Trifasciata',
    subtitle: 'Live the Beauty',
    category: 'Shooting / Adv.Campaing',
  },
  {
    src: 'https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100',
    title: '222 Cereus Penuvianus',
    subtitle: 'Live the Beauty',
    category: 'Shooting / Adv.Campaing',
  },
];
function GalleryItem({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
}: GalleryItemProps) {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div
      className={cn('gallery-item-wrapper', { 'is-reveal': onScreen })}
      ref={ref}
    >
      <div></div>
      <Box width="100%" height="100%">
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h2 className="gallery-info-subtitle">{subtitle}</h2>
          <p className="gallery-info-category">{category}</p>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </Box>
      <div></div>
    </div>
  );
}

export default function Gallery({ src, title }: GalleryProps) {
  const [activeImage, setActiveImage] = useState(1);

  const ref = useRef(null);

  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      let sections = gsap.utils.toArray('.gallery-item-wrapper');
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          scroller: '#main-container',
          pin: true,
          scrub: true,
          start: 'top top',
          end: () =>
            `+=${document.querySelector('.horizontal-container')?.scrollWidth!}`,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  const handleUpdateActiveImage = (index: number) => {
    setActiveImage(index + 1);
  };

  return (
    <section className="gallery-wrap" ref={ref}>
      <div className="gallery horizontal-container">
        <div className="gallery-counter">
          <span>{activeImage}</span>
          <span className="divider" />
          <span>{images.length}</span>
        </div>
        {images.map((image, index) => (
          <GalleryItem
            key={index}
            index={index}
            {...image}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </div>
    </section>
  );
}
