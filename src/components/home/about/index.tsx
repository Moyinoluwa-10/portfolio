import Image from "next/image";
// import { Button } from "@/ui";
// import Link from "next/link";
// import Experience from "./experience";
// import SkillsAndTools from "./skills";
import DownloadResume from "./resume";
import picture from "@/assets/images/home/picture.jpg";

export default function About() {
  return (
    <div className="px-5 pt-24 pb-10" id="about">
      <div className="container grid lg:grid-cols-[400px_1fr] gap-5 md:gap-16 text-black dark:text-accent-1 font-semibold">
        <div className="flex flex-col md:flex-row lg:flex-col gap-8">
          <Image
            src={picture}
            alt="profile image"
            className="w-full max-w-80 mb-8 rounded-lg"
          />
          {/* <SkillsAndTools /> */}
        </div>

        <div>
          <div className="mb-16">
            <h3 className="text-xl md:text-2xl mb-4">
              Hello, my name is Moyinoluwa Adelowo
            </h3>
            <p className="mb-8 text-sm md:text-base font-normal">
              {/* I am a passionate Mechanical Engineering and Software engineering
              student with a keen interest in robotics, mechanical design and
              production, software engineering, and problem-solving. I've worked
              on various projects, from building full-stack web applications and
              AI-powered platforms to designing robotic systems in research
              environments. I thrive in collaborative settings where innovative
              solutions and hands-on technical work intersect. <br /> <br /> I
              love playing soccer and ping-pong in my free time. My goal is to
              leverage technology to tackle real-world challenges, with a strong
              commitment to leaving a lasting mark on the tech landscape through
              meaningful contributions. Let's connect and discuss how to work
              together to create something great! */}
              I am a passionate mechanical and software engineer with a keen
              interest in robotics and problem-solving. I've worked on various
              projects, from building full-stack web applications and AI-powered
              platforms to designing robotic systems in research environments. I
              thrive in collaborative settings where innovative solutions and
              hands-on technical work intersect. <br /> <br /> I love playing
              soccer and ping-pong in my free time. My goal is to leverage
              technology to tackle real-world challenges, with a strong
              commitment to leaving a lasting mark on the tech landscape through
              meaningful contributions. Let's connect and discuss how to work
              together to create something great!
            </p>
            <div className="flex items-center gap-x-16 gap-y-8 flex-wrap">
              <DownloadResume />
              {/* <Button variant="secondary">Hire Me</Button> */}
              {/* <Link href={"/projects"}>
                <Button variant="secondary">View Projects</Button>
              </Link> */}
            </div>
          </div>

          {/* <div className="mb-16">
            <h3 className="text-xl md:text-2xl mb-4">Education</h3>
            <h5 className="text-lg md:text-xl mb-5">
              Alabama A&M University - B.Sc. Mechanical Engineering <br />
              <span className="text-secondary">August 2023 - May 2027</span>
            </h5>
            <h5 className="text-lg md:text-xl mb-5">
              TechWise by TalentSprint - Software Engineering <br />
              <span className="text-secondary">
                March 2024 - September 2025
              </span>
            </h5>
            <h5 className="text-lg md:text-xl">
              AltSchool Africa - Diploma, Software Engineering <br />
              <span className="text-secondary">April 2022 - June 2023</span>
            </h5>
          </div> */}
        </div>
      </div>
    </div>
  );
}
