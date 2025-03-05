import Box from '@/components/layouts/Box/Box';
import Hardskill from '@/components/organisms/Hardskill';
import Title from '@/components/atoms/Title';

export default function About() {
  return (
    <section className="panel" id="skill" data-scroll-section>
      <Title title="SKILL" />
      <Box
        display="flex"
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
        <Hardskill />
      </Box>
    </section>
  );
}
