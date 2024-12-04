import React,{ useRef, useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { viewState } from "@/jotai/viewAtom";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { aside, pagination, list } from "./navigation.css";
import { IconText } from "@/components/atoms/Icon/IconText";
import { Text } from "@/components/atoms/Text/Text";
import { NavigationProps, PageType } from "@/types/common";
import Box from "@/components/layouts/Box/Box";
import * as gsapUtil from "@/utils/gsapUtil";

export default function Navigation({
  enumPage,
  slideRef,
  onBulletClick,
}: NavigationProps) {

  const {currentIdx, currentPage} = useAtomValue(viewState);

  const asideRef = useRef<HTMLDivElement>(null)
  const listRefs = useRef<(HTMLButtonElement | null)[]>(Array().fill(null));

  const asideAnimation = useRef<ReturnType<typeof gsapUtil.slideInAside> | null>(null);
  const slideAnimation = useRef<ReturnType<typeof gsapUtil.slideLeftBorder> | null>(null);
  const slideTopAnimation = useRef<ReturnType<typeof gsapUtil.slideTopBorder> | null>(null);

  const [prevPage, setPrevPage] = useState<PageType>("main");

  // GSAP 애니메이션 초기화
  useEffect(() => {
    listRefs.current.forEach((item) => {
      if (item) {
        gsapUtil.clip(item); // 각각의 li 태그에 애니메이션 적용
      }
    });
    return() => {
      listRefs.current.forEach((item) => {
        if (item) gsap.killTweensOf(item); // 애니메이션 정리
      });
    }
  }, []);


  // slideRef animation - aside 넓이 변경될떄마다 적용
  useEffect(() => {
    if(!slideRef.current || !asideRef.current) return;
    slideAnimation.current = gsapUtil.slideLeftBorder(slideRef.current,asideRef.current.offsetWidth);
  },[asideRef.current?.offsetWidth])


  // slide 변경될떄마다 적용
  useEffect(() => {
  if (!asideAnimation.current && asideRef.current) { // asideAnimation이 없을 경우에만 초기화
    asideAnimation.current = gsapUtil.slideInAside(asideRef.current); 
  }
  if (slideAnimation.current && asideRef.current && slideRef.current ) {  //  slideAnimation 없을 경우에만 초기화
    slideAnimation.current = gsapUtil.slideLeftBorder(slideRef.current, asideRef.current.offsetWidth);
    slideTopAnimation.current = gsapUtil.slideTopBorder(slideRef.current);
  }

  if( currentPage === "main" ) {
    if( prevPage==="main" ) {
      asideAnimation.current?.reverse();  // case1: 처음부터 main
    } else {
      asideAnimation.current?.reverse(); // case2: other -> main
      slideTopAnimation.current?.play();
    }
  } else {
    if( prevPage==="main" ) { // case3: main -> other
      asideAnimation.current?.play(); 
      slideAnimation.current?.play();
    }
  }
  
  // aside pagination clip animation
  setTimeout(() => {
    listRefs.current.forEach((item) => {
      if (item) gsapUtil.clip(item); // currentPage 변경 시 재적용
    });
  }, 500);
  setPrevPage(currentPage)
  
}, [currentIdx]);


  return (
  <Box 
      ref={asideRef}
      className={aside}
      responsive = {{
        width: {
          desktop: 'large',
          tablet: 'medium',
          mobile: 'small',
        }
      }}>
    <Box 
        className={list} 
        responsive = {{
          display: {
            desktop: 'block',
            tablet: 'none',
            mobile: 'none',
          }
        }}
        >
      {enumPage.map((label, index) => (
        <button
          ref={(el) => {
            listRefs.current[index] = el; // 참조 설정만 수행 (반환값 없음)
          }}
          key={index}
          style={{display:"block"}}
          className={`${currentIdx === index ? 'active' : ''}`}
          onClick={()=>onBulletClick(index)} // 슬라이드로 이동
        >
          <Text sizes="small" color="textLighted" style={{paddingBottom: 5}}>{label}</Text>
        </button>
      ))}
    </Box>

    {/* prev */}
    <button type="button" className="main-prev"><IconText fontSize="13px" color="textInfo" icon={faChevronUp}/></button> 
    {/* pagination */}
    <div className={`main-pagination ${pagination}`}></div>
    {/* next */}
    <button type="button" className="main-next"><IconText fontSize="13px" color="textInfo" icon={faChevronDown}/></button>
  </Box>
  )
}