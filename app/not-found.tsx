import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { FadeUp } from "@/components/animations";

export default function NotFound() {
  return (
    <main className="flex-1 min-h-[75vh] flex items-center justify-center bg-cream px-4 sm:px-6 py-24">
      <div className="max-w-xl mx-auto text-center">
        <FadeUp>
          {/* Decorative Number Badge */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white border border-primary-dark/8 shadow-soft text-accent mb-8">
            <Compass className="w-10 h-10 stroke-[1.5]" />
          </div>

          <span className="text-xs uppercase tracking-widest font-semibold text-accent-contrast block mb-2">
            Error 404
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-primary-dark tracking-tight">
            Page Not Found
          </h1>

          <p className="mt-4 text-base sm:text-lg text-text-muted font-light leading-relaxed max-w-md mx-auto">
            The page you are looking for doesn&apos;t exist, has been removed, or is temporarily unavailable.
          </p>

          {/* Action Links */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-accent text-[#2B1B14] font-medium text-sm tracking-wide shadow-soft hover:bg-[#b8916d] hover:shadow-card transition-all duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-primary-dark border border-primary-dark/10 font-medium text-sm tracking-wide hover:bg-cream hover:border-primary-dark/20 transition-all duration-300"
            >
              <span>Explore Projects</span>
            </Link>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}

