import Reveal from "./Reveal";

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-black/10 dark:border-white/10"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-[0.8fr_1.2fr] md:px-8">
        <Reveal as="div" variant="left">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/55 dark:text-white/55">
            About
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Turning ideas into digital experiences and meaningful insights.
          </h2>
        </Reveal>
        <Reveal
          as="div"
          delay={120}
          className="space-y-6 text-lg leading-8 text-black/70 dark:text-white/70"
        >
          <p>
            I am passionate about Front-End Development, UI/UX Design, and Data
            Analytics. I enjoy building responsive, user-centered digital
            experiences by combining creativity and problem-solving.
          </p>
          <p>
            Always eager to learn new technologies, I strive to create solutions
            that combine functionality, usability, and creativity while
            transforming data into meaningful insights that support better
            decision-making.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
