import React, { useRef, useEffect } from "react";
import "./Landing.css";
import Navbar from "../Navbar/Navbar";
import Typed from "typed.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Landing = () => {
  const autoRef = useRef(null);
  const typed = useRef(null);
  const options = {
    strings: [
      "Moyinoluwa Adelowo",
      "a Fullstack Web Developer",
      "a Software Engineer",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  };

  useEffect(() => {
    typed.current = new Typed(autoRef.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="landing">
      <Navbar />

      <div className="landing-container">

      <div className="landing-content">
        <p className="landing__text">Hi There 👋</p>
        <h2 className="landing__heading">
          I am <span className="auto-type" ref={autoRef}></span>
        </h2>
      </div>

      <div className="landing__footer">
        <div>
          <a
            href="https://www.linkedin.com/in/moyinoluwa-adelowo-675565239/"
            target={"_blank"}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icons" />
          </a>
        </div>
        <div>
          <a
            href="https://twitter.com/AdelowoMoyin"
            target={"_blank"}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="icons" />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/Moyinoluwa-10"
            target={"_blank"}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icons" />
          </a>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Landing;
