"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    title: "10 сеансов массажа лица и спины",
    description: "Комплексный массаж для лица и спины",
    discount: "15000₽",
    validUntil: "вместо 17000₽",
    color: "primary"
  },
  {
    id: 2,
    title: "10 сеансов массажа лица",
    description: "Курс массажа для лица",
    discount: "10000₽",
    validUntil: "вместо 13000₽",
    color: "primary"
  },
  {
    id: 3,
    title: "Антивозрастная пластика лица",
    description: "Эффективная процедура против старения",
    discount: "3500₽",
    validUntil: "акция сентября",
    color: "primary"
  },
  {
    id: 4,
    title: "Пробное посещение массажа",
    description: "Первый массаж тела со скидкой",
    discount: "-1000₽",
    validUntil: "для новых клиентов",
    color: "primary"
  },
  {
    id: 5,
    title: "Курс коррекции фигуры",
    description: "8 сеансов массажа для коррекции фигуры",
    discount: "18000₽",
    validUntil: "вместо 26000₽",
    color: "primary"
  },
  {
    id: 6,
    title: "Безлимитный абонемент",
    description: "Все массажи по телу до конца 2025 года",
    discount: "60000₽",
    validUntil: "до конца 2025",
    color: "primary"
  }
];

export function PromoCardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Проверяем, что массив карточек не пустой
  if (promoCards.length === 0) {
    return null;
  }

  const handleCardClick = (card: PromoCard) => {
    const message = `Здравствуйте! Меня интересует акция "${card.title}" (${card.discount}) - ${card.description}. Подскажите, пожалуйста, подробности!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/79287167038?text=${encodedMessage}`, '_blank');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % promoCards.length;
        return nextIndex >= 0 && nextIndex < promoCards.length ? nextIndex : 0;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentCard = promoCards[currentIndex];

  // Проверяем, что карточка существует
  if (!currentCard) {
    return null;
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "from-[rgb(172,147,74)]/80 to-[rgb(172,147,74)]/60 border-[rgb(172,147,74)]/40";
      case "secondary":
        return "from-[rgb(172,147,74)]/70 to-[rgb(172,147,74)]/50 border-[rgb(172,147,74)]/30";
      case "accent":
        return "from-[rgb(218,185,103)]/80 to-[rgb(218,185,103)]/60 border-[rgb(218,185,103)]/40";
      default:
        return "from-[rgb(172,147,74)]/80 to-[rgb(172,147,74)]/60 border-[rgb(172,147,74)]/40";
    }
  };

  // Анимации для framer-motion
  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 15 : -15,
    }),
  };

  const contentVariants = {
    enter: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
  };

  const badgeVariants = {
    enter: {
      opacity: 0,
      scale: 0.8,
      rotate: -10,
    },
    center: {
      opacity: 1,
      scale: 1,
      rotate: 0,
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotate: 10,
    },
  };

  const dotVariants = {
    enter: {
      scale: 0,
      opacity: 0,
    },
    center: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 0,
      opacity: 0,
    },
  };

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Контейнер с фиксированной высотой для предотвращения "прыжков" */}
      <div className="h-[200px] relative">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
              rotateY: { duration: 0.4 },
            }}
            className="absolute inset-0"
          >
            <Card 
              onClick={() => handleCardClick(currentCard)}
              className={cn(
                "h-full overflow-hidden bg-gradient-to-br border-2 cursor-pointer",
                "hover:scale-105 hover:shadow-xl hover:shadow-[rgb(172,147,74)]/20 hover:border-[rgb(172,147,74)]/50",
                "active:scale-95 active:transition-transform active:duration-150",
                getColorClasses(currentCard.color)
              )}
            >
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <motion.div 
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="flex items-start justify-between mb-4"
                >
                  <div className="flex-1 text-left min-h-0">
                    <motion.h3 
                      variants={contentVariants}
                      className="text-lg font-semibold text-white mb-1 text-left line-clamp-2"
                    >
                      {currentCard.title}
                    </motion.h3>
                    <motion.p 
                      variants={contentVariants}
                      className="text-sm text-white/80 text-left line-clamp-2"
                    >
                      {currentCard.description}
                    </motion.p>
                  </div>
                  <motion.div
                    variants={badgeVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <Badge className="text-lg font-bold px-3 py-1 ml-3 bg-[rgb(172,147,74)] text-white flex-shrink-0 shadow-lg">
                      {currentCard.discount}
                    </Badge>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="flex items-center justify-between"
                >
                  <motion.p 
                    variants={contentVariants}
                    className="text-xs text-white/70 text-left"
                  >
                    {currentCard.validUntil}
                  </motion.p>
                  <div className="flex space-x-1">
                    {promoCards.map((_, index) => (
                      <motion.div
                        key={index}
                        variants={dotVariants}
                        initial="enter"
                        animate={index === currentIndex ? "center" : "center"}
                        exit="exit"
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className={cn(
                          "w-2 h-2 rounded-full",
                          index === currentIndex 
                            ? "bg-white scale-125 shadow-lg shadow-white/50" 
                            : "bg-white/30 scale-100"
                        )}
                      />
                    ))}
                  </div>
                </motion.div>
              </CardContent>
              

            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Click hint */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex justify-center mt-3"
      >
        <p className="text-xs text-white/60 flex items-center gap-1">
          Нажмите на акцию для связи в WhatsApp
        </p>
      </motion.div>
    </div>
  );
}