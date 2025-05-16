import { SiLinkedin, SiGithub } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import {
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiReact,
  SiCss3,
  SiSupabase,
  SiGo,
  SiR,
  SiExpress,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SlGlobeAlt } from "react-icons/sl";

const technicalIcons = {
  TailwindCSS: SiTailwindcss,
  TypeScript: SiTypescript,
  Python: SiPython,
  ReactJs: SiReact,
  NextJs: RiNextjsFill,
  CSS: SiCss3,
  Go: SiGo,
  R: SiR,
  Supabase: SiSupabase,
  Express: SiExpress,
};
const socialIcons = {
  LinkedIn: SiLinkedin,
  GitHub: SiGithub,
  Email: MdEmail,
};
const sourceIcons = {
  Website: SlGlobeAlt,
  Source: SiGithub,
};

export { sourceIcons, socialIcons, technicalIcons };
