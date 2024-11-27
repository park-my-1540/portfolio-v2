import React,{ useRef, useEffect } from "react";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { aside, pagination, list } from "./navigation.css";
import { IconText } from "@/components/atoms/Icon/IconText";
import { Text } from "@/components/atoms/Text/Text";
import { clipGsap } from "@/utils/gsapUtil";
import Box from "@/components/layouts/Box/Box";

interface NavigationProps {
  enumPage: readonly string[];
  currentIdx: number;
  onBulletClick: (index: number) => void;
}

export default function Navigation({
  enumPage,
  currentIdx,
  onBulletClick,
}: NavigationProps) {

  const listRefs = useRef<(HTMLDivElement | null)[]>(Array(enumPage.length).fill(null));
  useEffect(() => {
    // GSAP 애니메이션 초기화
    listRefs.current.forEach((item) => {
      if (item) {
        clipGsap(item); // 각각의 li 태그에 애니메이션 적용
      }
    });
    return() => {
      listRefs.current.forEach((item) => {
        if (item) gsap.killTweensOf(item); // 애니메이션 정리
      });
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      listRefs.current.forEach((item) => {
        if (item) clipGsap(item); // currentIdx 변경 시 재적용
      });
    }, 500);
  }, [currentIdx]);


  return (
  <Box 
    className={aside}
    responsive = {{
      width: {
        desktop: 'large',
        tablet: 'medium',
        mobile: 'small',
      }
    }}>
      
    {/* text pagination */}
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