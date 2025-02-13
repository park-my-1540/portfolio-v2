import { vars } from '@/styles/common/createThemeContract.css';
import Box from '@/components/layouts/Box/Box';

const Footer: React.FC = () => {
  return (
    <footer data-scroll-section>
      <Box height={100} backgroundColor={vars.color.point}></Box>
    </footer>
  );
};

export default Footer;
