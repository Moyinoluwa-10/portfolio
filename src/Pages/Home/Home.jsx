import React, { useState } from "react";
import "./Home.css";

import Preloader from "../../Components/Preloader/Preloader";
import Landing from "../../Components/Landing/Landing";
import About from "../../Components/About/About";
import Skills from "../../Components/Skills/Skills";
import ProjectDemo from "../../Components/ProjectDemo/ProjectDemo";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";

import { ThemeContext } from "../../Context/ThemeContext.jsx";

const Home = () => {
  const [theme, setTheme] = useState("light");

  document.body.id = theme;

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <>
        <Preloader />
        <Landing />
        <About />
        <Skills />
        <ProjectDemo />
        <Contact />
        <Footer />
      </>
    </ThemeContext.Provider>
  );
};

export default Home;
