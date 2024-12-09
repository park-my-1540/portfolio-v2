import React, { useRef } from "react";
import { boxWrap } from "./matterBox.css";
import Matter from "@/components/organisms/Main/Matter/Matter";

export function MatterBox (){
  const svgRef = useRef<HTMLDivElement>(null);

return (
  <div className={boxWrap} ref={svgRef}><Matter/></div>
  );
};