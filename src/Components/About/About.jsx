import React from "react";
import "./About.css";
import MyPic from "../../assets/images/profilepic.jpg";
import Aos from "aos";

Aos.init({ duration: 1500 });

const About = () => {
  return (
    <div className="about" id="about">
      <h1 className="about__heading" data-aos="flip-down">
        About Me
      </h1>
      <div className="about__wrapper">
        <div className="about__text-container">
          <p className="about__text" data-aos="fade-zoom-in">
            My name is Moyinoluwa Adelowo. I’m a full stack developer proficient
            in front-end and back-end development. I use MERN (MongoDB,
            ExpressJS, React, NodeJS) stack web developement tools.
            Additionally, I have a solid knowledge and experience with HTML,
            CSS, JavaScript, and REACT for frontend, NodeJS and it's framework
            (ExpressJS) for backend, EJS for templating. I'm experienced at
            developing professional websites. I am a passionate and goal driven
            Techpreneur whose interest is in using technology to build solutions
            to solve real world problems and working towards making a huge
            impact by contributing immensely in the software technology world.
          </p>
        </div>

        <div className="about__image-container" data-aos="fade-up-right">
          <img src={MyPic} alt="Display Pic" />
        </div>
      </div>
    </div>
  );
};

export default About;
