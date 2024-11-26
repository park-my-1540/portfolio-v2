"use client";
import { useRef, useState, useEffect } from "react";

import Navigation from "@/components/organisms/Aside/Navigation";
import MainSwiper from "@/components/organisms/Main/Swiper/MainSwiper";
import Header from "@/components/organisms/Header/Header";

import MainPage from "./MainPage";
import AboutPage from "./AboutPage";
import ResumePage from "./ResumePage";


export default function Home() {
  const swiperRef = useRef<HTMLDivElement>(null);
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const enumPage = ["main", "about", "some"] as const;
  const pages = [<MainPage />, <AboutPage />, <ResumePage />];

  useEffect(()=> {
  },[currentIdx])

  return (
    <>
    <Header pageIndex={enumPage[currentIdx]}/>

    <Navigation
        enumPage={enumPage}
        currentIdx={currentIdx}
        onBulletClick={(index) => swiperRef.current?.swiper.slideTo(index)}
      />
    <MainSwiper
      onSlideChange={(index) => setCurrentIdx(index)}
      swiperRef={swiperRef}
      pages={pages}
    />
    </>
  );
}
