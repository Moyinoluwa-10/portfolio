import React from "react";
import "./ProjectDemo.css";
// images
import Varena from "../../assets/images/varena.png";
import Shrink from "../../assets/images/shrink.png";
import Phonie from "../../assets/images/phonie.png";
import Jitters from "../../assets/images/jitters.png";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const projectData = [
  {
    id: 1,
    title: "Shrink it",
    description:
      "A URL shortener that allows you to shorten your long URLs and share them with your friends.",
    image: Shrink,
    imageAlt: "shrink-it",
    githubLink: "https://github.com/Moyinoluwa-10/shrink-it",
    liveLink: "https://url-shortener-one-black.vercel.app/",
    toolsUsed: ["React.js", "SCSS/Sass", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Jitters Chatbot",
    description:
      "A chatbot built to help customers place orders from a restaurant’s site. Users orders are also saved for future reference.",
    image: Jitters,
    imageAlt: "jittter",
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
    id: 3,
    title: "Varena",
    description:
      "A play to earn nft battle game that runs on a 2D physics engine(matter.js) and blockchain",
    image: Varena,
    imageAlt: "varena",
    githubLink: "https://github.com/workshopapps/nftcreatures.web",
    liveLink: "https://varena.app/",
    toolsUsed: ["React.js", "Matter.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: 4,
    title: "Phonie",
    description:
      "A simple form page with support for international numbers with country identification. It shows the country flag and country code of the number entered. It also identifies and show the mobile network for Nigerian numbers",
    image: Phonie,
    imageAlt: "phonie",
    githubLink: "https://github.com/Moyinoluwa-10/phonie",
    liveLink: "https://moyinoluwa-10.github.io/phonie/",
    toolsUsed: ["HTML", "CSS", "Javascript"],
  },
];

const ProjectDemo = () => {
  return (
    <div className="projectdemo" id="project">
      <h1 className="projectdemo__heading" data-aos="fade-up">
        Projects
      </h1>
      <p className="projectdemo__text" data-aos="fade-right">
        These are some of my featured projects. You can view more on{" "}
        <a href="https://github.com/Moyinoluwa-10/"> github.</a>
      </p>

      <div data-aos="fade-up">
        <div className="projectdemo__container">
          {projectData.map((project) => {
            return (
              <div key={project.id} className="projectdemo__box">
                <div className="projectdemo__image-box">
                  <img src={project.image} alt={project.imageAlt} />
                </div>
                <div className="projectdemo__text-box">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="projectdemo__tools">
                    {project.toolsUsed.map((tools, key) => {
                      return <span key={key}>{tools}</span>;
                    })}
                  </div>
                  <div className="projectdemo__links">
                    <div>
                      <a
                        href={project.githubLink}
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          className="projectdemo__icon"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        href={project.liveLink}
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="projectdemo__icon"
                        />
                      </a>
                    </div>
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

export default ProjectDemo;
