import Image, { StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

interface CardProps {
  image: StaticImageData;
  description: string;
  title: string;
  toolsUsed: string[];
  githubLink?: string;
  liveLink?: string;
}

export default function Card({
  image,
  description,
  title,
  toolsUsed,
  githubLink,
  liveLink,
}: CardProps) {
  return (
    <div className="bg-black text-white dark:bg-primary-100 dark:text-black border-2 border-black dark:border-primary-100 rounded-xl overflow-hidden group transition-all duration-300">
      <div className="w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full grayscale-[80%] group-hover:grayscale-0 group-hover:scale-125 transition-all duration-300"
        />
      </div>
      <div className="px-5 py-7">
        <h3 className="uppercase mb-3 font-semibold text-xl">{title}</h3>
        <p className="mb-5 text-sm md:text-lg">{description}</p>
        <div className="flex flex-wrap items-center gap-3 mb-5">
          {toolsUsed.map((tools, index) => {
            return (
              <span
                key={index}
                className="inline-block rounded-lg bg-primary-100 dark:bg-black text-black dark:text-white py-1 px-3 text-sm"
              >
                {tools}
              </span>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {githubLink && (
            <div className="size-10 rounded-full p-1 grid place-items-center border border-primary-100 dark:border-black hover:bg-primary-100 dark:hover:bg-black hover:text-black dark:hover:text-white transition-all duration-300 cursor-pointer text-lg">
              <a href={githubLink} target={"_blank"} rel="noreferrer">
                <FaGithub />
              </a>
            </div>
          )}
          {liveLink && (
            <div className="size-10 rounded-full p-1 grid place-items-center border border-primary-100 dark:border-black hover:bg-primary-100 dark:hover:bg-black hover:text-black dark:hover:text-white transition-all duration-300 cursor-pointer text-lg">
              <a href={liveLink} target={"_blank"} rel="noreferrer">
                <FaExternalLinkAlt />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
