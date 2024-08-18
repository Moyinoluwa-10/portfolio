"use client";
import { ABOUTLIST } from "@/constants/home/about";
import { useCategory } from "@/context/category";
import { useEffect, useState } from "react";

type CategoryType = "developer" | "engineer";

const Experience = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { category } = useCategory();
  const resolvedCategory = category as CategoryType;
  const { experience } = ABOUTLIST[resolvedCategory];

  if (!mounted) return <div></div>;

  return (
    <div>
      <h3 className="text-xl md:text-2xl mb-4">Experience</h3>
      {experience.map((exp, index) => (
        <div key={index} className="mb-8">
          <h5 className="text-lg md:text-xl mb-4">
            {exp.title} - {exp.company} <br />
            <span className="text-secondary">{exp.date}</span>
          </h5>
          <ul className="flex flex-col gap-4 list-disc list-inside text-sm md:text-base">
            {exp.tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
