import Box from '@/components/layouts/Box/Box';
import Introduction from '@/components/organisms/Introduction/Introduction';
import Skill from '@/components//molecules/Skill';
export default function About() {
  return (
    <section className="panel" id="about" data-scroll-section>
      <Box
        display="flex"
        direction="column"
        justify="center"
        align="center"
        borderTop="1px solid"
        marginTop={150}
        paddingTop={50}
      >
        <Introduction />
      </Box>
      <Skill />
    </section>
  );
}
