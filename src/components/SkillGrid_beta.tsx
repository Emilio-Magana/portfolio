// import skillData from "../data/skills.json";
// import { skillSchema } from "../config/schema";
// import SkillCard from "./SkillCard";
// // emxgjood4 was the formerly working deployment. come back and figure out what went wrong

// const skills = skillSchema.parse(skillData).skills;

// export default  function SkillGrid() {
//   return (
//     <section
//       className="my-8 grid w-full animate-fade-in-up cursor-[url(/circle-outline.svg)_12_24,_auto] grid-cols-4 gap-1 place-self-center bg-transparent px-1 opacity-0"
//       style={{ animationDelay: "0.3s" }}
//     >
//       {skills.map((skill, key) => (
//         <SkillCard {...skill} key={key} />
//       ))}
//     </section>
//   );
// }

import {
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiReact,
  SiCss3,
  SiSupabase,
  SiGo,
  SiR,
} from "react-icons/si";
import skillData from "../data/skills.json";
import { iconSizeMap } from "../config/sizes";

interface Skill {
  name: keyof typeof skillComponents;
  size: string;
}
const skillComponents = {
  TailwindCSS: SiTailwindcss,
  TypeScript: SiTypescript,
  Python: SiPython,
  ReactJs: SiReact,
  CSS: SiCss3,
  Go: SiGo,
  R: SiR,
  Supabase: SiSupabase,
};
const colorMap = {
  TailwindCSS: "hover:text-cyan-400",
  TypeScript: "hover:text-[#007acc]",
  Python: "hover:text-yellow-300",
  ReactJs: "hover:text-cyan-300",
  CSS: "hover:text-[#264de4]",
  Go: "hover:text-[#00ADD8]",
  R: "hover:text-blue-300",
  Supabase: "hover:text-green-500",
};

const sectionStyle: string =
  "grid grid-cols-4 animate-fade-in-up opacity-0 bg-transparent gap-1 place-self-center cursor-[url(/circle-outline.svg)_12_24,_auto] my-8 px-1 w-full ";
const btnStyle: string =
  "rounded-lg border border-skillBr h-[70px] duration-100 ease-in-out hover:bg-skillTileBg group cursor-[url(/circle-outline.svg)_12_24,_auto] pt-1 ";
const iconStyle: string =
  "inline-block transform duration-150 group-hover:-translate-y-2";
const nameStyle: string = "text-xs text-primary mt-[1px]";

function SKillCard({ name, size }: Skill) {
  const SkillIcon = skillComponents[name as keyof typeof skillComponents];
  const iconSize = iconSizeMap[size];
  const iconColor = colorMap[name];

  let padding: string = " pt-1 ";
  if (name === "Go") padding = " pb-2 ";
  return (
    <button className={btnStyle + iconColor} key={name}>
      <SkillIcon size={iconSize} className={iconStyle} />
      <p className={nameStyle + padding}>{name}</p>
    </button>
  );
}

export default function SkillGrid() {
  return (
    <section className={sectionStyle} style={{ animationDelay: "0.3s" }}>
      {skillData.skills.map((skill, key) => (
        <SKillCard {...(skill as Skill)} key={key} />
      ))}
    </section>
  );
}
