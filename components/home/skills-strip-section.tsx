"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FadeUp } from "@/components/animations";
import { skillsList } from "@/data/skills";

export function SkillsStripSection() {
  const shouldReduceMotion = useReducedMotion();
  const marqueeSkills = [...skillsList, ...skillsList, ...skillsList];

  return (
    <section className="py-16 md:py-20 bg-cream border-y border-primary-dark/6 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 text-center">
        <FadeUp>
          <span className="text-xs uppercase tracking-widest font-semibold text-accent-contrast mb-2 block">
            Technical Toolkit
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-primary-dark">
            Skills &amp; Technologies
          </h2>
        </FadeUp>
      </div>

      {shouldReduceMotion ? (
        /* Reduced Motion: Static clean flex wrap for all devices */
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {skillsList.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-primary-dark/8 text-sm font-medium text-text-body shadow-xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      ) : (
        /* Animated Marquee Strip */
        <>
          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

            <motion.div
              animate={{ x: ["0%", "-33.333%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
              className="flex items-center gap-4 whitespace-nowrap will-change-transform"
            >
              {marqueeSkills.map((skill, index) => (
                <div
                  key={`${skill}-${index}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white border border-primary-dark/8 text-sm font-medium text-text-body shadow-xs hover:border-accent hover:shadow-soft transition-all duration-200 select-none"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>{skill}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Accessible fallback for small screens (360px) */}
          <div className="mt-8 max-w-4xl mx-auto px-4 sm:px-6 block sm:hidden">
            <div className="flex flex-wrap justify-center gap-2">
              {skillsList.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-primary-dark/8 text-xs font-medium text-text-body"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
