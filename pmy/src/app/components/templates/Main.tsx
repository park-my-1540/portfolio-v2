'use client';
import { MatterBox } from '@/components/layouts/MatterBox/MatterBox';
import ScrollArrow from '@/components/molecules/ScrollArrow';
export default function Main() {
  return (
    <>
      <section className="panel main color-dark">
        <script src="https://www.jsdelivr.com/package/npm/poly-decomp"></script>
        <script src="https://cdn.jsdelivr.net/npm/pathseg@1.2.1/pathseg.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/poly-decomp@0.3.0/build/decomp.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.17.1/matter.js"></script>
        <MatterBox />
        <ScrollArrow />
      </section>
    </>
  );
}
