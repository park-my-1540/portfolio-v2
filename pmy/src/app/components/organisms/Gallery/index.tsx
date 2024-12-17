import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useRouter } from 'next/navigation';
import useOnScreen from '@/utils/hook/useOnScreen';
import { GalleryProps, GalleryItemProps } from '@/types/common';
import * as animate from '@/utils/animate';
import Box from '@/components/layouts/Box/Box';
import cn from 'classnames';
import './style.css';

const images = [
  {
    src: './img/projects/jandi/jandi.jpg',
    title: 'Jandi',
    subtitle: 'Toss Lab, Inc',
    category: 'Sass Provider',
  },
  {
    src: './img/projects/adc/adcapsule.jpg',
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
  const router = useRouter();
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  const goDetail = () => {
    animate.pageOut('/project', router);
  };

  return (
    <div
      onClick={goDetail}
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
    setTimeout(() => {
      const sections: HTMLElement[] = gsap.utils.toArray(
        '.gallery-item-wrapper',
      );
      const endVal = `+=${document.querySelector('.horizontal-container')?.scrollWidth!}`;

      animate.triggerHorizontalSections(sections, ref, endVal);
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
