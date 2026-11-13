"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Layers } from "lucide-react";

interface ProjectImageProps {
  src: string;
  alt: string;
  title: string;
  type: string;
}

export function ProjectImage({ src, alt, title, type }: ProjectImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-[#2B1B14] border border-primary-dark/10 shadow-soft group">
      {!hasError ? (
        <Image
          src={src}
          alt={alt || `Preview screenshot of ${title}`}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 580px"
          onError={() => setHasError(true)}
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        /* Elegant Brown Placeholder Block */
        <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-[#382319] via-[#2B1B14] to-[#20130D] text-white select-none">
          {/* Subtle Ambient Radial Glow */}
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/20 rounded-full blur-3xl pointer-events-none"
          />

          {/* Browser Window Header Mockup */}
          <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
            <span className="text-[11px] font-mono text-white/40 tracking-wider">
              {title.toLowerCase()}.app
            </span>
          </div>

          {/* Center Title and Type Indicator */}
          <div className="relative z-10 text-center my-auto py-6">
            <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 mx-auto flex items-center justify-center mb-4 text-accent">
              <Layers className="w-5 h-5 text-accent" />
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl font-normal text-white">
              {title}
            </h4>
            <p className="mt-2 text-xs uppercase tracking-widest text-accent font-medium max-w-xs mx-auto">
              {type}
            </p>
          </div>

          {/* Bottom Card Footer */}
          <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
            <span>Production Project</span>
            <span className="text-accent/80 font-mono">Full-Stack</span>
          </div>
        </div>
      )}
    </div>
  );
}
