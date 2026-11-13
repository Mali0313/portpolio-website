import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/animations";

export function ProjectsCta() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-cream border-t border-primary-dark/6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="relative rounded-3xl bg-[#2B1B14] text-white p-7 sm:p-14 md:p-16 text-center overflow-hidden border border-white/10 shadow-card">
            {/* Ambient Background Glow */}
            <div
              aria-hidden="true"
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 sm:w-80 h-72 sm:h-80 bg-accent/20 rounded-full blur-[80px] pointer-events-none"
            />

            <div className="relative z-10 max-w-xl mx-auto">
              <span className="text-xs uppercase tracking-widest font-semibold text-accent mb-3 inline-block">
                Start a New Project
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-white">
                Want something like this built for you?
              </h2>
              <p className="mt-3.5 sm:mt-4 text-sm sm:text-base text-white/75 font-light leading-relaxed">
                Whether you need a dynamic news publishing platform, an online store, or a tailored full-stack web application, let&apos;s build it together.
              </p>

              <div className="mt-7 sm:mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-accent text-[#2B1B14] font-medium text-sm tracking-wide shadow-soft hover:bg-[#b8916d] hover:shadow-card transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Contact Me</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
