"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote, User, ChevronLeft, ChevronRight, ExternalLink, MessageSquarePlus } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Review {
  id: number;
  name: string;
  avatar?: string;
  rating: number;
  date: string;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Анна П.",
    rating: 5,
    date: "15 декабря 2024",
    text: "Превосходное обслуживание! Мастера настоящие профессионалы своего дела. Результат превзошел все ожидания. Обязательно вернусь еще!"
  },
  {
    id: 2,
    name: "Мария И.",
    rating: 5,
    date: "10 декабря 2024",
    text: "Отличное место! Современное оборудование, приятная атмосфера и квалифицированные специалисты. Рекомендую всем!"
  },
  {
    id: 3,
    name: "Елена С.",
    rating: 5,
    date: "5 декабря 2024",
    text: "Замечательный салон! Индивидуальный подход к каждому клиенту. Результат превосходный, буду постоянным клиентом."
  },
  {
    id: 4,
    name: "Ольга К.",
    rating: 5,
    date: "1 декабря 2024",
    text: "Профессиональное оборудование и опытные мастера. Очень довольна качеством услуг. Цены адекватные качеству."
  },
  {
    id: 5,
    name: "Татьяна В.",
    rating: 5,
    date: "28 ноября 2024",
    text: "Современный салон с высоким уровнем сервиса. Мастера внимательные и профессиональные. Результатом очень довольна!"
  },
  {
    id: 6,
    name: "Наталья П.",
    rating: 5,
    date: "25 ноября 2024",
    text: "Отличная работа! Мастер учел все мои пожелания и предложил лучшие варианты. Салон чистый, персонал вежливый."
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

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-card border rounded-2xl p-6 h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow">
      {/* Author Info */}
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
          <User className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="font-semibold text-card-foreground">{review.name}</p>
          <p className="text-sm text-muted-foreground">{review.date}</p>
        </div>
      </div>
      
      {/* Review Text */}
      <p className="text-card-foreground mb-4 flex-grow leading-relaxed">
        {review.text}
      </p>
      
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className="h-8 w-8 text-primary/20" />
      </div>
      
      {/* Rating */}
      <div className="mb-4">
        <StarRating rating={review.rating} />
      </div>
    </div>
  );
}

export function ReviewsSlider() {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="!pb-16"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="h-auto">
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation Buttons */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button className="swiper-button-prev-custom h-12 w-12 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors flex items-center justify-center group cursor-pointer">
          <ChevronLeft className="h-5 w-5 group-hover:scale-110 transition-transform" />
        </button>
        
        {/* Custom Pagination */}
        <div className="swiper-pagination-custom flex gap-2 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:bg-muted-foreground [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:opacity-50 [&_.swiper-pagination-bullet-active]:bg-primary [&_.swiper-pagination-bullet-active]:opacity-100 [&_.swiper-pagination-bullet-active]:scale-125"></div>
        
        <button className="swiper-button-next-custom h-12 w-12 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors flex items-center justify-center group cursor-pointer">
          <ChevronRight className="h-5 w-5 group-hover:scale-110 transition-transform" />
        </button>
      </div>
      
      {/* Yandex Reviews Actions */}
      <div className="mt-12 text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://yandex.ru/maps/org/jay_beauty_project/149247486936/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            <ExternalLink className="h-4 w-4" />
            Все отзывы на Яндексе
          </a>
          <a
            href="https://yandex.ru/maps/org/jay_beauty_project/149247486936/?add-review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground border border-primary/20 rounded-lg hover:bg-secondary/80 transition-colors font-medium"
          >
            <MessageSquarePlus className="h-4 w-4" />
            Оставить отзыв
          </a>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Посмотрите все отзывы и поделитесь своим опытом
        </p>
      </div>
    </div>
  );
} 