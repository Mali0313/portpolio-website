"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProfileAvatarProps {
  name: string;
}

export function ProfileAvatar({ name }: ProfileAvatarProps) {
  const [hasError, setHasError] = useState(false);

  const getInitials = (fullName: string) => {
    if (!fullName) return "MA";
    const parts = fullName.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <div className="relative w-full max-w-sm sm:max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden bg-[#2B1B14] border border-primary-dark/10 shadow-card flex items-center justify-center">
      {!hasError ? (
        <Image
          src="/images/profile.jpg"
          alt={name ? `Portrait photograph of ${name}` : "Profile portrait"}
          fill
          priority
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 420px"
          onError={() => setHasError(true)}
          className="object-cover object-top transition-transform duration-500 hover:scale-105"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#352219] to-[#2B1B14] text-center select-none">
          {/* Subtle Ambient Glow */}
          <div
            aria-hidden="true"
            className="absolute w-40 h-40 bg-accent/20 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Elegant Initials Circle */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center mb-6 shadow-soft">
              <span className="font-serif text-3xl sm:text-4xl font-normal text-accent tracking-wider">
                {getInitials(name)}
              </span>
            </div>

            <h3 className="font-serif text-2xl font-normal text-white">
              {name || "Muhammad Ali"}
            </h3>

            <p className="mt-2 text-xs font-medium uppercase tracking-widest text-accent">
              Full-Stack Web Developer
            </p>

            <p className="mt-1 text-xs text-white/50">
              KPK, Pakistan
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
