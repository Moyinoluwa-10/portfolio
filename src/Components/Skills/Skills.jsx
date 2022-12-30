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

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-heading">
        <div>
          <h1>My Skills</h1>
        </div>
        <div>
          <p>Here are a few skills I possess</p>
        </div>
      </div>

      <div className="skills-set">
        <Skillset iconName={faHtml5} iconTitle={"HTML"} />
        <Skillset iconName={faCss3} iconTitle={"CSS"} />
        <Skillset iconName={faJs} iconTitle={"Javascript"} />
        <Skillset iconName={faReact} iconTitle={"ReactJS"} />
        <Skillset iconName={faNodeJs} iconTitle={"NodeJs"} />
        <Skillset iconName={faWordpress} iconTitle={"Wordpress"} />
        <Skillset iconName={faSass} iconTitle={"Sass/SCSS"} />
        <Skillset iconName={faNodeJs} iconTitle={"NodeJs"} />
      </div>
    </div>
  );
};

export default Skills;
