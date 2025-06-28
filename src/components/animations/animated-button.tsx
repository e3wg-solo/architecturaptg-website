"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { forwardRef, ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <Button ref={ref} {...props}>
          {children}
        </Button>
      </motion.div>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton"; 