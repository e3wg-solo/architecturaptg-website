import { cn } from "@/lib/utils";

export default function TestPage() {
  const testMessage: string = "Next.js App Router with TypeScript is working!";
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="gradient-primary absolute inset-0 opacity-10" />
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-bold text-gradient animate-slide-in-top">
              Design System Test
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-in-bottom">
              {testMessage}
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* TypeScript Card */}
          <div className={cn(
            "bg-card text-card-foreground rounded-lg p-6 shadow-custom",
            "hover:shadow-custom-lg transition-all duration-300",
            "border border-border animate-fade-in"
          )}>
            <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mb-4">
              <span className="text-white font-bold text-xl">TS</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">TypeScript</h3>
            <p className="text-muted-foreground">
              ✅ Type-safe development with strict mode enabled
            </p>
          </div>

          {/* Tailwind CSS Card */}
          <div className={cn(
            "bg-card text-card-foreground rounded-lg p-6 shadow-custom",
            "hover:shadow-custom-lg transition-all duration-300",
            "border border-border animate-fade-in"
          )}>
            <div className="w-12 h-12 bg-brand-secondary rounded-lg flex items-center justify-center mb-4">
              <span className="text-white font-bold text-xl">TW</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Tailwind CSS v4</h3>
            <p className="text-muted-foreground">
              ✅ Modern utility-first CSS framework with custom theme
            </p>
          </div>

          {/* App Router Card */}
          <div className={cn(
            "bg-card text-card-foreground rounded-lg p-6 shadow-custom",
            "hover:shadow-custom-lg transition-all duration-300",
            "border border-border animate-fade-in"
          )}>
            <div className="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center mb-4">
              <span className="text-white font-bold text-xl">AR</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">App Router</h3>
            <p className="text-muted-foreground">
              ✅ Next.js 15 App Router with server components
            </p>
          </div>
        </div>
      </div>

      {/* Color Palette Demo */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          
          {/* Brand Colors */}
          <div className="space-y-3">
            <div className="w-full h-20 bg-brand-primary rounded-lg shadow-custom" />
            <div className="text-center">
              <p className="font-medium">Brand Primary</p>
              <p className="text-sm text-muted-foreground">#6366f1</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="w-full h-20 bg-brand-secondary rounded-lg shadow-custom" />
            <div className="text-center">
              <p className="font-medium">Brand Secondary</p>
              <p className="text-sm text-muted-foreground">#8b5cf6</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="w-full h-20 bg-brand-accent rounded-lg shadow-custom" />
            <div className="text-center">
              <p className="font-medium">Brand Accent</p>
              <p className="text-sm text-muted-foreground">#06b6d4</p>
            </div>
          </div>

          {/* Semantic Colors */}
          <div className="space-y-3">
            <div className="w-full h-20 bg-success rounded-lg shadow-custom" />
            <div className="text-center">
              <p className="font-medium">Success</p>
              <p className="text-sm text-muted-foreground">#22c55e</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="w-full h-20 bg-warning rounded-lg shadow-custom" />
            <div className="text-center">
              <p className="font-medium">Warning</p>
              <p className="text-sm text-muted-foreground">#f59e0b</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="w-full h-20 bg-destructive rounded-lg shadow-custom" />
            <div className="text-center">
              <p className="font-medium">Destructive</p>
              <p className="text-sm text-muted-foreground">#ef4444</p>
            </div>
          </div>
        </div>
      </div>

      {/* Typography Demo */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Typography Scale</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="text-6xl font-bold">Heading 1 - 6xl</div>
          <div className="text-5xl font-bold">Heading 2 - 5xl</div>
          <div className="text-4xl font-bold">Heading 3 - 4xl</div>
          <div className="text-3xl font-semibold">Heading 4 - 3xl</div>
          <div className="text-2xl font-semibold">Heading 5 - 2xl</div>
          <div className="text-xl font-semibold">Heading 6 - xl</div>
          <div className="text-lg">Large text - lg</div>
          <div className="text-base">Base text - base</div>
          <div className="text-sm text-muted-foreground">Small text - sm</div>
          <div className="text-xs text-muted-foreground">Extra small text - xs</div>
        </div>
      </div>

      {/* Button Styles Demo */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Button Styles</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button className={cn(
            "px-6 py-2 rounded-lg font-medium transition-all duration-200",
            "bg-primary text-primary-foreground hover:opacity-90",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}>
            Primary Button
          </button>
          
          <button className={cn(
            "px-6 py-2 rounded-lg font-medium transition-all duration-200",
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}>
            Secondary Button
          </button>
          
          <button className={cn(
            "px-6 py-2 rounded-lg font-medium transition-all duration-200",
            "gradient-primary text-white hover:opacity-90",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shadow-custom"
          )}>
            Gradient Button
          </button>
          
          <button className={cn(
            "px-6 py-2 rounded-lg font-medium transition-all duration-200",
            "border border-border bg-transparent hover:bg-accent",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}>
            Outline Button
          </button>
        </div>
      </div>

      {/* Status Footer */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span className="text-sm">Next.js 15 Ready</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span className="text-sm">TypeScript Configured</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span className="text-sm">Tailwind v4 Active</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span className="text-sm">Custom Theme Applied</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 