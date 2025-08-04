'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { EmblaCarouselType } from 'embla-carousel';

interface Service {
  id: string;
  name: string;
  description: string;
  image?: string;
}

const services: Service[] = [
  {
    id: 'aesthetic-cosmetology',
    name: 'Косметология эстетическая',
    description: 'Профессиональный уход за кожей лица и тела',
    image: "/services/aesthetic-cosmetology.webp"
  },
  {
    id: 'hardware-cosmetology',
    name: 'Косметология аппаратная',
    description: 'Процедуры с использованием новейших технологий',
    image: "/services/hardware-cosmetology.webp"
  },
  {
    id: 'hairdressing',
    name: 'Парикмахерский зал',
    description: 'Стрижки, окрашивание, укладки любой сложности',
    image: "/services/hairdressing.webp"
  },
  {
    id: 'nail-service',
    name: 'Ногтевой сервис',
    description: 'Маникюр, педикюр, наращивание и дизайн ногтей',
    image: "/services/nail-service.webp"
  },
  {
    id: 'massage',
    name: 'Массаж',
    description: 'Релаксирующий и лечебный массаж всего тела',
    image: "/services/massage.webp"
  },
  {
    id: 'eyebrows-lashes',
    name: 'Брови и ресницы',
    description: 'Коррекция бровей, наращивание ресниц, ламинирование',
    image: "/services/eyebrows-lashes.webp"
  },
  {
    id: 'tattoo',
    name: 'Татуаж',
    description: 'Перманентный макияж бровей, губ, век',
    image: "/services/tattoo.webp"
  },
  {
    id: 'makeup',
    name: 'Макияж',
    description: 'Дневной, вечерний, свадебный макияж',
    image: "/services/makeup.webp"
  },
  {
    id: 'solarium',
    name: 'Солярий',
    description: 'Безопасный загар в комфортных условиях',
    image: "/services/solarium.webp"
  }
];

export function ServicesGrid() {
  const router = useRouter();
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);

  const handleApiChange = useCallback((api: EmblaCarouselType | undefined) => {
    setEmblaApi(api || null);
  }, []);

  const handleServiceClick = (serviceId: string) => {
    router.push(`/price?service=${serviceId}`);
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Красота, уход и здоровье — в одном месте, с заботой о каждой детали
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: false,
              containScroll: "trimSnaps",
            }}
            className="w-full"
            setApi={handleApiChange}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service) => (
                <CarouselItem key={service.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 transform-gpu">
                  <Card 
                    className="group relative overflow-hidden border-0 aspect-square bg-black/10 mx-2 sm:mx-0"
                  >
                    {/* Background Image */}
                    {service.image && (
                      <div className="absolute inset-0 will-change-transform">
                        <Image
                          src={service.image}
                          alt={service.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={true}
                        />
                        <div className="absolute inset-0 bg-black/60" />
                      </div>
                    )}
                    
                    <CardContent className="relative flex flex-col justify-between h-full p-6 sm:p-8 z-10 transform-gpu">
                      <div className="text-center space-y-3 sm:space-y-4">
                        <h3 className="text-3xl sm:text-2xl font-bold text-white">
                          {service.name}
                        </h3>
                        
                        <p className="text-lg sm:text-base leading-relaxed text-white/70">
                          {service.description}
                        </p>
                      </div>

                      <Button 
                        variant="secondary"
                        size="lg"
                        className="border-1 rounded-xl py-5 px-10 text-xl sm:py-4 sm:px-8 sm:text-lg"
                        onClick={() => handleServiceClick(service.id)}
                      >
                        Узнать цены
                      </Button>
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
      </div>
    </div>
  );
} 