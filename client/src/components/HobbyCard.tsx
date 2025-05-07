// import MapTile from "./MapTile";
import { Hobby } from "../config/schema";

export default function HobbyCard({ name, description }: Hobby) {
  return (
    <div className="text-tertiary border-componentBg mt-4 flex w-full flex-col rounded-lg border-2 p-2 font-semibold">
      {/* <Maptile/> */}
      <h1 className="capitaliz my-2 text-lg">{name}</h1>
      <figcaption className="text-primary ipad_mini:line-clamp-5 mb-2 text-sm font-normal">
        {description}
      </figcaption>
    </div>
  );
}
