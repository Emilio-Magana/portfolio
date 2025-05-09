import { Experience } from "../config/schema";
import TimelineItem from "./TimelineItem";

function Timeline({ experience }: { experience: Experience[] }) {
  return (
    <div>
      {experience.map((exp, id) => (
        <TimelineItem key={id} {...exp} />
      ))}
    </div>
  );
}

export default Timeline;
