"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { FadeInDown } from "@/components/animations";

export function Header() {
  return (
    <FadeInDown>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
        <div className="flex h-14 items-center justify-between">
          {/* Logo/Site Title */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                <span className="text-lg font-bold text-white">T</span>
              </div>
              <span className="hidden font-bold text-xl sm:inline-block">
                Topiconic
              </span>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link 
              href="/" 
              className="transition-colors hover:text-brand-primary"
            >
              Home
            </Link>
            <Link 
              href="/components" 
              className="transition-colors hover:text-brand-primary"
            >
              Components
            </Link>
            <Link 
              href="/about" 
              className="transition-colors hover:text-brand-primary"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="transition-colors hover:text-brand-primary"
            >
              Contact
            </Link>
          </nav>

          {/* Right side - Theme Toggle and Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile Navigation Button - will be implemented with Navigation component */}
            <button className="md:hidden p-2 rounded-md hover:bg-accent hover:text-accent-foreground">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
    </FadeInDown>
  );
} 