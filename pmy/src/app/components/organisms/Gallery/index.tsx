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
import { Text, TextTitle } from '@/components/atoms/Text/Text';
import * as style from './gallery.css';

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
        <Box className={style.galleryItemInfo}>
          <TextTitle sizes="title">{title}</TextTitle>
          <TextTitle className={style.galleryInfoSubtitle} sizes="title">
            {service}
          </TextTitle>
          <Text sizes="mediumlargeX2">{position}</Text>
        </Box>
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
    <section data-scroll-section className={style.galleryWrap} id="project">
      <Box className={`${style.gallery} gallery`}>
        <Box className={style.galleryCounter}>
          <span>{activeImage}</span>
          <Box className={style.divider} />
          <span>{list.length}</span>
        </Box>
        {list.map((image, index) => (
          <GalleryItem
            key={`${image}-${index}`}
            index={index}
            {...image}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </Box>
    </section>
  );
}
