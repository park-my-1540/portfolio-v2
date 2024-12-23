import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { swiperContainer, bullet } from "./swiper.css";
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules';
import { SwiperProps } from "@/types/common";

export default function MainSwiper({
  swiperRef,
  pages,
  onSlideChange,
}: SwiperProps) {

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