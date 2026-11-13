import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/animations";

export function IntroSection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-cream border-y border-primary-dark/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
            <span className="text-xs uppercase tracking-widest font-semibold text-accent-contrast mb-3 sm:mb-4">
              About Me
            </span>
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary-dark font-normal leading-relaxed">
              Based in Khyber Pakhtunkhwa (KPK), Pakistan, I am a full-stack web developer, freelancer, and student.
            </p>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-text-body font-light leading-relaxed">
              I specialize in developing modern web applications with React, Next.js, and Tailwind CSS, focusing on clean architecture and smooth interfaces. From dynamic publishing systems to digital storefronts, I build reliable digital experiences for clients and personal projects.
            </p>
            <div className="mt-7 sm:mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-dark hover:text-accent transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md py-1 px-1.5"
              >
                <span>Read more about my background</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
