"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FadeInUp } from "@/components/animations";
import { Palette, Code, Layout, Sparkles } from "lucide-react";

export default function ComponentsPage() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <FadeInUp>
            <h1 className="text-4xl font-bold text-gradient">Component Library</h1>
            <p className="text-muted-foreground mt-2">
              Comprehensive collection of UI components built with shadcn/ui and Radix UI
            </p>
          </FadeInUp>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-12">
        
        {/* Overview Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-brand-primary/10">
                  <Layout className="h-4 w-4 text-brand-primary" />
                </div>
                <CardTitle className="text-lg">Layout</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Header, Footer, and responsive layout components</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-brand-secondary/10">
                  <Code className="h-4 w-4 text-brand-secondary" />
                </div>
                <CardTitle className="text-lg">Forms</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Input, Label, Switch, and form validation components</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-brand-accent/10">
                  <Sparkles className="h-4 w-4 text-brand-accent" />
                </div>
                <CardTitle className="text-lg">Animations</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Framer Motion powered smooth animations</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-success/10">
                  <Palette className="h-4 w-4 text-success" />
                </div>
                <CardTitle className="text-lg">Theme</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Dark/light theme with custom color system</p>
            </CardContent>
          </Card>
        </section>

        {/* Buttons Section */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Buttons</h2>
            <p className="text-muted-foreground">Various button styles and sizes for different use cases</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>

        {/* Cards Section */}
        <FadeInUp delay={0.2}>
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Cards</h2>
              <p className="text-muted-foreground">Flexible card components for content organization</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
                <CardDescription>
                  Simple card with header, content, and footer sections.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card content goes here. You can add any elements inside.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Action</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Profile Card
                  <Badge>Example</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-muted-foreground">Software Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interactive Card</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="demo-input">Demo Input</Label>
                  <Input 
                    id="demo-input" 
                    placeholder="Type something..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch 
                    id="demo-switch" 
                    checked={isEnabled}
                    onCheckedChange={setIsEnabled}
                  />
                  <Label htmlFor="demo-switch">Enable feature</Label>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        </FadeInUp>

        {/* Badges Section */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Badges</h2>
            <p className="text-muted-foreground">Small status indicators and labels</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Error</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </section>

        {/* Form Components */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Form Components</h2>
            <p className="text-muted-foreground">Complete form building blocks</p>
          </div>
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Sample Form</CardTitle>
              <CardDescription>
                Example form using various input components
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Input id="message" placeholder="Your message..." />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="subscribe" />
                <Label htmlFor="subscribe">Subscribe to updates</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Submit</Button>
            </CardFooter>
          </Card>
        </section>

        {/* Dropdown Menu Section */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Dropdown Menu</h2>
            <p className="text-muted-foreground">Accessible dropdown menus with keyboard navigation</p>
          </div>
          <div className="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Actions Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Copy</DropdownMenuItem>
                <DropdownMenuItem>Move</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </section>

        {/* Alerts Section */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Alerts</h2>
            <p className="text-muted-foreground">Important messages and notifications</p>
          </div>
          <div className="space-y-4 max-w-2xl">
            <Alert>
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                This is an informational alert message.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Separator */}
        <Separator />

        {/* Footer Info */}
        <section className="text-center py-8">
          <h3 className="text-lg font-semibold mb-2">Ready to Use</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            All components are fully customizable and ready for production use. 
            Built with accessibility in mind and following modern design principles.
          </p>
        </section>
      </div>
    </div>
  );
} 