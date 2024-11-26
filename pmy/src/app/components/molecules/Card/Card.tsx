import React, { useState, MouseEvent, ReactNode } from "react";
import { card, CardVariantProps } from './card.module.css';
import { Text } from "@/components/atoms/Text/Text";
import { Badge } from "@/components/molecules/Badge/Badge";
import Duration from "@/components/molecules/Duration/Duration";
import { cardBox, cardDivision, inner, hoverCircle } from "./card.css"
import { ThemeColor } from "@/types/styles";
import { Position } from "@/components/layouts/Position/Position";

interface CardProps {
  theme: ThemeColor,
  badge: string,
  subTitle: string,
  title: string,
  duration?: string,
}

export default function Card({theme,badge,subTitle,title,duration}:CardProps) {

  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [start, end] = duration?.split("~") || ["", ""];
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
            <Duration theme="default" from = {start} to = {end}/>
          </div>

          <span 
            className={hoverCircle}
            style={{ top: `${hoverPosition.y}px`, left: `${hoverPosition.x}px`}}/>
        </div>
        </>
      );
}

interface CardIconProps {
  theme?: ThemeColor,
  email: string,
  title: ReactNode | string,
  duration?: string,
}

export function CardIcon({theme,email,title,duration}:CardIconProps) {
    const [start, end] = duration?.split("~") || ["", ""];
    return (
        <>
        <div className={`${cardBox} ${card({ theme })}`}>
            <Text sizes="large" weights="bold">{title}</Text>
            <div className={cardDivision}>
              <Duration from={start} to={end} theme={theme}/>
              <Text weights="light" style={{paddingTop: 5}} sizes="small" className={card({ theme })}>{email}</Text>
            </div>
        </div>
        </>
      );
}
