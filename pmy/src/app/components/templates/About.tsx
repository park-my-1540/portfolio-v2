import Box from '@/components/layouts/Box/Box';
import Title from '@/components/atoms/Title';
import Introduction from '@/components/organisms/Introduction/Introduction';

export default function About() {
  return (
    <section className="panel" id="about" data-scroll-section>
      <Title title="ABOUT" />
      <Box
        display="flex"
        direction="column"
        justify="center"
        align="center"
        responsive={{
          paddingY: {
            desktop: 'big',
            tablet: 'big',
            mobile: 'x2Large',
          },
        }}
      >
        <Introduction />
      </Box>
    </section>
  );
}
