"use client";

import { iconSizeMap } from "@/config/sizes";
import { technicalIcons } from "@/config/icons";
import { Skill } from "@/config/schema";
import skillData from "@/data/skills.json";
import { skillSchema } from "@/config/schema";
import { useTheme } from "next-themes";

const skills = skillSchema.parse(skillData).skills;

export default function SkillGrid() {
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

const btnStyle: string =
  " rounded-lg border border-skillBr h-[70px] duration-100 ease-in-out hover:bg-skillTileBg group cursor-[url(/circle-outline.svg)_12_24,_auto] pt-1 ";
const nameStyle: string = " text-xs text-secondary mt-[1px] ";

function SkillCard({ name, hover_color, size }: Skill) {
  const { resolvedTheme } = useTheme();
  const SkillIcon = technicalIcons[name as keyof typeof technicalIcons];

  let padding: string = " pt-1 ";
  if (name === "NextJs") {
    padding = "";
    if (resolvedTheme === "light") {
      hover_color = "hover:text-[#111111]";
    } else {
      hover_color = "hover:text-[#eeeeee]";
    }
  }

  return (
    <button className={btnStyle + hover_color} key={name}>
      <SkillIcon
        size={iconSizeMap[size]}
        className="inline-block transform duration-150 group-hover:-translate-y-2"
      />
      <p className={nameStyle + padding}>{name}</p>
    </button>
  );
}

//when failure hits -->>

// import {
//   SiTailwindcss,
//   SiTypescript,
//   SiPython,
//   SiReact,
//   SiCss3,
//   SiSupabase,
//   SiR,
// } from "react-icons/si";
// import { RiNextjsFill } from "react-icons/ri";
// import { iconSizeMap } from "../config/sizes";
// import skillData from "@/data/skills.json";
// import { skillSchema } from "@/config/schema";

// const skills = skillSchema.parse(skillData).skills;

// interface Skill {
//   name: string;
//   size: string;
// }
// const skillComponents = {
//   TailwindCSS: SiTailwindcss,
//   TypeScript: SiTypescript,
//   Python: SiPython,
//   ReactJs: SiReact,
//   CSS: SiCss3,
//   NextJs: RiNextjsFill,
//   R: SiR,
//   Supabase: SiSupabase,
// };
// const colorMap = {
//   TailwindCSS: "hover:text-cyan-400",
//   TypeScript: "hover:text-[#007acc]",
//   Python: "hover:text-yellow-300",
//   ReactJs: "hover:text-cyan-300",
//   CSS: "hover:text-[#264de4]",
//   NextJs: "hover:text-[#111111]",
//   R: "hover:text-blue-300",
//   Supabase: "hover:text-green-500",
// };

// const btnStyle: string =
//   "rounded-lg border border-skillBr h-[70px] duration-100 ease-in-out hover:bg-skillTileBg group cursor-[url(/circle-outline.svg)_12_24,_auto] pt-1 ";
// const iconStyle: string =
//   "inline-block transform duration-150 group-hover:-translate-y-2";
// const nameStyle: string = "text-xs text-primary mt-[1px]";

// function SkillCard({ name, size }: Skill) {
//   const SkillIcon = skillComponents[name as keyof typeof skillComponents];

//   let padding: string = " pt-1 ";
//   if (name === "NextJs") {
//     padding = " ";
//   }
//   return (
//     <button
//       className={btnStyle + colorMap[name as keyof typeof skillComponents]}
//       key={name}
//     >
//       <SkillIcon size={iconSizeMap[size]} className={iconStyle} />
//       <p className={nameStyle + padding}>{name}</p>
//     </button>
//   );
// }

// export default function SkillGrid() {
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
