import Box from '@/components/layouts/Box/Box';
import Introduction from '@/components/organisms/Introduction/Introduction';
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
    </section>
  );
}
