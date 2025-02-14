import Box from '@/components/layouts/Box/Box';
import { colors } from '@/styles/tokens/colors.css';
const Footer: React.FC = () => {
  return (
    <footer data-scroll-section>
      <Box height={100} backgroundColor={colors.pink}></Box>
    </footer>
  );
};

export default Footer;
