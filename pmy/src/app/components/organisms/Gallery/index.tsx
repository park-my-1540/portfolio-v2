import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useRouter } from 'next/navigation';
import useOnScreen from '@/utils/hook/useOnScreen';
import { GalleryItemProps } from '@/types/common';
import * as animate from '@/utils/animate';
import Box from '@/components/layouts/Box/Box';
import cn from 'classnames';
import './style.css';
import { useAtomValue } from 'jotai';
import { viewState } from '@/jotai/viewAtom';

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

  const { locoScroll } = useAtomValue(viewState);
  const goDetail = () => {
    if (!locoScroll) {
      return;
    }
    // sessionStorage.setItem(
    //   'scrollPositionY',
    //   locoScroll.scroll.instance.scroll.y,
    // );
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

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(1);

  const handleUpdateActiveImage = (index: number) => {
    setActiveImage(index + 1);
  };

  return (
    <section data-scroll-section className="section-wrapper gallery-wrap">
      <div className="gallery">
        <div className="gallery-counter">
          <span>{activeImage}</span>
          <span className="divider" />
          <span>{images.length}</span>
        </div>
        {images.map((image, index) => (
          <GalleryItem
            key={`${image.src}-${index}`} // 고유한 key 생성
            index={index}
            {...image}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </div>
    </section>
  );
}
