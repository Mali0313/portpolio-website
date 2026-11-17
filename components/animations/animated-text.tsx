"use client";

import React, { useMemo } from "react";
import { motion, type Variants, useReducedMotion } from "framer-motion";

export type AnimatedTextTag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div";

export interface AnimatedTextProps {
  /** The text to animate word-by-word */
  text: string;
  /** Optional container class name */
  className?: string;
  /** Initial delay before animation starts (in seconds) */
  delay?: number;
  /** Delay between each word's reveal (in seconds, default 0.12) */
  speed?: number;
  /** HTML element to render (default "p") */
  as?: AnimatedTextTag;
  /** Optional class name for individual words */
  wordClassName?: string;
}

const motionTagMap = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  p: motion.p,
  span: motion.span,
  div: motion.div,
} as const;

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  speed = 0.12,
  as = "p",
  wordClassName = "",
}: AnimatedTextProps) {
  const shouldReduceMotion = useReducedMotion();

  // Split text into individual words
  const words = useMemo(() => {
    if (!text) return [];
    return text.trim().split(/\s+/);
  }, [text]);

  const containerVariants: Variants = useMemo(
    () => ({
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: delay,
          staggerChildren: speed,
        },
      },
    }),
    [delay, speed]
  );

  // If user prefers reduced motion, render clean static text with original tag and styling
  if (shouldReduceMotion) {
    const StaticTag = as;
    return <StaticTag className={className}>{text}</StaticTag>;
  }

  const MotionComponent = motionTagMap[as] || motion.p;

  return (
    <MotionComponent
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={wordVariants}
          className={`inline-block mr-[0.25em] last:mr-0 will-change-[transform,opacity,filter] ${wordClassName}`.trim()}
        >
          {word}
        </motion.span>
      ))}
    </MotionComponent>
  );
}
