"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { MessageCircleHeart } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqSectionWithCategoriesProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  items: {
    question: string;
    answer: string;
    category?: string;
  }[];
  contactInfo?: {
    title: string;
    description?: string;
    buttonText: string;
  };
}

const FaqSectionWithCategories = React.forwardRef<HTMLElement, FaqSectionWithCategoriesProps>(
  ({ className, title, description, items, contactInfo, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-0 w-full", className)}
        {...props}
      >
        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-foreground">
                {title}
              </h2>
              {description && (
                <p className="text-muted-foreground">
                  {description}
                </p>
              )}
            </div>

            {/* FAQ Items */}
            <Accordion type="single" collapsible className="space-y-4">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={cn(
                    "mb-4 rounded-xl",
                    "bg-card text-card-foreground",
                    "border border-border/60",
                    "shadow-sm dark:shadow-black/10"
                  )}
                >
                  <AccordionTrigger 
                    className={cn(
                      "px-6 py-4 text-left hover:no-underline",
                      "data-[state=open]:border-b data-[state=open]:border-border/60"
                    )}
                  >
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg font-medium text-foreground group-hover:text-primary">
                        {item.question}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pt-4 pb-6">
                    <p className="text-card-foreground leading-relaxed text-base transition-all duration-300 break-words overflow-wrap-anywhere hyphens-auto">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Contact Section */}
            {contactInfo && (
              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-4">
                  {contactInfo.title}
                </p>
                
                <button
                  onClick={() => window.open('https://wa.me/79937775559', '_blank')}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground border border-primary/20 rounded-xl hover:bg-secondary/80 transition-all duration-200 font-medium shadow-sm hover:shadow-md mb-4 cursor-pointer"
                >
                  <MessageCircleHeart className="h-5 w-5" />
                  Связаться с нами
                </button>

                {contactInfo.description && (
                  <p className="text-sm text-muted-foreground">
                    {contactInfo.description}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
);
FaqSectionWithCategories.displayName = "FaqSectionWithCategories";

export { FaqSectionWithCategories }; 