import Box from '@/components/layouts/Box/Box';
import { colors } from '@/styles/tokens/colors.css';
import { Text } from '@/components/atoms/Text/Text';
const Footer: React.FC = () => {
  return (
    <footer data-scroll-section>
      <Box
        padding={10}
        height={100}
        display="flex"
        align="end"
        justify="center"
        backgroundColor={colors.pink}
      >
        <Text color="primary" sizes="medium">
          Sia's portfolio
        </Text>
      </Box>
    </footer>
  );
};

export default Footer;
