import imageOne from "@/assets/images/contact/contact.png";
import Image from "next/image";
import Buttons from "./buttons";

const ProjectInfo = () => {
  return (
    <div className="pt-12 pb-16">
      <div className="container px-5 font-semibold text-black dark:text-primary-100">
        <h2 className="mb-9 text-accent-1 dark:text-alt-4">
          Projects {">"}{" "}
          <span className="text-[#131313] dark:text-white">
            SolidWorks Design and Simulation
          </span>
        </h2>
        <Buttons />
        <Image
          src={imageOne}
          alt="activity"
          className="mx-auto mb-16 max-w-3xl"
        />
        <h3 className="mb-14 text-xl">
          Designed various mechanical components using Solid Edge and Solid
          Works
        </h3>
        <div className="mb-14">
          <h4 className="mb-4 text-xl">Index</h4>
          <ul>
            <li>Background</li>
            <li>Purpose</li>
            <li>Methodology</li>
            <li>Accomplishment</li>
            <li>Impact</li>
          </ul>
        </div>
      </div>
      <div className="bg-alt-4 px-5 py-10 container mb-14"></div>
      <div className="container px-5 font-semibold text-black dark:text-primary-100">
        <div>
          <h4 className="mb-4 text-xl">Background</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Pharetra sed sodales
            molestie amet augue ac. Integer etiam A curious and
            creativeMechanical Engineering scholar interested in mechanical
            design, manufacturing, automation, and software engineering. I am
            currently seeking an internship opportunity, am open to relocation,
            and am available for similar rolesSuspendisse rhoncus libero vitae
            est urna nullam luctus. Nec gravida arcu egestas donec
            bibendum.Lorem ipsum dolor sit amet consectetur. Pharetra sed
            sodales molestie amet augue ac. Integer etiam non etiam et
            adipiscing est. Suspendisse rhoncus libero vitae est urna nullam
            luctus. Nec gravida arcu egestas donec bibendum.L orem ipsum dolor
            sit amet consectetur. Pharetra sed sodales molestie amet augue ac.
            Integer etiam non etiam et adipiscing est. Suspendisse rhoncus
            libero vitae est urna nullam luctus. Nec gravida arcu egestas donec
            bibendum.Lorem ipsum dolor sit amet consectetur. Pharetra sed
            sodales molestie amet augue <br />
            <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Iure rerum excepturi ipsam assumenda! In asperiores reiciendis,
            illum ut debitis magnam fuga error inventore id dolores alias omnis
            ipsum eligendi odit blanditiis voluptatem necessitatibus? Cum
            consequatur nam dignissimos illum soluta corporis odit enim in ipsa
            veritatis, facilis rem iusto doloribus assumenda, nobis
            necessitatibus labore, ipsam inventore perferendis recusandae! Omnis
            quasi odio distinctio facere quae necessitatibus dicta accusantium
            fugiat dolorem libero provident officiis ratione cumque qui non
            quam, nihil eos nobis quisquam. Iusto non eum ad eos repellat
            doloremque, soluta quia veniam? Nam blanditiis accusantium maiores
            quae error odit dicta vero fugit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
