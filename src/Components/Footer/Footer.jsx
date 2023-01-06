import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-container">
        <div className="empty-container"></div>
        <div>
          <h2>Moyinoluwa Adelowo</h2>
        </div>
        <div className="empty-container"></div>
      </div>

      <div className="middle-container1">
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
            href="https://twitter.com/rotii_mii"
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

      <div className="middle-container2">
        <a href="mailto:moyinadelowo@gmail.com" className="socials">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />{" "}
          moyinadelowo@gmail.com
        </a>
        <a href="tel:08104553618" className="socials">
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />{" "}
          08104553618
        </a>
      </div>

      <div className="bottom-container">
        <p>Copyright &copy; 2022 | All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
