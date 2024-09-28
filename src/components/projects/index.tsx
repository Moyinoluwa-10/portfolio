"use client";
import { useCategory } from "@/context/category";
import { useEffect, useState } from "react";
import EngineerProjects from "./engineer";
import DeveloperProjects from "./developer";
import Buttons from "./buttons";

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const { category } = useCategory();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="pt-28 pb-24">
      <div className="px-5">
        <div className="container mb-10">
          <h1 className="font-semibold text-2xl mb-6">Projects</h1>
          <Buttons />
        </div>
      </div>
      {category === "engineer" ? <EngineerProjects /> : <DeveloperProjects />}
    </div>
  );
}
