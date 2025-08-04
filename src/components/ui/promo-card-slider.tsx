"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PromoCard {
  id: number;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  color: "primary" | "secondary" | "accent";
}

const promoCards: PromoCard[] = [
  {
    id: 1,
    title: "Комплекс красоты",
    description: "Стрижка + окрашивание + укладка",
    discount: "-20%",
    validUntil: "до 31 декабря",
    color: "primary"
  },
  {
    id: 2,
    title: "Маникюр + педикюр",
    description: "Комплексный уход за ногтями",
    discount: "-15%",
    validUntil: "до 25 декабря",
    color: "primary"
  },
  {
    id: 3,
    title: "Первое посещение",
    description: "Любая процедура для новых клиентов",
    discount: "-10%",
    validUntil: "постоянная акция",
    color: "primary"
  },
  {
    id: 4,
    title: "Косметология лица",
    description: "Чистка + увлажняющая маска",
    discount: "-25%",
    validUntil: "до 30 декабря",
    color: "primary"
  }
];

export function PromoCardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleCardClick = (card: PromoCard) => {
    const message = `Здравствуйте! Меня интересует акция "${card.title}" (${card.discount}) - ${card.description}. Подскажите, пожалуйста, подробности!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/79937775559?text=${encodedMessage}`, '_blank');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          (prevIndex + 1) % promoCards.length
        );
        setIsVisible(true);
      }, 800); // Increased transition duration for smoother effect
      
    }, 5000); // Change card every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentCard = promoCards[currentIndex];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "from-[#d7b64c]/20 to-[#d7b64c]/5 border-[#d7b64c]/30";
      case "secondary":
        return "from-purple-500/20 to-purple-500/5 border-purple-500/30";
      case "accent":
        return "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30";
      default:
        return "from-[#d7b64c]/20 to-[#d7b64c]/5 border-[#d7b64c]/30";
    }
  };

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <Card 
        onClick={() => handleCardClick(currentCard)}
        className={cn(
          "relative overflow-hidden bg-gradient-to-br border-2 transition-all duration-1000 ease-out cursor-pointer",
          "hover:scale-105 hover:shadow-xl hover:shadow-[#d7b64c]/20 hover:border-[#d7b64c]/50",
          "active:scale-95 active:transition-transform active:duration-150",
          getColorClasses(currentCard.color),
          isVisible 
            ? "opacity-100 scale-100 translate-y-0" 
            : "opacity-0 scale-95 translate-y-3"
        )}
      >
        <CardContent className="p-6">
          <div 
            className={cn(
              "flex items-start justify-between mb-4 transition-all duration-800 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            )}
          >
            <div className="flex-1 text-left">
              <h3 className="text-lg font-semibold text-foreground mb-1 text-left">
                {currentCard.title}
              </h3>
              <p className="text-sm text-muted-foreground text-left">
                {currentCard.description}
              </p>
            </div>
            <Badge 
              className={cn(
                "text-lg font-bold px-3 py-1 ml-3 transition-all duration-600 bg-[#d7b64c] text-white",
                isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
              )}
            >
              {currentCard.discount}
            </Badge>
          </div>
          
          <div 
            className={cn(
              "flex items-center justify-between transition-all duration-900 ease-out delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
            )}
          >
            <p className="text-xs text-muted-foreground text-left">
              {currentCard.validUntil}
            </p>
            <div className="flex space-x-1">
              {promoCards.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-700 ease-out",
                    index === currentIndex 
                      ? "bg-[#d7b64c] scale-125 shadow-lg shadow-[#d7b64c]/50" 
                      : "bg-muted-foreground/30 scale-100"
                  )}
                />
              ))}
            </div>
          </div>
        </CardContent>
        
        {/* Decorative elements */}
        <div 
          className={cn(
            "absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/10 to-transparent rounded-full -translate-y-10 translate-x-10 transition-all duration-1200 ease-out",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          )}
        />
        <div 
          className={cn(
            "absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-8 -translate-x-8 transition-all duration-1200 ease-out delay-75",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-125"
          )}
        />
      </Card>
      
      {/* Click hint */}
      <div className="flex justify-center mt-3">
        <p className="text-xs text-muted-foreground/60 flex items-center gap-1">
          Нажмите на акцию для связи в WhatsApp
        </p>
      </div>
    </div>
  );
}