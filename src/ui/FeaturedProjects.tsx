import { projectSchema } from "../config/schema";
import projectData from "../data/projects.json";
import Link from "next/link";
import ShowcaseCard from "@/ui/ShowcaseCard";

const projects = projectSchema.parse(projectData).projects;

export default function FeaturedProjects() {
  return (
    <section
      className="my-8 animate-fade-in-up px-1 opacity-0"
      style={{ animationDelay: "0.5s" }}
    >
      <h1 className="flex justify-between font-mono text-2xl font-bold text-primary">
        Featured Projects
        <Link
          className="pr-2 pt-[10px] text-sm duration-200 hover:translate-x-1"
          href="/projects"
        >
          View More &rarr;
        </Link>
      </h1>

      <div className="grid gap-3 place-self-center ipad_mini:grid-cols-2">
        {projects.map((skill, key) => (
          <ShowcaseCard {...skill} key={key} />
        ))}
      </div>
    </section>
  );
}
