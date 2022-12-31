import React from "react";
import "./Skillset.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skillset = ({ iconName, iconTitle }) => {
  return (
    <div className="skillset">
      <div className="skillset-box">
        <div className="icon-container">
          <FontAwesomeIcon icon={iconName} className="skillset-icon" />
        </div>
        <p className="icon-name">{iconTitle}</p>
      </div>
    </div>
  );
};

export default Skillset;
