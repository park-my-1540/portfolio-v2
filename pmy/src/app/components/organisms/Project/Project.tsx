import React from "react";
import { useRouter } from "next/navigation";
import { Image } from "@/components/atoms/Image/Image";
import { box } from "./project.css";

export default function Project() {
  const router = useRouter();
  const onClick = () => {
    router.push("/about"); // "/about" 페이지로 이동
  }
    return (
        <>
          <div className={box}>
            <Image url="./img/hardskill/pc2.jpg" sizes="card"/>
            <button type="button" onClick = {onClick}>project</button>
          </div>
          <div className={box}>
          </div>
        </>
      );
}
