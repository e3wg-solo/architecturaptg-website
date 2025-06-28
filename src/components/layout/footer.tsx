import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                <span className="text-lg font-bold text-white">T</span>
              </div>
              <span className="font-bold text-xl">Topiconic</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Professional website built with Next.js, TypeScript, Tailwind CSS, and modern web technologies. 
              Clean, scalable, and ready for your next project.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://github.com" 
                className="text-muted-foreground hover:text-brand-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link 
                href="https://twitter.com" 
                className="text-muted-foreground hover:text-brand-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link 
                href="https://linkedin.com" 
                className="text-muted-foreground hover:text-brand-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link 
                href="mailto:contact@topiconic.com" 
                className="text-muted-foreground hover:text-brand-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/components" 
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://nextjs.org" 
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Next.js
                </Link>
              </li>
              <li>
                <Link 
                  href="https://tailwindcss.com" 
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS
                </Link>
              </li>
              <li>
                <Link 
                  href="https://ui.shadcn.com" 
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  shadcn/ui
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.framer.com/motion" 
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Framer Motion
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 Topiconic. All rights reserved.
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              <span>and modern technologies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 