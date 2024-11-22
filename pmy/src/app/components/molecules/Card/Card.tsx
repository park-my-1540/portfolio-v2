import React, { useState, MouseEvent } from "react";
import { Text } from "@/components/atoms/Text/Text";
import { Badge } from "@/components/molecules/Badge/Badge";
import Duration from "@/components/molecules/Duration/Duration";
import { cardBox, inner, hoverCircle } from "./card.css"
import { ThemeColor } from "@/types/styles";
/**
 * className 으로 theme를 정하자
 * 
 * badge 2022 - Present day
 * subTitle
 * Title
 * duration
 * @returns 
 */

interface CardProps {
  theme: ThemeColor,
  badge: string,
  subTitle: string,
  title: string,
  duration?: string,
}

export default function Card({theme,badge,subTitle,title,duration}:CardProps) {


  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;

    setHoverPosition({ x: relX, y: relY });
  }

    return (
        <>
        <div className={cardBox} onMouseEnter={(e)=>{handleMouseMove(e)}}>
          <div className={inner}>
            <Badge theme={theme}>{badge}</Badge>
            <Text color="inherit" weights="light" style={{paddingTop: 20, opacity:0.5}}>{subTitle}</Text>
            <Text color="inherit" weights="light" sizes="mediumlargeX2">{title}</Text>
            <Duration/>
          </div>

          <span 
            className={hoverCircle}
            style={{ top: `${hoverPosition.y}px`, left: `${hoverPosition.x}px`}}
            />
        </div>
        </>
      );
}
