import React from 'react';
import { Image } from '@/components/atoms/Image/Image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { borderX } from '@/styles/style.css';
import { bg } from '@/styles/style.css';
import cn from 'classnames';
import { swiperFirstItem } from './index.css';
import 'swiper/css';

type SwiperCompProps = {
  image: string[];
};

export default function SwiperComp({ image }: SwiperCompProps) {
  return (
    <Swiper slidesPerView={1.5} spaceBetween={30}>
      {image.map((img, idx) => (
        <SwiperSlide
          key={idx}
          className={cn({ [swiperFirstItem]: idx === 0 }, borderX, bg)}
        >
          <Image url={img} sizes="slide" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
