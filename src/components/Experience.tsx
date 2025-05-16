"use client";

import { useState } from "react";
import careerData from "../data/career.json";
import educationData from "../data/education.json";
import { careerSchema, educationSchema } from "../config/schema";
import Timeline from "@/ui/Timeline";
import { Tab, TabButton } from "@/ui/Tab";

const career = careerSchema.parse(careerData).career;
const education = educationSchema.parse(educationData).education;

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"Work" | "Education">("Work");
  function handleTabChange(tab: "Work" | "Education") {
    setActiveTab(tab);
  }
  return (
    <section
      className="my-8 animate-fade-in-up justify-evenly place-self-center px-1 opacity-0 delay-300"
      style={{ animationDelay: "0.4s" }}
    >
      <Tab>
        <TabButton
          label="Work"
          isActive={activeTab === "Work"}
          onTabChange={() => handleTabChange("Work")}
        />
        <TabButton
          label="Education"
          isActive={activeTab === "Education"}
          onTabChange={() => handleTabChange("Education")}
        />
      </Tab>

      <div className="mt-2 flex rounded-lg border-2 border-componentBg">
        {activeTab === "Work" && <Timeline experience={career} />}

        {activeTab === "Education" && <Timeline experience={education} />}
      </div>
    </section>
  );
}
