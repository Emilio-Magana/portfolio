import pfp from "/profile_pic.png";
import Socials from "./Socials";
import { FaFileDownload } from "react-icons/fa";
import { CgArrowsExpandDownRight } from "react-icons/cg";

const BIRTH_YEAR = 1999;
const MONTH: number = new Date().getMonth() + 1;

let EMILIO_AGE = new Date().getFullYear() - BIRTH_YEAR - 1;

if (MONTH >= 7) {
  EMILIO_AGE += 1;
}

export default function Introduction() {
  return (
    <section
      className="my-8 flex animate-fade-in-up flex-col gap-16 place-self-center text-pretty px-1 opacity-0"
      style={{ animationDelay: "0.2s" }}
    >
      <article className="flex items-center justify-between gap-8 phone:flex-col ipad_mini:flex-row-reverse">
        <img className="rounded-lg" src={pfp} alt="pfp" width={200} />

        <div>
          <h1 className="font-mono text-4xl tracking-tight text-tertiary">
            Heyo, I'm Emilio
            <p className="inline cursor-cell hover:animate-pulse">👋</p>
          </h1>
          <p className="mt-3 text-secondary">
            A {EMILIO_AGE} year old software developer from Oregon, in the
            United States. I like to develop fullstack, and spend my free time
            at a local climbing gym or biking around town!
          </p>
          <br />
          <p>
            For more Information ask Emi Bot!
            <CgArrowsExpandDownRight
              className="mx-2 inline animate-bounce"
              size={20}
            />
          </p>
        </div>
      </article>
      <div className="-mt-10 flex gap-8">
        <a href="/client/public/resume.pdf" target="_blank">
          <button className="group h-10 w-28 rounded-lg border bg-resumeBg text-nonActive duration-500 ease-in-out hover:text-resumeHov">
            <span className="font-semibold">Resume</span>
            <FaFileDownload
              size={18}
              className="mb-1 ml-2 inline animate-bounce"
            />
          </button>
        </a>
        <Socials />
      </div>
    </section>
  );
}
