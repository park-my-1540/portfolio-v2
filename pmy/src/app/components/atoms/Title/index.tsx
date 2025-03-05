import Box from '@/components/layouts/Box/Box';
import { TextTitle } from '@/components/atoms/Text/Text';
import { borderTop } from '@/styles/style.css';

type TitleProps = {
  title: string;
  className?: string;
};

export default function Title({ title, className }: TitleProps) {
  return (
    <Box className={`${borderTop} ${className}`} paddingTop="0.5rem">
      <TextTitle sizes="mediumlarge">{title}</TextTitle>
    </Box>
  );
}
