import React from "react";
import "./Skills.css";
import Skillset from "../Skillset/Skillset";
import {
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faSass,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { SiMysql, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__text-container">
        <div>
          <h1 className="skills__heading" data-aos="fade-up">
            My Tools
          </h1>
        </div>
        <div>
          <p className="skills__text" data-aos="fade-left">
            Here are a few tools and technologies I use
          </p>
        </div>
      </div>

      <div className="skills-set" data-aos="zoom-in">
        <Skillset iconName={faHtml5} iconTitle={"HTML"} />
        <Skillset iconName={faCss3} iconTitle={"CSS"} />
        <Skillset iconName={faJs} iconTitle={"Javascript"} />
        <Skillset iconName={faReact} iconTitle={"ReactJS"} />
        <Skillset iconName={faNodeJs} iconTitle={"NodeJs"} />
        <Skillset iconName={faSass} iconTitle={"Sass/SCSS"} />
        <Skillset iconName={faBootstrap} iconTitle={"BootStrap"} />
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
