"use client"
import { useRef } from "react"
import styles from "./page.module.css";
import { test, container } from "@/app/styles/style.css";
import MatterComponent from "./styles/components/MatterComponent.jsx";
import Canvas from "./styles/components/Canvas";

export default function Home() {
  const canvasRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/pathseg@1.2.1/pathseg.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/poly-decomp@0.3.0/build/decomp.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.17.1/matter.js"></script>
    <MatterComponent canvasRef = {canvasRef}/>
    {/* <Canvas/> */}
    </>
  );
}
