import React from "react";
import "./ProjectDemo.css";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({ duration: 1500 });

const ProjectDemo = () => {
  return (
    <div className="projectdemo" id="project">
      <h1 className="projectdemo__heading" data-aos="fade-up">
        My Projects
      </h1>
      <p className="projectdemo__text" data-aos="fade-down">
        Coming soon...
      </p>
    </div>
  );
};

export default ProjectDemo;
