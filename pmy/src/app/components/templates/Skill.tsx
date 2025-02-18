import Box from '@/components/layouts/Box/Box';
import Hardskill from '@/components/organisms/Hardskill';
export default function About() {
  return (
    <section
      className="panel"
      id="about"
      data-scroll-section
      style={{ border: '1px solid red' }}
    >
      <Box
        display="flex"
        justify="center"
        align="center"
        border="1px solid"
        height="100vh"
      >
        <Hardskill />
      </Box>
    </section>
  );
}
