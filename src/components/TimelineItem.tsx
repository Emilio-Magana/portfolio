import { Experience } from "../config/schema";
function TimelineItem({
  name,
  title,
  start,
  logo,
  end,
  description,
}: Experience) {
  return (
    <div className="relative flex px-3 py-3">
      <img
        src={logo}
        className="h-14 w-14 rounded-full bg-logoBg object-contain"
      />

      <ul className="pl-8 text-left">
        <li className="text-sm text-primary">
          {start} - {end}
        </li>
        <li className="text-lg font-bold text-tertiary">
          <strong>{name}</strong>
        </li>
        <li className="text-secondary">{title}</li>
        <ul className="list-disc text-pretty pl-3 text-tertiary">
          {description?.map((bullet, index) => <li key={index}>{bullet}</li>)}
        </ul>
      </ul>
    </div>
  );
}

export default TimelineItem;
