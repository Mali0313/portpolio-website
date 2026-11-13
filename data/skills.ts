export const skillsList = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Supabase",
  "Git & GitHub",
  "VS Code",
  "Antigravity",
] as const;

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const groupedSkills: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend & Database",
    skills: ["Supabase"],
  },
  {
    category: "Tools",
    skills: ["VS Code", "Antigravity", "Git & GitHub"],
  },
];
