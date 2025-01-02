import React from 'react';
import { Image } from '@/components/atoms/Image/Image';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  borderTopNone,
  borderBox,
  borderTop,
  paddingBox,
} from '@/styles/style.css';
import 'swiper/css';
import './styles.css';

export default function SwiperComp({ url }: string) {
  return (
    <>
      <Swiper slidesPerView={2.5} spaceBetween={30} className="mySwiper">
        <SwiperSlide>
          <Image
            className={borderBox}
            url="./img/projects/jandi/jandi.jpg"
            sizes="card"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={borderBox}
            url="./img/projects/jandi/jandi.jpg"
            sizes="card"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={borderBox}
            url="./img/projects/jandi/jandi.jpg"
            sizes="card"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={borderBox}
            url="./img/projects/jandi/jandi.jpg"
            sizes="card"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={borderBox}
            url="./img/projects/jandi/jandi.jpg"
            sizes="card"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={borderBox}
            url="./img/projects/jandi/jandi.jpg"
            sizes="card"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
