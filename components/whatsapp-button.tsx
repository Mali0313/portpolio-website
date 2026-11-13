"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function WhatsAppButton() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <aside
      aria-label="Direct messaging contact"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40"
    >
      <motion.a
        href={siteConfig.socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp"
        initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
        className="group flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-[#2B1B14] text-white border border-accent/40 shadow-card hover:border-accent hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <span className="relative flex items-center justify-center">
          <MessageCircle className="w-4 h-4 text-accent group-hover:scale-110 transition-transform duration-200" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </span>
        <span className="text-xs font-medium tracking-wide text-white/90 group-hover:text-white transition-colors">
          Chat on WhatsApp
        </span>
      </motion.a>
    </aside>
  );
}
