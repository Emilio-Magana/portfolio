import { Experience } from "../config/schema";
import osu from "../assets/OSU-logo.png";
import lattice from "../assets/lattice-logo.png";

const logoMap = {
  Lattice: lattice,
  OSU: osu,
};

function TimelineItem({
  name,
  title,
  start,
  logo,
  end,
  description,
}: Experience) {
  const iconURL = logoMap[logo as keyof typeof logoMap];
  return (
    <div className="relative flex px-3 py-3">
      <img
        src={iconURL}
        className="bg-logoBg h-14 w-14 rounded-full object-contain"
      />

      <ul className="pl-8 text-left">
        <li className="text-primary text-sm">
          {start} - {end}
        </li>
        <li className="text-tertiary text-lg font-bold">
          <strong>{name}</strong>
        </li>
        <li className="text-secondary">{title}</li>
        <ul className="text-tertiary list-disc text-pretty pl-3">
          {description?.map((bullet, index) => <li key={index}>{bullet}</li>)}
        </ul>
      </ul>
    </div>
  );
}

export default TimelineItem;
