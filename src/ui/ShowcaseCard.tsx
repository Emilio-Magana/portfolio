"use client";

import { Showcase } from "../config/schema";
import { SourceButtons } from "./Buttons";
import Tags from "./Tags";
import ThematicImage from "./ThematicImage";

export default function ShowcaseCard({
  name,
  description,
  image,
  imageAlt,
  tags,
  links,
}: Showcase) {
  return (
    <div className="mt-4 flex w-full flex-col rounded-lg border-2 border-componentBg p-2 font-semibold text-tertiary">
      <ThematicImage
        imageAlt={imageAlt}
        image={image}
        name={name}
        description={description}
      />
      <div className="mt-auto flex flex-col gap-2">
        <Tags tags={tags} />
        <SourceButtons links={links} />
      </div>
    </div>
  );
}
