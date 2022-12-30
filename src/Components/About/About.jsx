import React from "react";
import "./About.css";
import MyPic from "../../assets/images/profilepic.jpg";
// import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1 className="top">An Expert Web Developer</h1>
        <p className="bottom">
          My name is Yusuf Abdulraheem. I’m a full stack web developer. When I'm
          not coding, I'm either cycling, swimming or diving into my own
          imaginaton. My skills are mainly focused on MEAN stack web development
          tools (MongoDB, ExpressJS, Angular, NodeJS). Additionally, I have a
          solid knowledge and experience with HTML, CSS, JavaScript for
          frontend, Template engines such as EJS, PUG and Handlebars for dynamic
          rendering. NodeJS and it's framework (ExpressJS) for backend. With my
          knowledge I'm quite experienced with developing Progressive Web Apps
          and also working towards making a huge impact by contributing
          immensely in the software technology world. I am a passionate and goal
          driven Techpreneur whose interest is in using technology to build
          solutions to solve real world problems. I have had the luxury to work
          with great minds which has made me proactive and attentive to details
        </p>
      </div>

      <div className="pic-box">
        <img src={MyPic} alt="Pictures" />
      </div>
    </div>
  );
};

export default About;
