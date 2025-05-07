import { SiGithub } from "react-icons/si";
import { useDarkMode } from "../context/DarkModeContext";
import { Project } from "../config/schema";

import { SlGlobeAlt } from "react-icons/sl";
import { iconSizeMap } from "../config/sizes";

export default function ProjectCard({
  name,
  description,
  image,
  imageAlt,
  tags,
  links,
}: Project) {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="text-tertiary border-componentBg mt-4 flex w-full flex-col rounded-lg border-2 p-2 font-semibold">
      <img
        className="border-cardBr min-h-[210px] place-self-center rounded-md border"
        src={!isDarkMode && imageAlt ? imageAlt : image}
        alt="website preview"
      />
      <h1 className="capitaliz my-2 text-lg">{name}</h1>
      <figcaption className="text-primary ipad_mini:line-clamp-5 mb-2 text-sm font-normal">
        {description}
      </figcaption>
      <div className="mt-auto flex flex-col gap-2">
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, id) => (
            <p
              key={id}
              className="bg-primary text-opposite w-fit rounded-lg p-1 text-xs font-extrabold"
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="flex justify-start gap-1">
          {links.map((link, id) => (
            <a
              key={id}
              href={link.href}
              target="_blank"
              className="bg-tertiary text-opposite flex items-center gap-1 rounded-lg p-1 text-sm font-semibold duration-500"
            >
              {link.name === "Source" ? (
                <SiGithub size={iconSizeMap[link.size]} />
              ) : (
                <SlGlobeAlt size={iconSizeMap[link.size]} />
              )}
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
