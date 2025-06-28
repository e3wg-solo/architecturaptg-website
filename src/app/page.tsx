import { FadeInUp, FadeInDown } from "@/components/animations";
import { AnimatedButton } from "@/components/animations/animated-button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/10">
        <div className="container mx-auto px-4 py-20 sm:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInDown delay={0.2}>
              <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
                Welcome to Topiconic
              </div>
            </FadeInDown>
            
            <FadeInUp delay={0.4}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Ready to Build
                <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                  {" "}Something Amazing
                </span>
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={0.6}>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                This is your clean slate. Built with Next.js, TypeScript, Tailwind CSS, 
                and a complete component library ready for your next project.
              </p>
            </FadeInUp>
            
            <FadeInUp delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton 
                  size="lg" 
                  className="text-lg px-8 py-6 h-auto"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </AnimatedButton>
                <AnimatedButton 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-6 h-auto"
                >
                  View Components
                </AnimatedButton>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">
                Built for Professionals
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to start building modern web applications
              </p>
            </div>
          </FadeInUp>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FadeInUp delay={0.2}>
              <div className="p-8 rounded-2xl border bg-card text-card-foreground hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-6">
                  <span className="text-brand-primary font-bold">TS</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">TypeScript Ready</h3>
                <p className="text-muted-foreground">
                  Full TypeScript support with strict mode enabled for type-safe development.
                </p>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={0.4}>
              <div className="p-8 rounded-2xl border bg-card text-card-foreground hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-brand-secondary/10 flex items-center justify-center mb-6">
                  <span className="text-brand-secondary font-bold">UI</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Component Library</h3>
                <p className="text-muted-foreground">
                  Complete set of shadcn/ui components with custom theming and animations.
                </p>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={0.6}>
              <div className="p-8 rounded-2xl border bg-card text-card-foreground hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-brand-accent/10 flex items-center justify-center mb-6">
                  <span className="text-brand-accent font-bold">DX</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Developer Experience</h3>
                <p className="text-muted-foreground">
                  Modern tooling with Next.js 15, Tailwind CSS v4, and optimized build setup.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </div>
  );
}
