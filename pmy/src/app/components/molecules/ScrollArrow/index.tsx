import Box from '@/components/layouts/Box/Box';
import { Text } from '@/components/atoms/Text/Text';
import { vars } from '@/styles/common/createThemeContract.css';
import { wrap, spinAgain } from './style.css';

export default function ScrollArrow() {
  return (
    <div className={`${wrap} ${spinAgain}`}>
      <Text color="tertiary">Scroll down</Text>
      <Box width={20} height={20} marginLeft="auto" marginRight="auto">
        <svg
          className="upDown"
          width="14"
          height="7"
          viewBox="0 0 14 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5504 0.370245C12.9568 -0.117409 12.0013 -0.124545 11.4164 0.355973L7.00055 3.98364L2.58475 0.355973C1.99983 -0.124545 1.04428 -0.117409 0.450683 0.370245C-0.142917 0.8579 -0.151603 1.6429 0.433309 2.12342L5.93496 6.64314C6.22742 6.8834 6.61254 7.00234 7.00055 6.99996C7.38566 7.00234 7.77368 6.8834 8.06613 6.64314L13.5678 2.12342C14.1498 1.6429 14.144 0.8579 13.5504 0.370245Z"
            fill={vars.color.complementary}
          />
        </svg>
      </Box>
    </div>
  );
}
