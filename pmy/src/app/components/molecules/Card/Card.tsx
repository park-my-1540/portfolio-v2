import React from "react";
import { Text } from "@/components/atoms/Text/Text";
import { Badge } from "@/components/molecules/Badge/Badge";
import Duration from "@/components/molecules/Duration/Duration";
import { cardBox } from "./card.css"
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
    return (
        <>
        <div className={cardBox}>
          <Badge theme={theme}>{badge}</Badge>
          <Text color="tertiary" weights="light" style={{paddingTop: 20}}>{subTitle}</Text>
          <Text color="primary" weights="light" sizes="mediumlargeX2">{title}</Text>
          {/* <Text color="primary" weights="light">{duration}</Text> */}
          <Duration/>
        </div>
        </>
      );
}
