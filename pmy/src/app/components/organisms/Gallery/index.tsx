import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import useOnScreen from '@/utils/hook/useOnScreen';
import { GalleryItemProps } from '@/types/common';
import * as animate from '@/utils/animate';
import Box from '@/components/layouts/Box/Box';
import cn from 'classnames';
import './style.css';
import { useAtomValue } from 'jotai';
import { galleryListState } from '@/jotai/galleryListAtom';

function GalleryItem({
  img,
  type,
  position,
  service,
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

  const goDetail = (type: string) => {
    sessionStorage.setItem('detail', type);
    animate.pageOut(`/project/${type}`, router);
  };

  return (
    <div
      onClick={() => goDetail(type)}
      className={cn('gallery-item-wrapper', { 'is-reveal': onScreen })}
      ref={ref}
    >
      <div></div>
      <Box width="100%" height="100%">
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h2 className="gallery-info-subtitle">{service}</h2>
          <p className="gallery-info-category">{position}</p>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${img})` }}
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
  const list = useAtomValue(galleryListState);

  return (
    <section data-scroll-section className="section-wrapper gallery-wrap">
      <div className="gallery">
        <div className="gallery-counter">
          <span>{activeImage}</span>
          <span className="divider" />
          <span>{list.length}</span>
        </div>
        {list.map((image, index) => (
          <GalleryItem
            key={`${image}-${index}`}
            index={index}
            {...image}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </div>
    </section>
  );
}
