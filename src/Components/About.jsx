const About = () => {
  return (
    <section
      className="py-12 px-8 md:px-12 bg-light dark:bg-dark overflow-hidden"
      id="about"
    >
      <h1
        className="text-4xl md:text-5xl text-center mb-8 md:mb-10 text-slightly-black dark:text-slightly-white"
        data-aos="fade-up"
      >
        About Me
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-left items-center justify-center md:justify-between gap-12 w-full content-center justify-items-center">
        <div>
          <p
            className="text-black dark:text-white max-w-lg md:max-w-md"
            data-aos="fade-right"
          >
            I'm Moyinoluwa Adelowo, a Mechanical Engineering major with a
            Computer Science minor. Beyond my academic pursuits, I'm a
            full-stack developer well-versed in both front-end and back-end
            development. I utilize the MERN stack (MongoDB, ExpressJS, React,
            NodeJS) to create dynamic web solutions. My learning journey extends
            to Python and C++ as I continually expand my coding repertoire.{" "}
            <br />
            <br />
            With a knack for crafting professional websites, I am a dedicated
            and ambitious Techpreneur. I love playing soccer and ping-pong in my
            free time. My passion lies in leveraging technology to tackle
            real-world challenges, with a strong commitment to leaving a lasting
            mark on the tech landscape through meaningful contributions.
          </p>
        </div>

        <div
          className="max-w-lg md:ml-auto w-full rounded-full overflow-hidden"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <img
            src="/images/profile.jpg"
            alt="Display Pic"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
