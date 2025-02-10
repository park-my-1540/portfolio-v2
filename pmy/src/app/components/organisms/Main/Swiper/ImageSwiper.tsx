import React from 'react';
import { SwiperRef } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
} from 'swiper/modules';

interface SwiperProps {
  onSlideChange: (index: number) => void;
  swiperRef: React.RefObject<SwiperRef>;
  pages: React.ReactNode[];
}

export default function ImageSwiper({
  swiperRef,
  pages,
  onSlideChange,
}: SwiperProps) {
  return (
    <Swiper
      direction={'vertical'}
      speed={1000}
      slidesPerView={1}
      spaceBetween={5}
      modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
      navigation={{
        nextEl: '.main-next',
        prevEl: '.main-prev',
      }}
      scrollbar={{ draggable: true }}
      onSlideChange={(swiper) => onSlideChange(swiper.realIndex)}
      mousewheel={true}
      keyboard={true}
      ref={swiperRef}
    >
      {pages.map((page, index) => (
        <SwiperSlide key={index}>{page}</SwiperSlide>
      ))}
    </Swiper>
  );
}
