import skillData from "../data/skills.json";
import { skillSchema } from "../config/schema";
import SkillCard from "./SkillCard";

const skills = skillSchema.parse(skillData).skills;

function SkillGrid() {
  return (
    <section
      className="my-8 grid w-full animate-fade-in-up cursor-[url(/circle-outline.svg)_12_24,_auto] grid-cols-4 gap-1 place-self-center bg-transparent px-1 opacity-0"
      style={{ animationDelay: "0.3s" }}
    >
      {skills.map((skill, key) => (
        <SkillCard {...skill} key={key} />
      ))}
    </section>
  );
}

export default SkillGrid;
