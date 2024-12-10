
import React from "react";
import { useRouter } from "next/navigation";
import { Image } from "@/components/atoms/Image/Image";
import Box from "@/components/layouts/Box/Box";

export default function Project() {
  const router = useRouter();
  const onClick = () => {
    router.push("/about"); // "/about" 페이지로 이동
  }
    return (
        <>
          <Box width="500" height={300} border="1px solid">
            <Image url="./img/hardskill/pc2.jpg" sizes="card"/>
            <button type="button" onClick = {onClick}>project</button>
          </Box>
        </>
      );
}
