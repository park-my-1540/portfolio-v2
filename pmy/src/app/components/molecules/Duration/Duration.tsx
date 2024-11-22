import React from "react";
import { wrap, box, fromCircle, toCircle } from "./duration.css"
import { duration } from './duration.module.css';
import { ThemeColor } from "@/types/styles";

interface DurationProps {
  theme: ThemeColor,
  from: string,
  to: string
}
export default function Duration({theme,from,to}:DurationProps) {
    return (
        <>
        <div className={`${wrap}`}>
          <div className={`${box}`}>
            <span style={{opacity:0.5}}>{from}</span>
            <span className={`${fromCircle} ${duration({ theme })}`}></span>
            <span className={`${toCircle} ${duration({ theme })}`}></span>
            <span style={{opacity:0.5}}>{to}</span>
          </div>
        </div>
        </>
      );
}
