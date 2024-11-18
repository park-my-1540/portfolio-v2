"use client";
import { useRef, useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import Header from "@/components/organisms/Header/Header";
import Footer from "@/components/organisms/Footer/Footer";
import { swiperContainer } from "@/styles/style.css";

import MainPage from "./MainPage";
import AboutPage from "./AboutPage";
import ResumePage from "./ResumePage";
import Box from "../layouts/Box/Box";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';

export default function Home() {
  const swiperRef = useRef<HTMLDivElement>(null);
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const enumPage = ["main", "about", "some"] as const;


  useEffect(()=> {
    console.log('dd')
  },[currentIdx])

  return (
    <>
    <Header pageIndex={enumPage[currentIdx]}/>
     <Swiper 
      className={swiperContainer}
       direction={'vertical'}  
          speed = {1000}
          slidesPerView={1}
          spaceBetween={5}
          modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={(swiper) => setCurrentIdx(swiper.realIndex)}
          mousewheel={true}
          keyboard={true}
          // pagination={{
          //     el: '.main-pagination',
          //     clickable:true,
          //     renderBullet: function (index, className) {
          //       return `<span class="${className}">  ${index ===0 ? 'Home' : (0)}</span>`;
          //     },
          // }} 
          ref={swiperRef}>
            <SwiperSlide>
              <MainPage/>
            </SwiperSlide>
            <SwiperSlide>
              <AboutPage/>
            </SwiperSlide>
            <SwiperSlide>
              <ResumePage/>
            </SwiperSlide>
    </Swiper>

    {/* <Footer/> */}
    </>
  );
}
