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
    name: "Маргарита",
    avatar: "https://avatars.mds.yandex.net/get-yapic/31804/1zg8fowdpRmfJCdYFRygDdDE8-1/orig",
    rating: 5,
    date: "15 января 2025",
    text: "И постриглась и ногти сделала , идеальное место ! Нашли время за день но нового года! Мастер Ануш классная.",
    link: "https://yandex.ru/maps/org/219819522730/reviews?reviews%5BpublicId%5D=nyz25j6q5ake5tgggwk7agm9u8&si=cmq9wyt2naavd25k4bk6mx8x78&utm_source=review"
  },
  {
    id: 2,
    name: "Emiliaoz",
    avatar: "https://avatars.mds.yandex.net/get-yapic/53031/5UR56514fTPH9Y3yI8ww94QcLh0-1/orig",
    rating: 5,
    date: "26 сентября 2024",
    text: "Замечательный салон🥰🥰🥰\nСделали супер красивую причёску и макияж на свадьбу❤️❤️❤️\nОчень вежливые и весёлые сотрудницы!!! Всё было супер, очень благодарна!!",
    link: "https://yandex.ru/maps/org/219819522730/reviews?reviews%5BpublicId%5D=0a936txc9b5hbyj47m9qxmd5x8&si=cmq9wyt2naavd25k4bk6mx8x78&utm_source=review"
  },
  {
    id: 3,
    name: "Вадим Томм",
    avatar: "https://avatars.mds.yandex.net/get-yapic/38663/bvtKGdEkOIL7O8mQSywBAIXyQAY-1/orig",
    rating: 5,
    date: "24 июня 2025",
    text: "Отличный салон, пришли за 20 минут до закрытия в солярий, администратор пропустила нас, дождалась и всё прошло приятно\n\n Советую",
    link: "https://yandex.ru/maps/org/219819522730/reviews?reviews%5BpublicId%5D=xpd5k2x68twxa8xfahdyy7pp78&si=cmq9wyt2naavd25k4bk6mx8x78&utm_source=review"
  },
  {
    id: 4,
    name: "Ирина",
    avatar: "https://avatars.mds.yandex.net/get-yapic/26311/0a-2/orig",
    rating: 5,
    date: "11 июня 2025",
    text: "В Топиконик делала тонирование и прикорневое окрашивание.мастер Надежда.предложила варианты тонирования,стрижки и рекомендации по уходу за волосами.процедуры прошли в комфортной обстановке,3 часа пролетели незаметно.Рекомендую!",
    link: "https://yandex.ru/maps/org/219819522730/reviews?reviews%5BpublicId%5D=k4m92k3r9wgxc8z1p1k9zmh720&si=cmq9wyt2naavd25k4bk6mx8x78&utm_source=review"
  },
  {
    id: 5,
    name: "Гулчехра Сайфуллоева",
    avatar: "https://avatars.mds.yandex.net/get-yapic/61207/0a-3/orig",
    rating: 5,
    date: "3 июня 2025",
    text: "Были у косметолога у Кристины Гагиковны сделали ботокс в салоне Топиконик всё отлично получилось результат отличный Спасибо !",
    link: "https://yandex.ru/maps/org/219819522730/reviews?reviews%5BpublicId%5D=bw8zh3ej79g6hm440wtdwqxmw4&si=cmq9wyt2naavd25k4bk6mx8x78&utm_source=review"
  },
  {
    id: 6,
    name: "Юлия Салынова",
    avatar: "https://avatars.mds.yandex.net/get-yapic/45131/7QgLJyy1KViG5Gjeg47BC3Dxro-1/orig",
    rating: 5,
    date: "1 марта 2025",
    text: "Мастер маникюра Лилит лучшая!\nАнуш лучшая по мужским стрижкам!\nАдминистраторы очень вежливые и внимательные!",
    link: "https://yandex.ru/maps/org/219819522730/reviews?reviews%5BpublicId%5D=k7tu45h98a4j5908ymkexnhkem&si=cmq9wyt2naavd25k4bk6mx8x78&utm_source=review"
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
          href={review.link || "https://yandex.ru/maps/org/jay_beauty_project/149247486936/"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2 font-medium"
        >
          <ExternalLink className="h-4 w-4" />
          Открыть отзыв на Яндекс Картах
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
          href="https://yandex.ru/maps/org/topiconic/219819522730/reviews/?add-review=true&ll=37.613785%2C55.529398&z=14"
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