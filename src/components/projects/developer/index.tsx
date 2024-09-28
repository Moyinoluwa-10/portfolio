import { DEVELOPERPROJECTS } from "@/constants/projects/projects";
import Card from "./card";

export default function DeveloperProjects() {
  return (
    <div className="px-5">
      <div className="container grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
        {DEVELOPERPROJECTS.map((project, index) => {
          return <Card key={index} {...project} />;
        })}
      </div>
    </div>
  );
}
