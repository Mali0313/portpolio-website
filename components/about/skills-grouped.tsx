import React from "react";
import { FadeUp } from "@/components/animations";
import { groupedSkills } from "@/data/skills";

export function SkillsGrouped() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-cream border-y border-primary-dark/6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-accent-contrast mb-3 block">
              Core Competencies
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-dark">
              Technical Skills
            </h2>
            <p className="mt-3 sm:mt-4 text-base text-text-muted font-light">
              Structured frontend, backend, and development tooling expertise.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {groupedSkills.map((group, groupIdx) => (
            <FadeUp key={group.category} delay={groupIdx * 0.12}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-primary-dark/8 shadow-soft hover:shadow-card transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-primary-dark/6 mb-5 sm:mb-6">
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-primary-dark">
                      {group.category}
                    </h3>
                    <span className="text-xs font-mono text-accent-contrast bg-accent/10 px-2.5 py-1 rounded-full">
                      0{groupIdx + 1}
                    </span>
                  </div>

                  {/* Skills Tag Cloud / Pills */}
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-cream/70 border border-primary-dark/6 text-xs sm:text-sm font-medium text-text-body hover:border-accent hover:bg-cream transition-colors duration-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-7 sm:mt-8 pt-4 border-t border-primary-dark/5 flex items-center justify-between text-xs text-text-muted">
                  <span>{group.skills.length} {group.skills.length === 1 ? "Technology" : "Technologies"}</span>
                  <span className="text-accent-contrast font-medium">• Active</span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
