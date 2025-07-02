"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getCurrentIcon = () => {
    if (theme === "light") {
      return <Sun className="h-4 w-4" />;
    } else if (theme === "dark") {
      return <Moon className="h-4 w-4" />;
    } else {
      return <Monitor className="h-4 w-4" />;
    }
  };

  const getThemeLabel = () => {
    if (theme === "light") {
      return "Light theme";
    } else if (theme === "dark") {
      return "Dark theme";
    } else {
      return "System theme";
    }
  };

  // Show fallback during hydration
  if (!mounted) {
    return (
      <Button 
        variant="outline" 
        size="icon" 
        className="h-9 w-9"
        disabled
      >
        <Sun className="h-4 w-4" />
        <span className="sr-only">Loading theme toggle</span>
      </Button>
    );
  }

  return (
    <Button 
      variant="outline" 
      size="icon" 
      className="h-9 w-9"
      onClick={cycleTheme}
      title={`Current: ${getThemeLabel()}. Click to cycle themes.`}
    >
      {getCurrentIcon()}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
} 