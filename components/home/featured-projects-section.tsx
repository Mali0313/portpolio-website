import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FadeUp } from "@/components/animations";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjectsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-accent-contrast mb-3 block">
              Selected Work
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-dark tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-3 sm:mt-4 text-base text-text-muted font-light">
              Real web applications designed and developed with modern full-stack technologies.
            </p>
          </div>
        </FadeUp>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          {featuredProjects.map((project, index) => (
            <FadeUp key={project.id} delay={index * 0.12}>
              <div className="group relative flex flex-col justify-between h-full bg-cream/30 hover:bg-cream/60 border border-primary-dark/8 rounded-2xl p-5 sm:p-7 transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                <div>
                  {/* Thumbnail Preview */}
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-[#2B1B14] border border-primary-dark/10 shadow-soft">
                    <Image
                      src={project.image}
                      alt={`${project.title} Preview`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#2B1B14]/85 text-accent border border-accent/30 text-[10px] font-semibold tracking-wider uppercase backdrop-blur-sm shadow-sm hover:bg-[#2B1B14] hover:border-accent transition-all duration-200"
                        title={`Open live demo of ${project.title}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live</span>
                      </a>
                    )}
                  </div>

                  {/* Category Pill */}
                  <span className="inline-block px-3 py-1 rounded-full bg-white border border-primary-dark/8 text-[11px] font-medium tracking-wide uppercase text-accent-contrast mb-3">
                    {project.category}
                  </span>

                  {/* Project Title */}
                  <h3 className="font-serif text-2xl font-normal text-primary-dark group-hover:text-accent-contrast transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs font-medium text-text-muted mt-1 uppercase tracking-wider">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-sm text-text-body font-light leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white border border-primary-dark/6 text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[11px] font-medium px-1.5 py-0.5 text-text-muted">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Link Bar */}
                <div className="mt-6 pt-4 border-t border-primary-dark/8 flex items-center justify-between gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent text-[#2B1B14] font-semibold text-xs tracking-wide shadow-soft hover:bg-[#b8916d] hover:shadow-card transition-all duration-300 group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  )}

                  <Link
                    href={project.href || "/projects"}
                    className="inline-flex items-center gap-1 text-xs font-medium text-primary-dark hover:text-accent-contrast transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md py-1 px-1.5"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* View All Projects Link */}
        <FadeUp delay={0.25}>
          <div className="mt-10 sm:mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-primary-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md py-1 px-2"
            >
              <span>Explore all projects on the Projects page</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
