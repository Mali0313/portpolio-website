"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { FadeUp } from "@/components/animations";
import { ProjectImage } from "./project-image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isImageLeft = index % 2 === 0;

  return (
    <FadeUp delay={index * 0.12}>
      <article className="group relative bg-white border border-primary-dark/8 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-soft hover:shadow-card hover:border-primary-dark/15 transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 lg:gap-12 items-center">
          {/* Media Column (Alternating on Desktop) */}
          <div
            className={`lg:col-span-6 ${
              isImageLeft ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <ProjectImage
              src={project.image}
              alt={`${project.title} Preview`}
              title={project.title}
              type={project.type}
            />
          </div>

          {/* Details Column (Alternating on Desktop) */}
          <div
            className={`lg:col-span-6 flex flex-col justify-center ${
              isImageLeft ? "lg:order-2" : "lg:order-1"
            }`}
          >
            {/* Project Type Badge */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs uppercase tracking-widest font-semibold text-accent-contrast">
                {project.type}
              </span>
            </div>

            {/* Project Title */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-primary-dark tracking-tight">
              {project.title}
            </h2>

            {/* Comprehensive Description */}
            <p className="mt-3.5 sm:mt-4 text-sm sm:text-base text-text-body font-light leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="mt-5 sm:mt-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-text-muted block mb-2 sm:mb-2.5">
                Technologies Used
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-cream border border-primary-dark/6 text-xs font-medium text-primary-dark"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions: Live Demo & GitHub */}
            <div className="mt-7 sm:mt-8 pt-5 sm:pt-6 border-t border-primary-dark/6 flex flex-wrap items-center gap-3">
              {/* Conditional Live Link Button (Rendered on all projects with liveUrl) */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-[#2B1B14] font-semibold text-xs sm:text-sm tracking-wide shadow-soft hover:bg-[#b8916d] hover:shadow-card transition-all duration-300 group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              )}

              {/* GitHub Source Link */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream hover:bg-white text-primary-dark border border-primary-dark/10 hover:border-accent font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    </FadeUp>
  );
}
