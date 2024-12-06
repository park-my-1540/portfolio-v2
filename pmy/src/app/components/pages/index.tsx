"use client";
import { useRef, useState, useEffect } from "react";
import { SwiperRefType } from "@/types/swiper";
import Navigation from "@/components/organisms/Aside/Navigation";
import MainSwiper from "@/components/organisms/Main/Swiper/MainSwiper";
import Header from "@/components/organisms/Header/Header";
import ScrollIndicator from "@/components/organisms/ScrollIndicator/ScrollIndicator";
import { MatterBox } from "@/components/layouts/MatterBox/MatterBox";
import MainPage from "./MainPage";
import AboutPage from "./AboutPage";
import ResumePage from "./ResumePage";
import Projects from "./ProjectsPage";
import { viewState } from "@/jotai/viewAtom";
import { useSetAtom } from "jotai";

export default function Home() {
  const swiperRef = useRef<SwiperRefType>(null);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const enumPage = ["main", "about", "some"] as const;
  const pages = [<MainPage />, <AboutPage />, <ResumePage />, <Projects/>];

  const setViewState = useSetAtom(viewState);

  useEffect(()=> {
    setViewState({
    currentIdx: currentIdx,
    currentPage: enumPage[currentIdx]
    })
  },[currentIdx])

  return (
    <>
    <Header/>
    <Navigation
        slideRef={slideRef}
        enumPage={enumPage}
        onBulletClick={(index) => swiperRef.current?.swiper.slideTo(index)}
      />
    <MainSwiper
      onSlideChange={(index) => setCurrentIdx(index)}
      swiperRef={swiperRef}
      pages={pages}
    />
    <MatterBox/>
    <ScrollIndicator 
      slideRef={slideRef}/>
    </>
  );
}
