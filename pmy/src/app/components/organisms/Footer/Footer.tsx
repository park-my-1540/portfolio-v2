import { Text } from '@/components/atoms/Text/Text';
import Box from '@/components/layouts/Box/Box';
import { colors } from '@/styles/tokens/colors.css';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer data-scroll-section>
      <Box padding={10} height={150} display="flex" align="end" justify="center" backgroundColor={colors.pink}>
        <Text color="primary" sizes="mediumlarge" weights="bold" family="roboto">
          Thank you for visiting my portfolio
        </Text>
      </Box>
    </footer>
  );
};

export default Footer;
