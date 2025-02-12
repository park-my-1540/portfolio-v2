import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import useOnScreen from '@/hook/useOnScreen';
import { GalleryItemProps, GalleryContentProps } from '@/types/common';
import * as animate from '@/utils/animate';
import Box from '@/components/layouts/Box/Box';
import cn from 'classnames';
import './style.css';
import { useAtomValue } from 'jotai';
import { galleryListState } from '@/jotai/galleryListAtom';
import { Text, TextTitle } from '@/components/atoms/Text/Text';
import * as style from './gallery.css';

const GalleryContent = ({
  title,
  service,
  position,
  img,
}: GalleryContentProps) => {
  return (
    <Box width="100%" height="100%">
      <Box className={style.galleryItemInfo}>
        <TextTitle sizes="title" color="primary" family="roboto">
          {title}
        </TextTitle>
        <TextTitle
          className={style.galleryInfoSubtitle}
          color="transparent"
          sizes="title"
          family="roboto"
        >
          {service}
        </TextTitle>
        <Text sizes="mediumlargeX2" color="primary" family="roboto">
          {position}
        </Text>
        <button className={style.btnDefault}>ABOUT</button>
      </Box>
      <div
        className="gallery-item-image"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </Box>
  );
};

function GalleryItem({ updateActiveImage, index, ...rest }: GalleryItemProps) {
  const router = useRouter();
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, 0.5);

  const { type, ...item } = rest;

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  const goDetail = (type: string) => {
    sessionStorage.setItem('detail', type);
    animate.pageOut(`/project/${type}`, router);
  };
  const MemorizedGalleryContent = React.memo(GalleryContent);
  return (
    <div
      onClick={() => goDetail(type)}
      className={cn(
        'gallery-item-wrapper',
        { 'is-reveal': onScreen },
        `${style.galleryContainer}`,
      )}
      ref={ref}
    >
      <div></div>
      <MemorizedGalleryContent {...item} />
      <div></div>
    </div>
  );
}

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(1);

  const handleUpdateActiveImage = useCallback((index: number) => {
    setActiveImage(index + 1);
  }, []);
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
