import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Home.css";
import About from "../../Components/About";
import Contact from "../../Components/Contact";
import Education from "../../Components/Education";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Skills from "../../Components/Skills";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import { useEffect } from "react";
import { useRef } from "react";
import Preloader from "../../Components/Preloader/Preloader";

export const ThemeContext = createContext(null);

const Home = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    // theme === "light" ? setTheme("dark") : setTheme("light");
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="home">
        <div className="switch">
          <ReactSwitch
            onChange={toggleTheme}
            checked={theme === "dark"}
            // uncheckedHandleIcon={
            //   <FontAwesomeIcon icon={faSun} className={"icon"} />
            // }
            // checkedHandleIcon={
            //   <FontAwesomeIcon icon={faMoon} className={"icon"} />
            // }
            // checkedIcon={false}
            // uncheckedIcon={false}
            // offColor="#daa520"
            // onColor="#ff0000"
            // offHandleColor="#0000ff"
            // onHandleColor="#00ff00"
            // // handleDiameter={"0.5"}
            // className="hello"
            // checked={this.state.checked}
            // onChange={this.handleChange}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
          />
        </div>
        <div id={theme}>
          <Navbar />
          <div className="homes">
            <h1>Moyinoluwa</h1>
          </div>

          <Preloader />
          <About />
          <Education />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Home;
