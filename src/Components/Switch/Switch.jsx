import React, { useContext } from "react";
import "./Switch.css";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../../Context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Switch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <ReactSwitch
        onChange={toggleTheme}
        checked={theme === "dark"}
        className="react-switch"
        boxShadow={false}
        activeBoxShadow={false}
        offColor="#fff"
        onColor="#000"
        offHandleColor="#000"
        onHandleColor="#fff"
        handleDiameter={28}
        height={40}
        width={70}
        borderRadius={6}
        uncheckedIcon={
          <div className="switch-icon-box">
            <FontAwesomeIcon icon={faSun} className={"switch-icon--sun"} />
          </div>
        }
        checkedIcon={
          <div className="switch-icon-box">
            <FontAwesomeIcon icon={faMoon} className={"switch-icon--moon"} />
          </div>
        }
      />
    </div>
  );
};

export default Switch;
