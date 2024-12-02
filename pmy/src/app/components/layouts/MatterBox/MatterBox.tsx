import React, { useEffect, useRef } from "react";
import * as gsapUtil from "@/utils/gsapUtil";
import { boxWrap } from "./matterBox.css";
import Matter from "@/components/organisms/Main/Matter/Matter";

import { useAtomValue } from "jotai";
import { viewState } from "@/jotai/viewAtom";

export function MatterBox (){

  const svgRef = useRef<HTMLDivElement>(null);
  const svgAnimation = useRef<ReturnType<typeof gsapUtil.svgScale> | null>(null);

  const {currentIdx, currentPage} = useAtomValue(viewState);

  useEffect(()=> {
    if (!svgAnimation.current && svgRef.current) {

      const x = svgRef?.current.offsetWidth*0.333;
      const y = svgRef?.current.offsetHeight*0.333;

      svgAnimation.current = gsapUtil.svgScale(svgRef.current, x, y); 
    }
    if(currentIdx !== 0){ // main이 아닐때
      svgAnimation.current?.play(); 
    } else {
      svgAnimation.current?.reverse(); 
    }
  },[currentIdx])
  
return (
  <div className={boxWrap} ref={svgRef}><Matter/></div>
  );
};