import React from "react";
import { sourceIcons } from "@/config/icons";
import { iconSizeMap } from "../config/sizes";

interface LinkProps {
  links: {
    href: string;
    name: string;
    size: string;
  }[];
}

export default function SourceButtons({ links }: LinkProps) {
  return (
    <div className="flex justify-start gap-1">
      {links.map((link, id) => {
        const SourceIcon = sourceIcons[link.name as keyof typeof sourceIcons];
        const iconSize = iconSizeMap[link.size];

        return (
          <a
            key={id}
            href={link.href}
            target="_blank"
            className="flex items-center gap-1 rounded-lg bg-tertiary p-1 text-sm font-semibold text-opposite duration-500"
          >
            <SourceIcon size={iconSize} />
            <span>{link.name}</span>
          </a>
        );
      })}
    </div>
  );
}
