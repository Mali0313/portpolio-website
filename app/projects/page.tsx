import type { Metadata } from "next";
import { ProjectCard, ProjectsCta } from "@/components/projects";
import { FadeUp } from "@/components/animations";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore full-stack web applications, AI platforms, and responsive sites engineered by Muhammad Ali, including NexusAI, WireDesk, BazaarHub, and Sweet Crust Bakery.",
  openGraph: {
    title: "Projects | Muhammad Ali",
    description:
      "Explore full-stack web applications, AI platforms, and responsive sites engineered by Muhammad Ali, including NexusAI, WireDesk, BazaarHub, and Sweet Crust Bakery.",
    url: "/projects",
  },
  twitter: {
    title: "Projects | Muhammad Ali",
    description:
      "Explore full-stack web applications, AI platforms, and responsive sites engineered by Muhammad Ali, including NexusAI, WireDesk, BazaarHub, and Sweet Crust Bakery.",
  },
};

export default function ProjectsPage() {
  return (
    <main className="flex-1 bg-cream">
      {/* Header Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 border-b border-primary-dark/6 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <span className="text-xs uppercase tracking-widest font-semibold text-accent-contrast mb-3 block">
              Portfolio &amp; Case Studies
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-primary-dark tracking-tight">
              My Projects
            </h1>
            <p className="mt-4 text-base sm:text-lg text-text-muted font-light max-w-2xl mx-auto leading-relaxed">
              Real web applications and responsive sites built with Next.js, React, Supabase, and Tailwind CSS.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Projects Cards List Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <ProjectsCta />
    </main>
  );
}
