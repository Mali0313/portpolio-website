import React from "react";
import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap } from "lucide-react";
import { FadeUp } from "@/components/animations";

const experiences = [
  {
    role: "Freelance Web Developer",
    icon: Briefcase,
    type: "Freelance",
    description:
      "Delivering complete, full-stack websites and customized web solutions for clients as an independent developer.",
  },
  {
    role: "Student",
    icon: GraduationCap,
    type: "Education",
    description:
      "Pursuing academic studies while continuously expanding expertise in full-stack web engineering and software development.",
  },
];

export function ExperienceSection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-cream border-t border-primary-dark/6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-accent-contrast mb-3 block">
              Career &amp; Learning
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-dark">
              Experience
            </h2>
            <p className="mt-3 sm:mt-4 text-base text-text-muted font-light">
              Current roles and academic pursuits shaping my development career.
            </p>
          </div>
        </FadeUp>

        {/* Experience List */}
        <div className="space-y-4 sm:space-y-6">
          {experiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeUp key={item.role} delay={index * 0.12}>
                <div className="bg-white rounded-2xl p-5 sm:p-8 border border-primary-dark/8 shadow-soft flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 justify-between hover:shadow-card transition-all duration-300">
                  <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-cream border border-primary-dark/8 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent-contrast" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <h3 className="font-serif text-xl sm:text-2xl font-normal text-primary-dark">
                          {item.role}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent-contrast text-[11px] font-medium tracking-wide uppercase">
                          {item.type}
                        </span>
                      </div>
                      <p className="mt-2 text-sm sm:text-base text-text-body font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <FadeUp delay={0.25}>
          <div className="mt-12 sm:mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-dark hover:text-accent-contrast transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md py-1 px-2"
            >
              <span>Interested in collaborating on a project? Let&apos;s talk</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
