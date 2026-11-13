"use client";

import React from "react";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/animations";
import { ProfileAvatar } from "./profile-avatar";
import { siteConfig } from "@/data/site-config";

export function BioSection() {
  return (
    <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
            <span className="text-xs uppercase tracking-widest font-semibold text-accent-contrast mb-3 block">
              Biography &amp; Background
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-primary-dark tracking-tight">
              About Me
            </h1>
            <p className="mt-3.5 sm:mt-4 text-base sm:text-lg text-text-muted font-light leading-relaxed">
              Full-stack web developer, freelancer, and student based in Khyber Pakhtunkhwa, Pakistan.
            </p>
          </div>
        </FadeUp>

        {/* Two-Column Layout (Stacked on Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Photo / Avatar */}
          <div className="lg:col-span-5 flex justify-center">
            <FadeUp delay={0.12}>
              <ProfileAvatar name={siteConfig.owner.name} />
            </FadeUp>
          </div>

          {/* Right Column: Bio Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <FadeUp delay={0.2}>
              <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-text-body font-light leading-relaxed">
                <p>
                  I am <strong className="font-medium text-primary-dark">{siteConfig.owner.name || "[YOUR FULL NAME]"}</strong>, a full-stack web developer from Khyber Pakhtunkhwa, Pakistan. Balancing work as an independent freelancer and a dedicated student, I specialize in crafting complete, responsive, and robust web applications.
                </p>

                <p>
                  I build complete websites with React and Next.js, emphasizing clean code structure, high performance, and smooth user interfaces. To enhance speed and precision during development, I integrate modern AI-assisted tools like Antigravity alongside Visual Studio Code into my core engineering process.
                </p>

                <p>
                  Through continuous building and freelancing, I have developed numerous full-scale projects, including an editorial full-stack news platform, an end-to-end e-commerce marketplace store, and a custom static website for a bakery store.
                </p>
              </div>

              {/* Actions: Download CV & Contact */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-accent text-[#2B1B14] font-medium text-sm tracking-wide shadow-soft hover:bg-[#b8916d] hover:shadow-card transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark"
                >
                  <Download className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
                  <span>Download CV</span>
                </a>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-cream border border-primary-dark/10 text-primary-dark font-medium text-sm tracking-wide hover:bg-primary-dark/5 hover:border-primary-dark/20 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span>Contact Me</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
