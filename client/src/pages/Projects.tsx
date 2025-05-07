import ProjectCard from "../components/ProjectCard";
import { projectSchema } from "../config/schema";
import projectData from "../data/projects.json";

const projects = projectSchema.parse(projectData).projects;

export default function Projects() {
  return (
    <section className="my-8 px-1">
      <h1 className="text-tertiary font-mono text-3xl">my projects.</h1>
      <div
        className="animate-fade-in-up grid place-self-center opacity-0"
        style={{ animationDelay: "0.1s" }}
      >
        {projects.map((project, key) => (
          <ProjectCard {...project} key={key} />
        ))}
      </div>
    </section>
  );
}
