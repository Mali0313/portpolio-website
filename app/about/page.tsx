import type { Metadata } from "next";
import {
  BioSection,
  SkillsGrouped,
  ServicesSection,
  ExperienceSection,
} from "@/components/about";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn about Muhammad Ali, a Full-Stack Web Developer, freelancer, and student from Khyber Pakhtunkhwa, Pakistan. Discover my tech stack, workflow, and experience.",
  openGraph: {
    title: "About Me | Muhammad Ali",
    description:
      "Full-stack web developer from Khyber Pakhtunkhwa, Pakistan. Freelancer and student building full-stack websites with React and Next.js.",
    url: "/about",
  },
  twitter: {
    title: "About Me | Muhammad Ali",
    description:
      "Full-stack web developer from Khyber Pakhtunkhwa, Pakistan. Freelancer and student building full-stack websites with React and Next.js.",
  },
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <BioSection />
      <SkillsGrouped />
      <ServicesSection />
      <ExperienceSection />
    </main>
  );
}
