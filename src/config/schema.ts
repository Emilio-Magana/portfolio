import { z } from "zod";

const social = z.object({
  name: z.string(),
  href: z.string().url(),
  size: z.string(),
});
const skill = z.object({
  name: z.string(),
  hover_color: z.string(),
  size: z.string(),
});
const project = z.object({
  image: z.string(),
  imageAlt: z.string().optional(),
  name: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  links: z.array(social),
});
const experience = z.object({
  name: z.string(),
  href: z.string(),
  title: z.string(),
  logo: z.string(),
  start: z.string(),
  end: z.string().optional(),
  description: z.array(z.string()).optional(),
});
const hobby = z.object({
  name: z.string(),
  description: z.string(),
});

const socialSchema = z.object({ socials: z.array(social) });
const skillSchema = z.object({ skills: z.array(skill) });
const projectSchema = z.object({ projects: z.array(project) });
const careerSchema = z.object({ career: z.array(experience) });
const educationSchema = z.object({ education: z.array(experience) });
const hobbySchema = z.object({ hobbies: z.array(hobby) });

type IconLink = z.infer<typeof social>;
type Skill = z.infer<typeof skill>;
type Showcase = z.infer<typeof project>;
type Experience = z.infer<typeof experience>;
type Hobby = z.infer<typeof hobby>;

export type { Showcase, Experience, IconLink, Skill, Hobby };
export {
  projectSchema,
  careerSchema,
  educationSchema,
  socialSchema,
  skillSchema,
  hobbySchema,
};
