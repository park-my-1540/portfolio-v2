import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import useOnScreen from '@/hook/useOnScreen';
import { ProjectItemProps, ProjectContentProps } from '@/types/common';
import * as animate from '@/utils/animate';
import Box from '@/components/layouts/Box/Box';
import cn from 'classnames';
import './style.css';
import { useAtomValue } from 'jotai';
import { galleryListState } from '@/jotai/galleryListAtom';
import { Text, TextTitle } from '@/components/atoms/Text/Text';
import * as style from './gallery.css';
import * as cursor from '@/utils/cursor';

const GalleryContent = ({ title, service, position }: ProjectContentProps) => {
  return (
    <>
      <TextTitle sizes="title" weights="bold">
        {title}
      </TextTitle>
      <TextTitle
        className={style.galleryInfoSubtitle}
        color="transparent"
        sizes="title"
        weights="bold"
      >
        {service}
      </TextTitle>
      <Text sizes="large" weights="bold" style={{ marginTop: 5 }}>
        {position}
      </Text>
    </>
  );
};

function GalleryItem({ updateActiveImage, index, ...rest }: ProjectItemProps) {
  const router = useRouter();
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, 0.5);

  const { type, img, ...item } = rest;

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
      className={cn(
        'gallery-item-wrapper',
        { 'is-reveal': onScreen },
        `${style.galleryContainer}`,
      )}
      ref={ref}
    >
      <div></div>
      <Box width="100%" height="100%" className="sia">
        <Box className={style.galleryItemInfo}>
          <MemorizedGalleryContent {...item} />
        </Box>
        <div
          onClick={() => goDetail(type)}
          className="gallery-item-image"
          onMouseEnter={() => cursor.set('project')}
          onMouseLeave={() => cursor.set(null)}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </Box>
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
      <Box className={`${style.gallery} gallery`} data-scroll-speed="10">
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
