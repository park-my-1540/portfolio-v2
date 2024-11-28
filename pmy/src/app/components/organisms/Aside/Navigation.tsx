import React,{ useRef, useEffect } from "react";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { aside, pagination, list } from "./navigation.css";
import { IconText } from "@/components/atoms/Icon/IconText";
import { Text } from "@/components/atoms/Text/Text";
import * as gsapUtil from "@/utils/gsapUtil";
import Box from "@/components/layouts/Box/Box";

interface NavigationProps {
  enumPage: readonly string[];
  currentIdx: number;
  slideRef: React.RefObject<HTMLDivElement>;
  onBulletClick: (index: number) => void;
}

export default function Navigation({
  enumPage,
  currentIdx,
  slideRef,
  onBulletClick,
}: NavigationProps) {

  const asideRef = useRef<HTMLDivElement>(null)
  const listRefs = useRef<(HTMLDivElement | null)[]>(Array(enumPage.length).fill(null));

  const asideAnimation = useRef<ReturnType<typeof gsapUtil.slideInAside> | null>(null);
  const slideAnimation = useRef<ReturnType<typeof gsapUtil.slideLeftBorder> | null>(null);

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
  if (  slideAnimation.current && asideRef.current && slideRef.current ) {  //  slideAnimation 없을 경우에만 초기화
    slideAnimation.current = gsapUtil.slideLeftBorder(slideRef.current,asideRef.current.offsetWidth);
  }

  if (enumPage[currentIdx] === "main") {
    asideAnimation.current?.reverse();
    slideAnimation.current?.reverse();
  } else {
    asideAnimation.current?.play();
  }

  if (enumPage[currentIdx] === "about") {
    slideAnimation.current?.play();
  } else {
    //TODO
  }

  // aside pagination clip animation
  setTimeout(() => {
    listRefs.current.forEach((item) => {
      if (item) gsapUtil.clip(item); // currentIdx 변경 시 재적용
    });
  }, 500);
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
        <p
          ref={(el) => {
            listRefs.current[index] = el; // 참조 설정만 수행 (반환값 없음)
          }}
          key={index}
          className={`${currentIdx === index ? 'active' : ''}`}
          onClick={()=>onBulletClick} // 슬라이드로 이동
        >
          <Text sizes="small" color="textLighted" style={{paddingBottom: 5}}>{label}</Text>
        </p>
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