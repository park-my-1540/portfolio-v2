import React from "react";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { aside, pagination, bullet } from "./navigationaside.css";
import { IconText } from "@/components/atoms/Icon/IconText";

interface NavigationAsideProps {
  enumPage: readonly string[];
  currentIdx: number;
  onBulletClick: (index: number) => void;
}

export default function NavigationAside({
  enumPage,
  currentIdx,
  onBulletClick,
}: NavigationAsideProps) {

  
  return (
    <div className={aside}>
      
    {/* text pagination */}
    <div className="custom-pagination">
      {enumPage.map((label, index) => (
        <div
          key={index}
          className={`custom-bullet ${currentIdx === index ? 'active' : ''}`}
          onClick={()=>onBulletClick} // 슬라이드로 이동
        >
          {label}
        </div>
      ))}
    </div>

    {/* prev */}
    <button type="button" className="main-prev"><IconText fontSize="13px" color="textInfo" icon={faChevronUp}/></button> 
    {/* pagination */}
    <div className={`main-pagination ${pagination}`}></div>
    {/* next */}
    <button type="button" className="main-next"><IconText fontSize="13px" color="textInfo" icon={faChevronDown}/></button>
  </div>
  )
}