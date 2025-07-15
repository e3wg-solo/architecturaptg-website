"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface WaveTextProps {
  texts: string[];
  duration?: number;
  className?: string;
  textClassName?: string;
}

export function WaveText({
  texts,
  duration = 3000,
  className,
  textClassName
}: WaveTextProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [animationKey, setAnimationKey] = React.useState(0);

  React.useEffect(() => {
    if (!texts.length || texts.length < 2) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setAnimationKey(prev => prev + 1);
    }, duration);

    return () => clearInterval(interval);
  }, [texts, duration]);

  if (!texts.length) return null;

  const currentText = texts[currentIndex];

  return (
    <div className={cn("relative inline-block", className)}>
      <span className={cn("inline-block", textClassName)}>
        {currentText.split('').map((char, index) => (
          <span
            key={`${animationKey}-${index}`}
            className="inline-block animate-bounce"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationDuration: "1s",
              animationIterationCount: "1",
              animationFillMode: "both"
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </div>
  );
} 