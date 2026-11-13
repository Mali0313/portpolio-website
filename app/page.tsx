import type { Metadata } from "next";
import {
  HeroSection,
  IntroSection,
  FeaturedProjectsSection,
  SkillsStripSection,
  CtaSection,
} from "@/components/home";

export const metadata: Metadata = {
  title: "Home | Full-Stack Web Developer",
  description:
    "Portfolio of Muhammad Ali, a Full-Stack Web Developer from KPK, Pakistan. I build full-stack websites with React and Next.js, from news platforms to online stores.",
  openGraph: {
    title: "Muhammad Ali | Full-Stack Web Developer",
    description:
      "I build full-stack websites with React and Next.js, from news platforms to online stores.",
    url: "/",
  },
  twitter: {
    title: "Muhammad Ali | Full-Stack Web Developer",
    description:
      "I build full-stack websites with React and Next.js, from news platforms to online stores.",
  },
};

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <IntroSection />
      <FeaturedProjectsSection />
      <SkillsStripSection />
      <CtaSection />
    </main>
  );
}
