import React from "react";
import { wrap, box, start, end } from "./duration.css"

export default function Duration() {
    return (
        <>
        <div className={wrap}>
          <div className={box}>
            <span className={start}>Nov</span>
            <span className={end}>Present</span>
          </div>
        </div>
        </>
      );
}
