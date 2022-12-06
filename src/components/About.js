import React from "react";
import "../styles/About.css";
import MyPic from "../assets/images/bg.jpg";
import Typed from "typed.js";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        "Some <i>strings</i> are slanted",
        "Some <strong>strings</strong> are bold",
        "HTML characters &times; &copy;",
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    Aos.init({ duration: 2000 });

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="about">
      <div className="about-title">
        <p className="top">HI THERE</p>
        {/* <div className="type-wrap">
          <span style={{ whiteSpace: "pre" }} ref={el} />
        </div> */}
        <h2>
          I AM MOYINOLUWA ADELOWO <span className="auto-type" ref={el}></span>
        </h2>
        <h1 className="top">An Expert Web Developer</h1>
        <p className="bottom">
          I am a passionate and goal driven Techpreneur whose interest is in
          using technology to build solutions to solve real world problems. I
          have had the luxury to work with great minds which has made me
          proactive and attentive to details
        </p>
      </div>

      <div data-aos="fade-right">
        <img src={MyPic} alt="Pictures" />
      </div>
    </div>
  );
};

export default About;
