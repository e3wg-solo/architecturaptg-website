"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useCallback, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Autoplay from 'embla-carousel-autoplay';
import { EmblaCarouselType } from 'embla-carousel';
import Image from 'next/image';

function SalonFeatureCarousel() {
  const services = [
    {
      image: "https://i.pinimg.com/736x/eb/27/05/eb2705ffad5ea75d2ff7d62c80aa20d3.jpg"
    },
    {
      image: "https://i.pinimg.com/736x/ea/60/af/ea60af6f60d32dbae683d4be55cdff2a.jpg"
    },
    {
      image: "https://i.pinimg.com/1200x/02/da/5d/02da5d19c40e0a6fca50803696cfb4a9.jpg"
    },
    {
      image: "https://i.pinimg.com/736x/3f/08/8c/3f088c11e1e1236174b257ced44fedeb.jpg"
    },
    {
      image: "https://i.pinimg.com/736x/11/c3/aa/11c3aacc833d7448dc82c20cf451292b.jpg"
    }
  ];

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

  return (
    <div className="w-full py-10 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 lg:gap-10">
          <div className="flex gap-4 flex-col items-start justify-start lg:translate-y-2">
            <div className="flex gap-2 flex-col">
              <h2 className="text-xl md:text-3xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                Мы не создаём образы — мы их раскрываем
              </h2>
              <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                Каждая работа — это диалог мастера и клиента. Мы чувствуем характер, понимаем эстетику и точно знаем, как подчеркнуть вашу индивидуальность.
                Посмотрите, как мы раскрываем красоту — естественно и профессионально.
              </p>
            </div>
          </div>
          <div className="w-full max-w-full">
            <Carousel 
              className="w-full max-w-full"
              setApi={handleApiChange}
              opts={{
                loop: true,
                align: "center",
                skipSnaps: false,
                containScroll: "trimSnaps"
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true
                })
              ]}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {services.map((service, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4">
                    <div className="relative flex rounded-3xl aspect-square bg-muted items-center justify-center border border-border/60 hover:border-primary/20 transition-colors mx-2 sm:mx-0 overflow-hidden">
                      {service.image ? (
                        <Image
                          src={service.image}
                          alt={`Работа ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index < 2}
                        />
                      ) : (
                        <div className="h-full w-full bg-muted flex items-center justify-center">
                          <span className="text-muted-foreground">Изображение {index + 1}</span>
                        </div>
                      )}
                    </div>
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
        </div>
      </div>
    </div>
  );
}

export { SalonFeatureCarousel }; 