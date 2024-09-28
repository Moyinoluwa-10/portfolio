"use client";
import { ABOUTLIST } from "@/constants/home/about";
import { useCategory } from "@/context/category";
import { useEffect, useState } from "react";
import {
  FaBootstrap,
  FaCss3,
  FaGit,
  FaGithub,
  FaGitlab,
  FaHtml5,
  FaJira,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
} from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiDjango,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type CategoryType = "developer" | "engineer";

const IconContainer = ({ icon }: { icon: React.ReactElement }) => {
  return (
    <div className="w-12 h-12 rounded-md bg-black text-white dark:bg-primary-100 dark:text-black flex items-center justify-center text-2xl">
      {icon}
    </div>
  );
};

const SkillsAndTools = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { category } = useCategory();
  const resolvedCategory = category as CategoryType;
  const { skills, tools } = ABOUTLIST[resolvedCategory];

  if (!mounted) return <div></div>;

  return (
    <div>
      <div className="mb-6">
        <h4 className="text-2xl mb-2">Skills</h4>
        <ul className="flex flex-col gap-2 list-disc list-inside font-normal">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="">
        <h4 className="text-2xl mb-2">Tools</h4>
        {resolvedCategory === "engineer" && (
          <ul className="flex flex-col gap-2 list-disc list-inside font-normal">
            {tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        )}
        {resolvedCategory === "developer" && (
          <div className="flex flex-wrap gap-4">
            <IconContainer icon={<FaPython />} />
            <IconContainer icon={<SiTypescript />} />
            <IconContainer icon={<SiJavascript />} />
            <IconContainer icon={<FaGit />} />
            <IconContainer icon={<FaGithub />} />
            <IconContainer icon={<FaGitlab />} />
            <IconContainer icon={<FaNodeJs />} />
            <IconContainer icon={<SiDjango />} />
            <IconContainer icon={<RiNextjsFill />} />
            <IconContainer icon={<FaNodeJs />} />
            <IconContainer icon={<SiMongodb />} />
            <IconContainer icon={<SiPostgresql />} />
            <IconContainer icon={<FaJira />} />
            <IconContainer icon={<FaHtml5 />} />
            <IconContainer icon={<FaCss3 />} />
            <IconContainer icon={<FaSass />} />
            <IconContainer icon={<SiTailwindcss />} />
            <IconContainer icon={<FaBootstrap />} />
            <IconContainer icon={<FaReact />} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsAndTools;
