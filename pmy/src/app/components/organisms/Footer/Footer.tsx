import { Text } from '@/components/atoms/Text/Text';
import Box from '@/components/layouts/Box/Box';
import { vars } from '@/styles/common/createThemeContract.css';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer data-scroll-section>
      <Box padding={10} height={150} display="flex" align="end" justify="center" backgroundColor={vars.color.light}>
        <Text color="accent" sizes="mediumlarge" weights="bold" family="roboto">
          Thank you for visiting my portfolio
        </Text>
      </Box>
    </footer>
  );
};

export default Footer;
