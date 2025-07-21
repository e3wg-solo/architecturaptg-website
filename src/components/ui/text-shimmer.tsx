import React from 'react';
import { cn } from '@/lib/utils';

interface TextShimmerProps {
  children: React.ReactNode;
  className?: string;
  duration?: string;
}

export function TextShimmer({ 
  children, 
  className, 
  duration = "7s"
}: TextShimmerProps) {
  return (
    <span
      className={cn(
        "inline-block bg-gradient-to-r from-brand-primary via-black to-brand-primary bg-[length:200%_100%] bg-clip-text text-transparent",
        className
      )}
      style={{
        animation: `shimmer ${duration} ease-in-out infinite`,
      }}
    >
      {children}
    </span>
  );
} 