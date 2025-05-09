import { Link } from "wouter";
import ProjectCard from "./ProjectCard";
import { projectSchema } from "../config/schema";
import projectData from "../data/projects.json";

const projects = projectSchema.parse(projectData).projects;

export default function FeaturedProjects() {
  return (
    <section
      className="animate-fade-in-up my-8 px-1 opacity-0"
      style={{ animationDelay: "0.5s" }}
    >
      <h1 className="text-tertiary flex justify-between font-mono text-2xl font-bold">
        Featured Projects
        <Link
          className="pr-2 pt-[10px] text-sm duration-200 hover:translate-x-1"
          to="/projects"
        >
          View More &rarr;
        </Link>
      </h1>

      <div className="ipad_mini:grid-cols-2 grid gap-3 place-self-center">
        {projects.map((skill, key) => (
          <ProjectCard {...skill} key={key} />
        ))}
      </div>
    </section>
  );
}
