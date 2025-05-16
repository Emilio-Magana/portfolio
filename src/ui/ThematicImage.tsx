import { useTheme } from "next-themes";
import React from "react";

interface ImageProps {
  imageAlt: string | undefined;
  image: string;
  name: string;
  description: string;
}

export default function ThematicImage({
  imageAlt,
  image,
  name,
  description,
}: ImageProps) {
  const { resolvedTheme } = useTheme();
  return (
    <div>
      {" "}
      <img
        className="min-h-[255px] place-self-center rounded-md border border-cardBr"
        src={resolvedTheme === "light" && imageAlt ? imageAlt : image}
        alt="website preview"
      />
      <h1 className="capitaliz my-2 text-lg">{name}</h1>
      <figcaption className="mb-2 text-sm font-normal text-tertiary ipad_mini:line-clamp-5">
        {description}
      </figcaption>
    </div>
  );
}
