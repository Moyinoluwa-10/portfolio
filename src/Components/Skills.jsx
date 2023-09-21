// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faSass,
  faBootstrap,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { SiMysql, SiMongodb, SiTailwindcss, SiCplusplus } from "react-icons/si";
// others
import PropTypes from "prop-types";

const Skillset = ({ iconName, iconTitle, delay }) => {
  return (
    <div data-aos="fade-left" data-aos-delay={delay}>
      <div className="flex flex-col items-center gap-4">
        <div className="icon-container w-12 h-12 rounded-md bg-blue-dark dark:bg-blue-very-light flex items-center justify-center">
          <FontAwesomeIcon
            icon={iconName}
            className="text-blue-very-light dark:text-blue-dark text-2xl"
          />
        </div>
        <p className="text-base text-black dark:text-white">{iconTitle}</p>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="px-8 md:px-12 py-12 bg-light dark:bg-dark overflow-hidden">
      <div>
        <div>
          <h1
            className="text-4xl md:text-5xl text-center mb-4 text-slightly-black dark:text-slightly-white"
            data-aos="fade-up"
          >
            My Tools
          </h1>
        </div>
        <div>
          <p
            className="text-base md:text-xl text-center text-black dark:text-white mb-10"
            data-aos="fade-up"
          >
            Here are a few tools and technologies I use
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 md:gap-x-6 md:gap-y-10 flex-wrap">
        <Skillset iconName={faHtml5} iconTitle={"HTML"} delay={"50"} />
        <Skillset iconName={faCss3} iconTitle={"CSS"} delay={"100"} />
        <Skillset iconName={faJs} iconTitle={"Javascript"} delay={"150"} />
        <Skillset iconName={faPython} iconTitle={"Python"} delay={"200"} />
        <Skillset iconName={faReact} iconTitle={"React.js"} delay={"250"} />
        <Skillset iconName={faNodeJs} iconTitle={"Node.js"} delay={"300"} />
        <Skillset iconName={faSass} iconTitle={"Sass/SCSS"} delay={"350"} />
        <Skillset
          iconName={faBootstrap}
          iconTitle={"BootStrap"}
          delay={"400"}
        />
        <div
          className="flex items-center flex-col justify-center gap-4"
          data-aos="fade-left"
          data-aos-delay="450"
        >
          <SiTailwindcss className="bg-blue-dark text-blue-very-light rounded-md w-12 h-12 p-2 dark:bg-blue-very-light dark:text-blue-dark" />
          <p className="text-base text-black dark:text-white">Tailwind</p>
        </div>
        <div
          className="flex items-center flex-col justify-center gap-4"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <SiMysql className="bg-blue-dark text-blue-very-light rounded-md w-12 h-12 p-2 dark:bg-blue-very-light dark:text-blue-dark" />
          <p className="text-base text-black dark:text-white">MySQL</p>
        </div>
        <div
          className="flex items-center flex-col justify-center gap-4"
          data-aos="fade-left"
          data-aos-delay="550"
        >
          <SiMongodb className="bg-blue-dark text-blue-very-light rounded-md w-12 h-12 p-2 dark:bg-blue-very-light dark:text-blue-dark" />
          <p className="text-base text-black dark:text-white">MongoDB</p>
        </div>
        <div
          className="flex items-center flex-col justify-center gap-4"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <SiCplusplus className="bg-blue-dark text-blue-very-light rounded-md w-12 h-12 p-2 dark:bg-blue-very-light dark:text-blue-dark" />
          <p className="text-base text-black dark:text-white">C++</p>
        </div>
      </div>
    </div>
  );
};

Skillset.propTypes = {
  iconName: PropTypes.any,
  iconTitle: PropTypes.string,
  delay: PropTypes.string,
};

export default Skills;
