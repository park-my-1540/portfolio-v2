import Box from "@/components/layouts/Box/Box";
import { Image } from "@/components/atoms/Image/Image";
import { Text } from "@/components/atoms/Text/Text";

export default function Column() {

    return (
        <>
         <Box height = "100%" border="1px solid">
            <Box>
              <Image url="./img/projects/jandi/jandi.jpg" radius="default" sizes="card"/>
              <Text sizes="large">Jandi</Text>
            </Box>
            <Box borderTop="1px solid">
              <Text>회사정보</Text>
              <Text>회사정보</Text>
              <Text>회사정보</Text>
              <Text>회사정보</Text>
            </Box>
         </Box>
        </>
      );
}
