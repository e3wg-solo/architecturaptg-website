"use client";

import { useEffect, useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { EmblaCarouselType } from 'embla-carousel';

interface Advantage {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface AdvantagesCarouselProps {
  advantages: Advantage[];
}

export function AdvantagesCarousel({ advantages }: AdvantagesCarouselProps) {
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);

  const handleApiChange = useCallback((api: EmblaCarouselType | undefined) => {
    setEmblaApi(api || null);
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Автоматическое пролистывание каждые 7 секунд
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 7000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="max-w-5xl mx-auto">
      <Carousel
        opts={{
          align: "center",
          loop: true,
          skipSnaps: false,
          dragFree: false,
          containScroll: "trimSnaps",
        }}
        className="w-full"
                          setApi={handleApiChange}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {advantages.map((advantage, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 xl:basis-1/3 transform-gpu">
              <Card className="h-full text-center group hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-muted/30">
                <CardContent className="p-8 sm:p-12">
                  <div className="h-20 w-20 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                    <div className="text-brand-primary">
                      {advantage.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-foreground">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      {/* Navigation buttons */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          className="h-10 w-10 rounded-full"
        >
          <ArrowLeft className="h-6 w-6" />
          <span className="sr-only">Previous slide</span>
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          className="h-10 w-10 rounded-full"
        >
          <ArrowRight className="h-6 w-6" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </div>
  );
} 