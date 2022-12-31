import React from "react";
import "./About.css";
import MyPic from "../../assets/images/profilepic.jpg";
// import Aos from "aos";
// import "aos/dist/aos.css";

const About = () => {
  return (
    <div className="about" id="about">
      <h1 className="about__heading">About Me</h1>
      <div className="about__wrapper">
        <div className="about__text-container">
          <p className="about__text">
            My name is Moyinoluwa Adelowo. I’m a full stack web developer. I use
            MERN (MongoDB, ExpressJS, React, NodeJS) stack web developement
            tools. Additionally, I have a solid knowledge and experience with
            HTML, CSS, JavaScript, and REACT for frontend, NodeJS and it's
            framework (ExpressJS) for backend. I'm experienced at developing
            professional websites. I am a passionate and goal driven Techpreneur
            whose interest is in using technology to build solutions to solve
            real world problems.
          </p>
        </div>

        <div className="about__image-container">
          <img src={MyPic} alt="Display Pic" />
        </div>
      </div>
    </div>
  );
};

export default About;
