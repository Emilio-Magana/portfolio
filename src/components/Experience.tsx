"use client";

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
      className="my-8 animate-fade-in-up justify-evenly place-self-center px-1 opacity-0 delay-300"
      style={{ animationDelay: "0.4s" }}
    >
      <div className="flex rounded-lg border-2 border-componentBg bg-componentBg p-1">
        <button
          className={
            activeTab === "work"
              ? btnStyle + " mr-[2px] bg-activeTab text-tertiary"
              : btnStyle + " mr-[2px] text-nonActive"
          }
          onClick={handleWorkTab}
        >
          Work
        </button>
        <button
          className={
            activeTab === "education"
              ? btnStyle + " ml-[2px] bg-activeTab text-tertiary"
              : btnStyle + " ml-[2px] text-nonActive"
          }
          onClick={handleEducationTab}
        >
          Education
        </button>
      </div>
      <div className="mt-2 flex rounded-lg border-2 border-componentBg">
        {activeTab === "work" && <Timeline experience={career} />}
        {activeTab === "education" && <Timeline experience={education} />}
      </div>
    </section>
  );
}
