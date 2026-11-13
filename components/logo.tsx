import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
}

export function LogoIcon({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const dimensions = {
    sm: "w-8 h-8",
    md: "w-9 h-9 sm:w-10 sm:h-10",
    lg: "w-12 h-12 sm:w-14 sm:h-14",
  };

  return (
    <div
      className={`relative rounded-xl overflow-hidden flex items-center justify-center shrink-0 bg-[#2B1B14] border border-accent/40 shadow-soft group-hover:border-accent transition-all duration-300 ${dimensions[size]} ${className}`}
    >
      {/* Subtle Ambient Radial Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-radial from-accent/25 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"
      />

      {/* Bespoke M + A Architectural Monogram */}
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-full p-1.5"
        role="img"
        aria-label="MA Logo Mark"
      >
        <defs>
          <linearGradient id="logoGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2C1A2" />
            <stop offset="50%" stopColor="#C9A27E" />
            <stop offset="100%" stopColor="#B38964" />
          </linearGradient>
        </defs>

        {/* Outer Minimal Decorative Framing Accents */}
        <path
          d="M6 12C6 8.68629 8.68629 6 12 6"
          stroke="url(#logoGoldGrad)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeOpacity="0.5"
        />
        <path
          d="M34 28C34 31.3137 31.3137 34 28 34"
          stroke="url(#logoGoldGrad)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeOpacity="0.5"
        />

        {/* Letter 'M' Architecture */}
        <path
          d="M11 28V14L20 23L29 14V28"
          stroke="url(#logoGoldGrad)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Central 'A' Crossbar & Subtle Terminal */}
        <line
          x1="15"
          y1="22"
          x2="25"
          y2="22"
          stroke="#FAF7F2"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeOpacity="0.9"
        />

        {/* Accent Vertex Spark */}
        <circle cx="20" cy="11" r="1.6" fill="#C9A27E" />
      </svg>
    </div>
  );
}

export function Logo({
  size = "md",
  showWordmark = true,
  className = "",
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <LogoIcon size={size} />

      {showWordmark && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-serif text-lg sm:text-xl font-normal tracking-wide text-white group-hover:text-accent transition-colors duration-200">
              Muhammad Ali
            </span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-accent/60" />
            <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest uppercase text-accent/80 font-medium">
              DEV
            </span>
          </div>
          <span className="text-[10px] sm:text-[11px] font-light tracking-wider text-white/50 -mt-0.5">
            Full-Stack Developer
          </span>
        </div>
      )}
    </div>
  );
}

