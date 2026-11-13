import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/animations";

export function CtaSection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="relative rounded-3xl bg-[#2B1B14] text-white p-7 sm:p-14 md:p-20 text-center overflow-hidden border border-white/10 shadow-card">
            {/* Ambient Background Glow */}
            <div
              aria-hidden="true"
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] bg-accent/20 rounded-full blur-[90px] pointer-events-none"
            />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-widest font-semibold text-accent mb-3 sm:mb-4 inline-block">
                Start a Conversation
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-white leading-tight">
                Have a project in mind? Let&apos;s work together
              </h2>
              <p className="mt-3.5 sm:mt-4 text-sm sm:text-base text-white/75 font-light leading-relaxed">
                Available for freelance projects, custom web application development, and open collaborations.
              </p>

              <div className="mt-7 sm:mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full bg-accent text-[#2B1B14] font-medium text-sm tracking-wide shadow-soft hover:bg-[#b8916d] hover:shadow-card transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
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
