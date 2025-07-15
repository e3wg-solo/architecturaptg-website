"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface RotatingTextProps {
  texts: string[];
  duration?: number;
  className?: string;
  textClassName?: string;
}

export function RotatingText({
  texts,
  duration = 2500,
  className,
  textClassName
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    if (!texts.length || texts.length < 2) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 300); // Время для fade out
    }, duration);

    return () => clearInterval(interval);
  }, [texts, duration]);

  if (!texts.length) return null;

  return (
    <div className={cn("relative inline-block", className)}>
      <span
        className={cn(
          "inline-block transition-all duration-300 ease-in-out transform",
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-2",
          textClassName
        )}
      >
        {texts[currentIndex]}
      </span>
    </div>
  );
} 