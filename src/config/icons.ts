import { MdEmail } from "react-icons/md";
import {
  SiTypescript,
  SiPython,
  SiReact,
  SiR,
  SiLinkedin,
  SiGithub,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SlGlobeAlt } from "react-icons/sl";
import { PiFileCppFill } from "react-icons/pi";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoHardwareChip } from "react-icons/io5";

const technicalIcons = {
  CPP: PiFileCppFill,
  Verilog: IoHardwareChip,
  TypeScript: SiTypescript,
  Python: SiPython,
  ReactJs: SiReact,
  NextJs: RiNextjsFill,
  PostgreSQL: BiLogoPostgresql,
  R: SiR,
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
