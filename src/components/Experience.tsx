import { useState } from "react";
import { careerSchema, educationSchema } from "../config/schema";
import careerData from "../data/career.json";
import educationData from "../data/education.json";
import Timeline from "./Timeline";

const career = careerSchema.parse(careerData).career;
const education = educationSchema.parse(educationData).education;

const btnStyle: string = "w-1/2 h-[32px] rounded-md font-mono";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("work");
  function handleWorkTab() {
    setActiveTab("work");
  }
  function handleEducationTab() {
    setActiveTab("education");
  }
  return (
    <section
      className="animate-fade-in-up my-8 justify-evenly place-self-center px-1 opacity-0 delay-300"
      style={{ animationDelay: "0.4s" }}
    >
      <div className="border-componentBg bg-componentBg flex rounded-lg border-2 p-1">
        <button
          className={
            activeTab === "work"
              ? btnStyle + " text-tertiary bg-activeTab mr-[2px]"
              : btnStyle + " text-nonActive mr-[2px]"
          }
          onClick={handleWorkTab}
        >
          Work
        </button>
        <button
          className={
            activeTab === "education"
              ? btnStyle + " text-tertiary bg-activeTab ml-[2px]"
              : btnStyle + " text-nonActive ml-[2px]"
          }
          onClick={handleEducationTab}
        >
          Education
        </button>
      </div>
      <div className="border-componentBg mt-2 flex rounded-lg border-2">
        {activeTab === "work" && <Timeline experience={career} />}
        {activeTab === "education" && <Timeline experience={education} />}
      </div>
    </section>
  );
}
