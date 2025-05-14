import ProjectCard from "../components/ProjectCard";
import { projectSchema } from "../config/schema";
import projectData from "../data/projects.json";

// at top of the page add a list of skill tags which are clickable and will
// filter projects based on skill clicked on, allow for multiple filters and
// a clear all filters button

const projects = projectSchema.parse(projectData).projects;

export default function Projects() {
  return (
    <section className="my-8 px-1">
      <h1 className="font-mono text-3xl text-tertiary">my projects.</h1>
      <div
        className="grid animate-fade-in-up place-self-center opacity-0"
        style={{ animationDelay: "0.1s" }}
      >
        {projects.map((project, key) => (
          <ProjectCard {...project} key={key} />
        ))}
      </div>
    </section>
  );
}
