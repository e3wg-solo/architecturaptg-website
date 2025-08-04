"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  // Женский портрет
  "/backgrounds/hero-1.webp",
  // Мужской портрет
  "/backgrounds/hero-2.webp"
];

export function BackgroundImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Смена каждые 10 секунд

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[currentImageIndex]}
            alt={`Beauty salon portrait ${currentImageIndex + 1}`}
            fill
            className="object-cover"
            priority={currentImageIndex === 0}
            quality={90}
          />
          {/* Темное наложение для улучшения читаемости текста */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>
      
      {/* Индикаторы слайдов - скрыты для фонового слайдера */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-brand-primary"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Переключить на изображение ${index + 1}`}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
}