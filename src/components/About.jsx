function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-[0.8fr_1.2fr] md:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/55 dark:text-white/55">
            About
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Turning complex data into clear decisions.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-black/70 dark:text-white/70">
          <p>
           I am an aspiring Data Analyst, but I also have a strong interest in UI/UX design 
          and frontend development. I enjoy exploring these different areas, bringing together 
          analytical thinking and creative design. 
          </p>
          <p>
            While my main goal is uncovering insights from data to help drive decisions, 
           I am equally passionate about designing and building intuitive, user-centered 
          websites and applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
