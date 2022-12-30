import React, { useState } from "react";
import "./Home.css";

import Landing from "../../Components/Landing/Landing";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
// import Education from "../../Components/Education";
import Footer from "../../Components/Footer/Footer";
import Skills from "../../Components/Skills/Skills";
// import Preloader from "../../Components/Preloader/Preloader";

import { ThemeContext } from "../../Context/ThemeContext.jsx";

const Home = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Landing />
        {/* <Preloader /> */}
        {/* <Education /> */}
        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default Home;
