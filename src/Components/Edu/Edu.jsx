import React from "react";
import "./Edu.css";

const Edu = ({ name, title, duration }) => {
  return (
    <div className="edu">
      <span className="top">Institution</span>
      <br />
      <span className="bottom">{name}</span>
      <br />
      <span className="top">Course</span>
      <br />
      <span className="bottom">{title}</span>
      <br />
      <span className="top">Duration</span>
      <br />
      <span className="bottom">{duration}</span>
    </div>
  );
};

export default Edu;
