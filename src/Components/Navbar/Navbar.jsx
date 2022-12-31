import React, { useState } from "react";
import "./Navbar.css";
import Switch from "../Switch/Switch";

const Navbar = () => {
  const [responsive, setResponsive] = useState(false);
  const handleResponsive = () => {
    setResponsive(!responsive);
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h1>MA</h1>
      </div>

      <nav className={responsive ? "nav active" : "nav"}>
        <ul className="nav-menu">
          <li className="nav-list">
            <a href="/#" className="nav-link" onClick={handleResponsive}>
              Home
            </a>
          </li>
          <li className="nav-list">
            <a href="#about" className="nav-link" onClick={handleResponsive}>
              About Me
            </a>
          </li>
          <li className="nav-list">
            <a href="#contact" className="nav-link" onClick={handleResponsive}>
              Contact Me
            </a>
          </li>
          <li className="nav-list">
            <a href="#project" className="nav-link" onClick={handleResponsive}>
              Projects
            </a>
          </li>
        </ul>
      </nav>

      <div>
        <Switch />
      </div>

      <div
        className={responsive ? "hamburger active" : "hamburger"}
        onClick={handleResponsive}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Navbar;
