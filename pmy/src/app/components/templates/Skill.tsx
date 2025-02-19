import Box from '@/components/layouts/Box/Box';
import Hardskill from '@/components/organisms/Hardskill';
export default function About() {
  return (
    <section className="panel" id="skill" data-scroll-section>
      <Box display="flex" justify="center" align="center" height="90vh">
        <Hardskill />
      </Box>
    </section>
  );
}
