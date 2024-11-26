import React from "react";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { aside, pagination, list } from "./navigation.css";
import { IconText } from "@/components/atoms/Icon/IconText";
import { Text } from "@/components/atoms/Text/Text";

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

  
  return (
  <div className={aside}>
      
    {/* text pagination */}
    <ul className={list}>
      {enumPage.map((label, index) => (
        <li
          key={index}
          className={`${currentIdx === index ? 'active' : ''}`}
          onClick={()=>onBulletClick} // 슬라이드로 이동
        >
          <Text sizes="small" color="textLighted" style={{paddingBottom: 5}}>{label}</Text>
        </li>
      ))}
    </ul>

    {/* prev */}
    <button type="button" className="main-prev"><IconText fontSize="13px" color="textInfo" icon={faChevronUp}/></button> 
    {/* pagination */}
    <div className={`main-pagination ${pagination}`}></div>
    {/* next */}
    <button type="button" className="main-next"><IconText fontSize="13px" color="textInfo" icon={faChevronDown}/></button>
  </div>
  )
}