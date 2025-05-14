"use client";
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
    <div className="mt-4 flex w-full flex-col rounded-lg border-2 border-componentBg p-2 font-semibold text-tertiary">
      <img
        className="min-h-[210px] place-self-center rounded-md border border-cardBr"
        src={!isDarkMode && imageAlt ? imageAlt : image}
        alt="website preview"
      />
      <h1 className="capitaliz my-2 text-lg">{name}</h1>
      <figcaption className="mb-2 text-sm font-normal text-primary ipad_mini:line-clamp-5">
        {description}
      </figcaption>
      <div className="mt-auto flex flex-col gap-2">
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, id) => (
            <p
              key={id}
              className="w-fit rounded-lg bg-primary p-1 text-xs font-extrabold text-opposite"
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
              className="flex items-center gap-1 rounded-lg bg-tertiary p-1 text-sm font-semibold text-opposite duration-500"
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
