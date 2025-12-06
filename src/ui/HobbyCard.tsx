// import MapTile from "./MapTile";
import { Hobby } from "../config/schema";

export default function HobbyCard({ name, description }: Hobby) {
  return (
    <div className="mt-4 flex w-full flex-col rounded-lg border-2 border-componentBg p-2 font-semibold text-primary">
      {/* <Maptile/> */}
      <h1 className="capitaliz my-2 text-lg">{name}</h1>
      <figcaption className="mb-2 text-sm font-normal text-secondary ipad_mini:line-clamp-5">
        {description}
      </figcaption>
    </div>
  );
}
