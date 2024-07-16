import Image from "next/image";
import displayPicture from "@/assets/images/contact/contact.png";
import { Button } from "@/ui";

const About = () => {
  return (
    <div className="px-5 pt-24 pb-16" id="about">
      <div className="container grid lg:grid-cols-[400px_1fr] gap-16 text-black dark:text-accent-1 font-semibold">
        <div className="flex flex-col md:flex-row lg:flex-col gap-8">
          <Image
            src={displayPicture}
            alt="profile image"
            className="w-full max-w-80 mb-8"
          />
          <div>
            <div className="mb-16">
              <h4 className="text-2xl mb-8">Skills</h4>
              <ul className="flex flex-col gap-4 list-disc list-inside">
                <li>Engineering Drawing</li>
                <li>Problem Solving</li>
                <li>Interpersonal and teamwork skills.</li>
                <li>Arduino Programming</li>
              </ul>
            </div>
            <div className="">
              <h4 className="text-2xl mb-8">Skills</h4>
              <ul className="flex flex-col gap-4 list-disc list-inside">
                <li>Engineering Drawing</li>
                <li>Problem Solving</li>
                <li>Interpersonal and teamwork skills.</li>
                <li>Arduino Programming</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-16">
            <h3 className="text-xl md:text-2xl mb-4">
              Hello, my name is Moyinoluwa Adelowo
            </h3>
            <p className="mb-8 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur. Pharetra sed sodales
              molestie amet augue ac. Integer etiam A curious and
              creativeMechanical Engineering scholar interested in mechanical
              design, manufacturing, automation, and software engineering. I am
              currently seeking an internship opportunity, am open to
              relocation, and am available for similar rolesSuspendisse rhoncus
              libero vitae est urna nullam luctus. Nec gravida arcu egestas
              donec bibendum.Lorem ipsum dolor sit amet consectetur. Pharetra
              sed sodales molestie amet augue ac. Integer etiam non etiam et
              adipiscing est. Suspendisse rhoncus libero vitae est urna nullam
              luctus. Nec gravida arcu egestas donec bibendum.L orem ipsum dolor
              sit amet consectetur. Pharetra sed sodales molestie amet augue ac.
              Integer etiam non etiam et adipiscing est. Suspendisse rhoncus
              libero vitae est urna nullam luctus. Nec gravida arcu egestas
              donec bibendum.Lorem ipsum dolor sit amet consectetur. Pharetra
              sed sodales molestie amet augue{" "}
            </p>
            <div className="flex items-center gap-x-16 gap-y-8 flex-wrap">
              <Button variant="secondary">Download Resume</Button>
              <Button variant="secondary">Hire Me</Button>
              <Button variant="secondary">Contact</Button>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-xl md:text-2xl mb-4">Education</h3>
            <h5 className="text-lg md:text-xl">
              Alabama Agricultural & Mechanical University - Bsc. Mechanical
              Engineering <br />
              <span className="text-secondary">May 2019 - August 2021</span>
            </h5>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl mb-4">Experience</h3>
            <h5 className="text-lg md:text-xl mb-4">
              Alabama Agricultural & Mechanical University - Bsc. Mechanical
              Engineering <br />
              <span className="text-secondary">May 2019 - August 2021</span>
            </h5>
            <ul className="flex flex-col gap-4 list-disc list-inside text-sm md:text-base">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore quod ex quis aut id voluptatibus vero magni dolores enim
                dolorum dolorem harum fugiat, nulla voluptatum ab adipisci amet.
                Delectus temporibus enim sint eum dolorum dolor. Numquam illo
                suscipit officia deserunt omnis laboriosam, voluptate fuga cum
                magni magnam fugiat illum debitis.
              </li>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet perferendis quos debitis, nesciunt iusto perspiciatis
                repellat praesentium itaque. Quasi, provident dolorem? Labore ad
                quae delectus ipsam fugiat amet cumque ratione, fugit eos
                debitis possimus pariatur quaerat rem facere. Minus nobis,
                deserunt facilis nesciunt et incidunt error sequi maiores ullam
                repudiandae.
              </li>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                voluptatum rem praesentium perferendis, sint sed rerum! Eius,
                debitis fugit aspernatur natus doloribus velit, earum eveniet
                accusamus odit ab aliquid rerum repellendus deserunt quidem illo
                veritatis dolores mollitia incidunt maxime officia labore
                praesentium non alias? Molestiae mollitia quod eaque inventore
                iure.
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
                doloremque. Id nihil doloremque corporis eos maiores eaque,
                deserunt ullam corrupti asperiores deleniti natus libero, qui
                error! Aspernatur a aperiam, dignissimos, repellat nulla
                reiciendis qui incidunt porro accusamus aliquid rem dolore
                commodi nemo error distinctio praesentium. Quos vero dicta illo
                velit.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
