import Box from "@/components/layouts/Box/Box";
import { Image } from "@/components/atoms/Image/Image";
import { Text } from "@/components/atoms/Text/Text";
import { borderBox,paddingBox } from "./main.css"

export default function Main() {
    return (
        <>
         <Box>
            <Box>
              <Box width="100%" height="500px" className={borderBox} borderTop="1px solid">
                <Image url="./img/projects/jandi/jandi.jpg" radius="default" sizes="full"/>
              </Box>
              <Text sizes="mediumlarge" weights="light" className={`${borderBox} ${paddingBox}`}>Exploration sonore</Text>
            </Box>
            <Text sizes="large" className={`${borderBox} ${paddingBox}`} >Jandi</Text>
            <Box 
                className={`${borderBox} ${paddingBox}`}
                paddingBottom="5rem"
                display="grid"
                responsive={{
                gridTemplateColumns: {
                  desktop: 'two',
                  tablet: 'two',
                  mobile: 'single',
                },
                gridTemplateRows: {
                  desktop: 'single',
                  tablet: 'single',
                  mobile: 'single',
                },
              }}>
              <Box>
                <Text>Bisous Production propose un film abstrait puissant et délicat, où des matières cristallines et liquides s’animent pour créer des images captivantes, alliant réalisme et poésie visuelle.</Text>
              </Box>
              <Box>
                <Text>Mooders a relevé le défi de traduire cette richesse visuelle en une expérience sonore immersive. Nous avons conçu un univers sonore jouant sur la force et la subtilité, harmonisant piano éthéré, distorsions puissantes et textures aquatiques pour refléter les contrastes visuels du film.</Text>
              </Box>
            </Box>
         </Box>
        </>
      );
}



