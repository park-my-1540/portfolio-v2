import React from 'react';
import { Image } from '@/components/atoms/Image/Image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { borderBox } from '@/styles/style.css';
import 'swiper/css';
import { swiperItem } from './index.css';

type SwiperCompProps = {
  image: string[];
};

export default function SwiperComp({ image }: SwiperCompProps) {
  return (
    <Swiper slidesPerView={1.5} spaceBetween={30} className={swiperItem}>
      {image.map((img, idx) => (
        <SwiperSlide key={idx}>
          <Image className={borderBox} url={img} sizes="slide" cover="cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
