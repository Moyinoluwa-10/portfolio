import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [responsive, setResponsive] = useState(false);
  const handleResponsive = () => {
    setResponsive(!responsive);
  };

  return (
    <>
      <div className="navbar">
        <div className="name-tag">
          <h1>Moyinoluwa Adelowo</h1>
        </div>

        <nav className={responsive ? "nav active" : "nav"}>
          <ul className="nav-menu">
            <li className="nav-list">
              <a href="/#" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-list">
              <a href="#about" className="nav-link">
                About Me
              </a>
            </li>
            <li className="nav-list">
              <a href="#contact" className="nav-link">
                Contact Me
              </a>
            </li>
            <li className="nav-list">
              <a href="#project" className="nav-link">
                Projects
              </a>
            </li>
          </ul>
        </nav>

        <div
          className={responsive ? "hamburger active" : "hamburger"}
          onClick={handleResponsive}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
