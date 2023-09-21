// images
import Varena from "/images/varena.png";
import Bub from "/images/bub.png";
import Gain from "/images/gain.png";
import Jitters from "/images/jitters.png";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const projectData = [
  {
    id: 1,
    title: "Gain Africa",
    description:
      "A website for Gain Africa, a worldwide network of Africans who believe in a better Africa resulting from newly empowered generation of leaders.",
    image: Gain,
    imageAlt: "gain",
    githubLink: "",
    liveLink: "https://gainafrica.org/",
    toolsUsed: ["HTML", "TailwindCss", "Javascript"],
  },
  {
    id: 2,
    title: "Bub it",
    description:
      "A URL shortener web application that helps you to shorten your long URLs, customize them, generate QR codes, and share them.",
    image: Bub,
    imageAlt: "bub-it",
    githubLink: "https://github.com/Moyinoluwa-10/bub-it",
    liveLink: "https://bub.icu/",
    toolsUsed: ["React.js", "SCSS", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: 3,
    title: "Jitter's Chatbot",
    description:
      "A chatbot built to streamline the ordering process for a restaurant. Users orders are also saved for future reference.",
    image: Jitters,
    imageAlt: "jitters",
    githubLink: "https://github.com/Moyinoluwa-10/restaurant_chatbot",
    liveLink: "https://restaurant-chatbot-v5u5.onrender.com/",
    toolsUsed: [
      "HTML",
      "CSS",
      "Javascript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
    ],
  },
  {
    id: 4,
    title: "Varena",
    description:
      "A play to earn NFT battle game that runs on a 2D physics engine(matter.js) and blockchain",
    image: Varena,
    imageAlt: "varena",
    githubLink: "https://github.com/workshopapps/nftcreatures.web",
    liveLink: "",
    toolsUsed: [
      "React.js",
      "CSS",
      "Matter.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
];

const Project = () => {
  return (
    <div
      className="py-12 px-8 md:px-12 bg-light dark:bg-dark overflow-hidden"
      id="project"
    >
      <h1
        className="text-4xl md:text-5xl text-center mb-5  text-slightly-black dark:text-slightly-white"
        data-aos="fade-up"
      >
        Projects
      </h1>
      <p
        className="text-center text-xl text-slightly-black dark:text-slightly-white"
        data-aos="fade-up"
      >
        These are some of my featured projects. You can view more on{" "}
        <a
          href="https://github.com/Moyinoluwa-10/"
          target="_blank"
          rel="noreferrer"
          className="text-slightly-black dark:text-slightly-white underline hover:no-underline transition-normal"
        >
          {" "}
          github.
        </a>
      </p>

      <div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-5 content-center justify-center justify-items-center mt-12">
          {projectData.map((project) => {
            return (
              <div
                key={project.id}
                className="project-box w-full border-2 border-black dark:border-white rounded-xl overflow-hidden pb-10"
                data-aos="fade-right"
                data-aos-delay={project.id * 300}
              >
                <div className="w-full mb-5 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full transition-slow"
                  />
                </div>
                <div className="px-5 text-black dark:text-white">
                  <h3 className="uppercase mb-3 font-semibold">
                    {project.title}
                  </h3>
                  <p className="mb-5">{project.description}</p>
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    {project.toolsUsed.map((tools, key) => {
                      return (
                        <span
                          key={key}
                          className="inline-block rounded-[10px] bg-blue-dark dark:bg-blue-very-light text-blue-very-light dark:text-blue-dark py-1 md:py-2 px-3"
                        >
                          {tools}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    {project.githubLink && (
                      <div>
                        <a
                          href={project.githubLink}
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faGithub}
                            className="text-2xl text-blue-dark dark:text-blue-very-light"
                          />
                        </a>
                      </div>
                    )}
                    {project.liveLink && (
                      <div>
                        <a
                          href={project.liveLink}
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            className="text-2xl text-blue-dark dark:text-blue-very-light"
                          />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
