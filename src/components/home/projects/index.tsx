import { PROJECTS } from "@/constants/projects/projects";
import Card from "./card";

const Projects = () => {
  return (
    <div className="mb-16 px-5 pt-14 pb-16" id="projects">
      <div className="container">
        <h3 className="text-2xl font-semibold mb-8 text-[#131313] dark:text-white">
          Projects
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROJECTS.map((project, index) => (
            <Card key={index} title={project.title} image={project.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
