"use client";

import { useRef } from "react";
import { RecoilRoot } from "recoil"; // RecoilRoot 가져오기
import Page from "@/components/pages/index"
export default function Home() {
  const canvasRef = useRef<HTMLDivElement>(null);
  return (
    <>
        <Page/>
    </>
  );
}
