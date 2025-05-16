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
//whered my colors go????

const btnStyle: string =
  "rounded-lg border border-skillBr h-[70px] duration-100 ease-in-out hover:bg-skillTileBg group cursor-[url(/circle-outline.svg)_12_24,_auto] pt-1 ";
const iconStyle: string =
  "inline-block transform duration-150 group-hover:-translate-y-2";
const nameStyle: string = "text-xs text-secondary mt-[1px]";

function SkillCard({ name, hover_color, size }: Skill) {
  const SkillIcon = technicalIcons[name as keyof typeof technicalIcons];
  const iconSize = iconSizeMap[size];
  const { resolvedTheme } = useTheme();

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
      <SkillIcon size={iconSize} className={iconStyle} />
      <p className={nameStyle + padding}>{name}</p>
    </button>
  );
}
