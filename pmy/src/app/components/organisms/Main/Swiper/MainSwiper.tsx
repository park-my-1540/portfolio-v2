import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { swiperContainer, bullet } from "@/styles/style.css";
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/scrollbar';
// import 'swiper/css/mousewheel';

interface MainSwiperProps {
  onSlideChange: (index: number) => void;
  swiperRef: React.RefObject<HTMLDivElement>;
  pages: React.ReactNode[];
}

export default function MainSwiper({
  swiperRef,
  pages,
  onSlideChange,
}: MainSwiperProps) {

  
  return (
    <Swiper 
    className={swiperContainer}
    direction={'vertical'}  
      speed = {1000}
      slidesPerView={1}
      spaceBetween={5}
      modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
      navigation={{
        nextEl: '.main-next',
        prevEl: '.main-prev'
      }} 
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={(swiper) => onSlideChange(swiper.realIndex)}
      mousewheel={true}
      keyboard={true}
      ref={swiperRef}
      pagination={{
          el: '.main-pagination',
          clickable:true,
          renderBullet: function (index, className) {
            return `<button type="button" class="${className} ${bullet}"></button>`;
          },
      }}>
      {pages.map((page, index) => (
        <SwiperSlide key={index}>{page}</SwiperSlide>
      ))}
  
  </Swiper>
  )
}