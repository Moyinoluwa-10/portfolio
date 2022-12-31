import React, { useEffect } from "react";
import "./Education.css";
import Edu from "../Edu/Edu";
import Aos from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="education">
      <div data-aos="fade-right" className="education-title">
        <h1>My Education</h1>
      </div>

      <div className="education-description" data-aos="fade-up">
        <Edu
          data-aos="fade-right"
          name={"University of Ibadan"}
          title={"Mechanical Engineering"}
          duration={"2021 - Present"}
        />
        <Edu
          data-aos="fade-left"
          name={"Altschool Africa"}
          title={"Backend Engineering"}
          duration={"2021 - Present"}
        />
      </div>
    </div>
  );
};

export default Education;
