import React from "react";
import "./Skills.css";
import Skillset from "../Skillset/Skillset";
import {
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faWordpress,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { SiMysql, SiMongodb } from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({ duration: 1500 });

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__text-container">
        <div>
          <h1 className="skills__heading" data-aos="fade-down">
            My Tools
          </h1>
        </div>
        <div>
          <p className="skills__text" data-aos="fade-up">
            Here are a few tools I use
          </p>
        </div>
      </div>

      <div className="skills-set" data-aos="zoom-in">
        <Skillset iconName={faHtml5} iconTitle={"HTML"} />
        <Skillset iconName={faCss3} iconTitle={"CSS"} />
        <Skillset iconName={faJs} iconTitle={"Javascript"} />
        <Skillset iconName={faReact} iconTitle={"ReactJS"} />
        <Skillset iconName={faNodeJs} iconTitle={"NodeJs"} />
        <Skillset iconName={faWordpress} iconTitle={"Wordpress"} />
        <Skillset iconName={faSass} iconTitle={"Sass/SCSS"} />
        <div className="icon-container">
          <SiMysql className="react-icons" />
          <p className="icon-name">MySQL</p>
        </div>
        <div className="icon-container">
          <SiMongodb className="react-icons" />
          <p className="icon-name">MongoDB</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
