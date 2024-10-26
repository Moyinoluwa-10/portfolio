import { FEATUREDPROJECTS } from "@/constants/projects/projects";
import Card from "./card";
import { Button } from "@/ui";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="mb-16 px-5 pt-14 pb-16" id="projects">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-10 mb-8">
          <h3 className="text-2xl font-semibold text-[#131313] dark:text-white">
            Featured Projects
          </h3>
          <Link href={"/projects"}>
            <Button variant="secondary">View all projects</Button>
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {FEATUREDPROJECTS.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
