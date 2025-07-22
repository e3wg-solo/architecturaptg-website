'use client';

import { FadeInUp } from "@/components/animations";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Users, Award, Heart, Star, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { EmblaCarouselType } from 'embla-carousel';

const teamPhotos = [
  "/gallery/ph6.webp",
  "/gallery/ph2-3.webp",
  "/gallery/ph5.webp",
  "/gallery/ph2-2.webp",
  "/gallery/ph2-1.webp",
  "/gallery/ph1-2.webp",
  "/gallery/ph1-1.webp",
  "/gallery/ph4.webp",
  "/gallery/ph3.webp",
  "/gallery/ph2.webp",
  "/gallery/ph1.webp",
];



export default function AboutUsPage() {
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleApiChange = useCallback((api: EmblaCarouselType | undefined) => {
    setEmblaApi(api || null);
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const openModal = useCallback((index: number) => {
    setSelectedImage(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  }, []);

  const goToPrevious = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? teamPhotos.length - 1 : selectedImage - 1);
    }
  }, [selectedImage]);

  const goToNext = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === teamPhotos.length - 1 ? 0 : selectedImage + 1);
    }
  }, [selectedImage]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    const handleKeyNavigation = (e: KeyboardEvent) => {
      if (isModalOpen) {
        if (e.key === 'ArrowLeft') {
          goToPrevious();
        } else if (e.key === 'ArrowRight') {
          goToNext();
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleKeyNavigation);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleKeyNavigation);
    };
  }, [isModalOpen, closeModal, goToPrevious, goToNext]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="bg-black via-background to-accent/10 pt-5">
        <div className="container mx-auto px-4 bg-black">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <div className="flex items-center gap-4 mb-8 bg-black">
                <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <ArrowLeft className="h-5 w-5" />
                  Назад на главную
                </Link>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                О нас
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Познакомьтесь с нашей командой и узнайте больше о TOPICONIC
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Информация о салоне */}
      <section className="py-8 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">
                  Наша история
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Добро пожаловать в TOPICONIC
                </h2>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <Card className="p-8 sm:p-12 bg-gradient-to-br from-muted/30 to-background">
                <CardContent className="p-0">
                  <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                    <p className="text-lg mb-6">
                      Основательница TOPICONIC бьюти & спа <strong className="text-foreground">Кристина Манукян</strong> уверена: кроме хорошего сервиса, безопасности и оправданных ожиданий, в понятие качества в индустрии красоты входит нечто большее – то, каким будет новый облик посетителя: будет ли он более привлекательным, будет ли соответствовать образу жизни, темпераменту и тому впечатлению, которое человек хочет производить на окружающих.
                    </p>
                    
                    <blockquote className="border-l-4 border-brand-primary pl-6 italic my-8">
                      <p className="text-lg">
                        Мы – команда профессионалов, которая нацелена на главный результат – усовершенствовать образ посетителя, сделать его более гармоничным. В нашем салоне клиент забудет о своих проблемах, ощутит совершенно новое отношение к себе, к своему здоровью, душевному состоянию, внешности.
                      </p>
                    </blockquote>
                    
                    <p className="text-lg">
                      <strong className="text-foreground">TOPICONIC бьюти & спа</strong> предлагает широкий спектр услуг в сфере красоты и здоровья: от лечебной, инъекционной, аппаратной и лазерной косметологии до ногтевого сервиса, парикмахерского и массажного искусства, визажа и бровистики.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Почему мы */}
      <section className="py-8 sm:py-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeInUp>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Почему выбирают нас
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Мы не просто оказываем услуги красоты — мы создаём уникальный опыт трансформации
                </p>
              </div>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeInUp delay={0.2}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
                        <Heart className="h-5 w-5 text-brand-primary" />
                      </div>
                      Персональный подход
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Каждый клиент уникален, поэтому мы создаём индивидуальную программу красоты, учитывая ваши особенности, пожелания и образ жизни.
                    </p>
                  </CardContent>
                </Card>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
                        <Award className="h-5 w-5 text-brand-primary" />
                      </div>
                      Высокие стандарты
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Мы следуем самым строгим стандартам качества и безопасности, используем только сертифицированные материалы и оборудование.
                    </p>
                  </CardContent>
                </Card>
              </FadeInUp>

              <FadeInUp delay={0.4}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-brand-primary" />
                      </div>
                      Команда экспертов
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Наши мастера — это не просто специалисты, это художники, которые превращают ваши мечты о красоте в реальность.
                    </p>
                  </CardContent>
                </Card>
              </FadeInUp>

              <FadeInUp delay={0.5}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
                        <Star className="h-5 w-5 text-brand-primary" />
                      </div>
                      Атмосфера комфорта
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Уютная атмосфера нашего салона поможет вам расслабиться и забыть о повседневных заботах, наслаждаясь процессом преображения.
                    </p>
                  </CardContent>
                </Card>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>



      {/* Карусель с фотографиями */}
      <section className="py-8 sm:py-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeInUp>
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">
                  Наша атмосфера
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Галерея нашего салона
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ощутите атмосферу нашего салона — уют, стиль и забота в каждой детали.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="max-w-4xl mx-auto">
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
                  <CarouselContent>
                    {teamPhotos.map((photo, index) => (
                      <CarouselItem key={index} className="transform-gpu">
                        <div 
                          className="relative aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer"
                          onClick={() => openModal(index)}
                        >
                          <Image
                            src={photo}
                            alt={`Gallery ${index + 1}`}
                            width={800}
                            height={450}
                            className="object-cover w-full h-auto rounded-2xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            loading={index === 0 ? 'eager' : 'lazy'}
                            priority={index === 0}
                            placeholder="blur"
                            blurDataURL="/placeholder/blur.jpg"
                          />
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
                    className="h-12 w-12 rounded-full"
                  >
                    <ArrowLeft className="h-6 w-6" />
                    <span className="sr-only">Previous image</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={scrollNext}
                    className="h-12 w-12 rounded-full"
                  >
                    <ArrowLeft className="h-6 w-6 rotate-180" />
                    <span className="sr-only">Next image</span>
                  </Button>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Modal for full-screen image */}
      {isModalOpen && selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm">
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={closeModal}
            className="absolute top-4 right-4 z-60 text-white hover:bg-white/20 h-12 w-12"
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Previous button - hidden on mobile */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 text-white hover:bg-white/20 h-12 w-12 hidden sm:flex"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Next button - hidden on mobile */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 text-white hover:bg-white/20 h-12 w-12 hidden sm:flex"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Image container */}
          <div 
            className="relative w-full h-full flex items-center justify-center p-4 sm:p-8"
            onClick={closeModal}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={teamPhotos[selectedImage]}
                alt={`Gallery ${selectedImage + 1}`}
                width={1200}
                height={800}
                className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
                loading="lazy"
              />
              
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {selectedImage + 1} / {teamPhotos.length}
              </div>

              {/* Mobile swipe indicator */}
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white/60 text-xs sm:hidden">
                Свайпните влево или вправо для навигации
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 