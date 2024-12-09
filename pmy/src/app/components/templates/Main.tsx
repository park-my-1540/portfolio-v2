"use client";
import { MatterBox } from "@/components/layouts/MatterBox/MatterBox";
export default function Main() {
  return (
    <>
      <script src="https://www.jsdelivr.com/package/npm/poly-decomp"></script>
      <script src="https://cdn.jsdelivr.net/npm/pathseg@1.2.1/pathseg.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/poly-decomp@0.3.0/build/decomp.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.17.1/matter.js"></script>

      <div className="panel blue">
          <MatterBox/>
          <div className="scroll-down">
            Scroll down<div className="arrow"></div>
          </div>
        </div>
    </>
  );
}
