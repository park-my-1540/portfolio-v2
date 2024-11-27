import React from "react";
import { Text } from "@/components/atoms/Text/Text";
import Box from "@/components/layouts/Box/Box";
import { wrap, scroll, spinAgain, rotate } from "./scrollIndicator.css";
import { Position } from "@/components/layouts/Position/Position";
import { vars } from "@/styles/common/createThemeContract.css";
const ScrollIndicator: React.FC = () => {
  return (
        <>
          <Box className={wrap}>
            <Text className={rotate} color="muted" sizes="small">Scroll</Text>
            <Box 
              width={50}
              height={50}
              display="flex"
              direction="column"
              justify="center"
              align="center"
              marginLeft={10}
              backgroundColor={vars.color.highlight.secondary}
              borderRadius="50%"
             >
            <svg className={`${scroll} ${spinAgain}`} width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M.41 12.704C.41 6.25 5.547 1 11.863 1c6.316 0 11.454 5.25 11.454 11.704v9.356c0 6.433-5.139 11.667-11.454 11.667-6.316 0-11.455-5.25-11.455-11.703v-9.32zM11.863 31.56c5.128 0 9.3-4.262 9.3-9.5v-9.356c0-5.259-4.172-9.537-9.3-9.537-5.128 0-9.3 4.278-9.3 9.537v9.32c0 5.258 4.172 9.536 9.3 9.536z" fill="#fff"></path>
                <path d="M11.864.85C5.462.85.259 6.17.259 12.704h.3C.56 6.33 5.633 1.15 11.864 1.15v-.3zm11.604 11.854C23.468 6.17 18.265.85 11.864.85v.3c6.23 0 11.304 5.18 11.304 11.554h.3zm0 9.356v-9.356h-.3v9.356h.3zM11.864 33.877c6.4 0 11.604-5.304 11.604-11.817h-.3c0 6.353-5.074 11.517-11.304 11.517v.3zM.259 22.024c0 6.533 5.203 11.853 11.605 11.853v-.3c-6.23 0-11.305-5.18-11.305-11.553h-.3zm0-9.32v9.32h.3v-9.32h-.3zm20.755 9.356c0 5.158-4.108 9.35-9.15 9.35v.3c5.214 0 9.45-4.332 9.45-9.65h-.3zm0-9.356v9.356h.3v-9.356h-.3zm-9.15-9.387c5.042 0 9.15 4.208 9.15 9.387h.3c0-5.338-4.236-9.687-9.45-9.687v.3zm-9.15 9.387c0-5.18 4.108-9.387 9.15-9.387v-.3c-5.215 0-9.45 4.35-9.45 9.687h.3zm0 9.32v-9.32h-.3v9.32h.3zm9.15 9.386c-5.042 0-9.15-4.207-9.15-9.387h-.3c0 5.338 4.235 9.687 9.45 9.687v-.3z" fill="#395DAD"></path>
                <path d="M12.41 9.727c-.603 0-1.092.444-1.092.992v3.47c0 .549.489.993 1.091.993.603 0 1.091-.444 1.091-.992v-3.471c0-.548-.488-.992-1.09-.992z" fill="#fff" stroke="#395DAD" strokeWidth=".3"></path>
            </svg>
            </Box>
          </Box>
        </>
  );
};

export default ScrollIndicator;
