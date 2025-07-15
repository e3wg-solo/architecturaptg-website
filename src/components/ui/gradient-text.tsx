"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  texts: string[];
  duration?: number;
  className?: string;
  textClassName?: string;
}

export function GradientText({
  texts,
  duration = 3000,
  className,
  textClassName
}: GradientTextProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    if (!texts.length || texts.length < 2) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setTimeout(() => {
          setIsAnimating(false);
        }, 200);
      }, 300);
    }, duration);

    return () => clearInterval(interval);
  }, [texts, duration]);

  if (!texts.length) return null;

  return (
    <div className={cn("relative inline-block", className)}>
      <span
        className={cn(
          "inline-block transition-all duration-500 ease-in-out bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent",
          "bg-[length:200%_100%] animate-gradient-x",
          isAnimating && "scale-105 brightness-110",
          textClassName
        )}
        style={{
          backgroundSize: "200% 100%",
          animation: "gradient-x 3s ease infinite"
        }}
      >
        {texts[currentIndex]}
      </span>
    </div>
  );
} 