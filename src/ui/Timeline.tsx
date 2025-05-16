import { Experience } from "../config/schema";

export default function Timeline({ experience }: { experience: Experience[] }) {
  return (
    <div>
      {experience.map((exp, id) => (
        <TimelineItem key={id} {...exp} />
      ))}
    </div>
  );
}

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
        <li className="text-sm text-secondary">
          {start} - {end}
        </li>
        <li className="text-lg font-bold text-primary">
          <strong>{name}</strong>
        </li>
        <li className="text-tertiary">{title}</li>
        <ul className="list-disc text-pretty pl-3 text-primary">
          {description?.map((bullet, index) => <li key={index}>{bullet}</li>)}
        </ul>
      </ul>
    </div>
  );
}
