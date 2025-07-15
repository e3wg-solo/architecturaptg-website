"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SlideTextProps {
  texts: string[];
  duration?: number;
  direction?: "up" | "down";
  className?: string;
  textClassName?: string;
}

export function SlideText({
  texts,
  duration = 3000,
  direction = "up",
  className,
  textClassName
}: SlideTextProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    if (!texts.length || texts.length < 2) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsAnimating(false);
      }, 500); // Время анимации
    }, duration);

    return () => clearInterval(interval);
  }, [texts, duration]);

  if (!texts.length) return null;

  const slideClasses = direction === "up" 
    ? "translate-y-full" 
    : "-translate-y-full";

  return (
    <div className={cn("relative inline-block overflow-hidden", className)}>
      <div
        className={cn(
          "transition-transform duration-500 ease-in-out",
          isAnimating && slideClasses
        )}
      >
        <span className={cn("inline-block", textClassName)}>
          {texts[currentIndex]}
        </span>
      </div>
    </div>
  );
} 