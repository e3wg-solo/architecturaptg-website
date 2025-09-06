"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Star, User, ArrowLeft, ArrowRight, ExternalLink, MessageSquarePlus, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface Review {
  id: number;
  name: string;
  avatar?: string;
  rating: number;
  date: string;
  text: string;
  link?: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Людмила Зубкова",
    avatar: "https://i.pinimg.com/474x/ed/5f/ce/ed5fcec4fe9b96adb3c62cbef3e6b089.jpg",
    rating: 5,
    date: "27 февраля 2025",
    text: "Девочки! одназначно рекомендую данную студию! мне понравилось всё! спасибо моей подружечки что она подарила мне сертификат! Благодарю за несказаное удовольствие и расслабление мастера Муравицскую Елизавету! Девочки у них сейчас акции побалуйте себя к 8 марта! Не пожалеете!",
    link: "https://2gis.ru/reviews/70000001087718283/review/142429032"
  },
  {
    id: 2,
    name: "Ксения Чекалина",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    date: "28 июня 2024",
    text: "Хочу написать спасибо Анастасии. Была у этого мастера на программе по коррекции фигуры. После первого посещения ушло 2кг, это что вообще за магия??? Но мне потом объяснили, что это отек, лишняя жидкость и тд, но результат очень крутой😁 желаю девочкам процветания, они большие молодцы. Рекомендую к посещению",
    link: "https://2gis.ru/reviews/70000001087718283/review/88455480"
  },
  {
    id: 3,
    name: "Ната Ше",
    avatar: "https://avatars.mds.yandex.net/get-yapic/45131/0y-4/orig",
    rating: 5,
    date: "28 апреля 2025",
    text: "Отличное место. Большое количество разных процедур. От маникюра и педикюра до массажа и косметологии. Была на массаже лица-очень нравится результат.",
    link: "https://yandex.ru/maps/org/217587650654/reviews?reviews%5BpublicId%5D=nq75xkkvejg8caupjagrntheag&si=cmq9wyt2naavd25k4bk6mx8x78&utm_source=review"
  },
  {
    id: 4,
    name: "Дарья Чеботарева",
    avatar: "",
    rating: 5,
    date: "6 июня 2024",
    text: "И обучалась у девочек, и была на процедурах, очень жалею, что живу в другом городе и не могу приходить к ним регулярно. Единственные массажисты, которым я могу себя доверить ❤️❤️❤️ Причем и тело, и разум, обучение у них - лучшее, что было в моей карьере массажиста) Очень рекомендую побывать хотя бы раз ❤️\n Очень вежливые, внимательные, профессионально делающие массаж мастера, профессионально и понятно обучающие🔥\n Настя и Алёна, желаю дальнейшего успеха и процветания 🌸🌸🌸 ",
    link: ""
  },
  {
    id: 5,
    name: "Марина",
    avatar: "",
    rating: 5,
    date: "23 октября 2024",
    text: "Студия очень светлая , персонал вежливый ! Пришла на массаж , осталась очень довольна . Пару дней назад приходила к косметологу Татьяне за красивыми и самое главное , натуральными губами . Все получилось именно так , как я представляла .\n Спасибо , девчонки , вы классные и мастера своего дела! ❤️",
    link: "https://2gis.ru/reviews/70000001087718283/review/84920668"
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-muted-foreground'
          }`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, scale = 1 }: { review: Review; scale?: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 143;
  const isLongText = review.text.length > maxLength;
  const displayText = isExpanded || !isLongText 
    ? review.text 
    : review.text.slice(0, maxLength) + '...';

  return (
    <div 
      className="bg-card border rounded-2xl p-8 h-full flex flex-col shadow-lg transition-all duration-300 ease-out"
      style={{ 
        transform: `scale(${scale})`,
        transformOrigin: 'center'
      }}
    >
      {/* Author Info */}
      <div className="flex items-start gap-3 mb-5">
        {/* Аватар */}
        <div className="relative h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
          {review.avatar ? (
            <Image
              src={review.avatar}
              alt={review.name}
              width={48}
              height={48}
              className="object-cover"
            />
          ) : (
            <User className="h-6 w-6 text-primary" />
          )}
        </div>

        {/* Информация: имя + рейтинг и дата */}
        <div className="flex flex-col">
          <p className="font-semibold text-card-foreground text-lg leading-tight">
            {review.name}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <StarRating rating={review.rating} />
            <p className="text-sm text-muted-foreground">{review.date}</p>
          </div>
        </div>
      </div>
      
      {/* Review Text */}
      <div className="mb-5 flex-grow">
        <p className="text-card-foreground leading-relaxed text-base transition-all duration-300 break-words overflow-wrap-anywhere hyphens-auto whitespace-pre-line">
          {displayText}
        </p>
        
        {/* Read More/Less Button */}
        {isLongText && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 text-sm font-medium cursor-pointer"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Свернуть
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                Читать полностью
              </>
            )}
          </button>
        )}
      </div>
      
      {/* Yandex Link */}
      <div className="mt-auto pt-4.5 border-t border-border/40">
        <a
          href={review.link || "https://yandex.ru/maps/org/arkhitektura/217587650654/reviews/?add-review=true&ll=43.039007%2C44.046528&utm_source=share&z=16.86"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2 font-medium"
        >
          <ExternalLink className="h-4 w-4" />
          Открыть отзыв
        </a>
      </div>
    </div>
  );
}

const TWEEN_FACTOR = 1.84;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

export function EmblaScaleReviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: false,
      containScroll: 'trimSnaps'
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true
      })
    ]
  );

  const [tweenValues, setTweenValues] = useState<number[]>([]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = engine.dragHandler.pointerDown();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }
      });

      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      const scale = numberWithinRange(tweenValue, 0.5, 1);
      return scale;
    });

    setTweenValues(styles);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on('reInit', onScroll);
    emblaApi.on('scroll', onScroll);

    return () => {
      emblaApi.off('reInit', onScroll);
      emblaApi.off('scroll', onScroll);
    };
  }, [emblaApi, onScroll]);

  return (
    <div className="relative">
      {/* Embla Carousel Container */}
      <div className="overflow-hidden relative" ref={emblaRef}>
        <div className="flex gap-8 px-4">
          {reviews.map((review, index) => (
            <div 
              key={review.id} 
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
            >
              <ReviewCard 
                review={review} 
                scale={tweenValues.length ? tweenValues[index] : 1}
              />
            </div>
          ))}
        </div>
        
        {/* Gradient fade overlays - Desktop only */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent hidden sm:block"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent hidden sm:block"></div>
      </div>
      
      {/* Navigation Buttons */}
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
      
      {/* Yandex Reviews Actions */}
      <div className="mt-8 text-center">
        <a
                        href="https://yandex.ru/maps/org/arkhitektura/217587650654/reviews/?add-review=true&ll=43.039007%2C44.046528&utm_source=share&z=16.86"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground border border-primary/20 rounded-xl hover:bg-secondary/80 transition-all duration-200 font-medium shadow-sm hover:shadow-md"
        >
          <MessageSquarePlus className="h-5 w-5" />
          Оставить отзыв
        </a>
        <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
          Поделитесь своим опытом посещения салона
        </p>
      </div>
    </div>
  );
} 