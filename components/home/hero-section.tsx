"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#2B1B14] text-white pt-24 pb-16 sm:pt-28 sm:pb-20">
      {/* Background Image Layer with Graceful Dark Brown Fallback */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-overlay transition-opacity duration-700 pointer-events-none"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      {/* Subtle Animated Ambient Glows */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            aria-hidden="true"
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] bg-accent rounded-full blur-[100px] sm:blur-[120px] pointer-events-none will-change-transform"
          />

          <motion.div
            aria-hidden="true"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-10 right-1/4 w-[280px] sm:w-[360px] h-[280px] sm:h-[360px] bg-accent rounded-full blur-[90px] sm:blur-[110px] pointer-events-none will-change-transform"
          />
        </>
      )}

      {/* Subtle Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.04] via-transparent to-transparent pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Small Label */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium tracking-wider uppercase text-accent mb-5 sm:mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          {siteConfig.owner.role}
        </motion.div>

        {/* Big Heading */}
        <motion.h1
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white max-w-4xl leading-[1.15] break-words"
        >
          Hi, I&apos;m{" "}
          <span className="text-white font-normal">
            {siteConfig.owner.name || "[YOUR FULL NAME]"}
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-5 sm:mt-6 text-base sm:text-xl text-white/85 max-w-2xl font-light leading-relaxed"
        >
          I build full-stack websites with React and Next.js, from news platforms to online stores.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
        >
          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-accent text-[#2B1B14] font-medium text-sm tracking-wide shadow-soft hover:bg-[#b8916d] hover:shadow-card transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>View My Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/5 text-white border border-white/20 font-medium text-sm tracking-wide hover:bg-white/10 hover:border-white/40 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span>Contact Me</span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll-Down Indicator */}
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/50 pointer-events-none"
      >
        <span className="text-[10px] sm:text-[11px] tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
