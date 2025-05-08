import { iconSizeMap } from "../config/sizes";
import { Icons } from "../config/icons";
import { Skill } from "../config/schema";

const btnStyle: string =
  "rounded-lg border border-skillBr h-[70px] duration-100 ease-in-out hover:bg-skillTileBg group cursor-[url(/circle-outline.svg)_12_24,_auto] pt-1 ";
const iconStyle: string =
  "inline-block transform duration-150 group-hover:-translate-y-2";
const nameStyle: string = "text-xs text-primary mt-[1px]";

export default function SkillCard({ name, hover_color, size }: Skill) {
  const SkillIcon = Icons[name as keyof typeof Icons];
  const iconSize = iconSizeMap[size];

  let padding: string = " pt-1 ";
  if (name === "Go") padding = " pb-2 ";

  return (
    <button className={btnStyle + hover_color} key={name}>
      <SkillIcon size={iconSize} className={iconStyle} />
      <p className={nameStyle + padding}>{name}</p>
    </button>
  );
}
