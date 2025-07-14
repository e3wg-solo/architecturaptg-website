"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
}

export function GooeyText({
  texts,
  morphTime = 1,
  cooldownTime = 0.25,
  className,
  textClassName
}: GooeyTextProps) {
  const text1Ref = React.useRef<HTMLSpanElement>(null);
  const text2Ref = React.useRef<HTMLSpanElement>(null);
  const currentIndexRef = React.useRef(0);
  const [currentText, setCurrentText] = React.useState(texts[0] || "");
  const [isClient, setIsClient] = React.useState(false);
  const [maxWidth, setMaxWidth] = React.useState<string>('auto');
  const filterId = React.useMemo(() => `gooey-filter-${Math.random().toString(36).substr(2, 9)}`, []);

  // Устанавливаем клиентский флаг после гидратации
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  // Вычисляем максимальную ширину только на клиенте
  React.useEffect(() => {
    if (!isClient || !texts.length) return;
    
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return;
    
    // Примерный размер шрифта
    context.font = '72px system-ui, sans-serif'; 
    
    let maxW = 0;
    texts.forEach(text => {
      const width = context.measureText(text).width;
      if (width > maxW) maxW = width;
    });
    
    setMaxWidth(`${maxW * 0.7}px`);
  }, [texts, isClient]);

  React.useEffect(() => {
    if (!isClient || !texts.length || texts.length < 2) return;

    // Инициализация
    if (text1Ref.current && text2Ref.current) {
      text1Ref.current.textContent = texts[0];
      text2Ref.current.textContent = texts[1];
      text1Ref.current.style.opacity = "1";
      text2Ref.current.style.opacity = "0";
      text1Ref.current.style.filter = "blur(0px)";
      text2Ref.current.style.filter = "blur(0px)";
    }

    const interval = setInterval(() => {
      const nextIndex = (currentIndexRef.current + 1) % texts.length;
      
      if (text1Ref.current && text2Ref.current) {
        // Определяем какой элемент сейчас видим, а какой скрыт
        const visibleElement = text1Ref.current.style.opacity === "1" ? text1Ref.current : text2Ref.current;
        const hiddenElement = text1Ref.current.style.opacity === "1" ? text2Ref.current : text1Ref.current;
        
        // Подготавливаем скрытый элемент с новым текстом
        hiddenElement.textContent = texts[nextIndex];
        
        // Анимация
        const startTime = Date.now();
        const duration = morphTime * 1000;
        
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Текущий элемент исчезает
          const blurOut = progress * 8;
          const opacityOut = 1 - progress;
          visibleElement.style.filter = `blur(${blurOut}px)`;
          visibleElement.style.opacity = opacityOut.toString();
          
          // Новый элемент появляется
          const blurIn = (1 - progress) * 8;
          const opacityIn = progress;
          hiddenElement.style.filter = `blur(${blurIn}px)`;
          hiddenElement.style.opacity = opacityIn.toString();
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            // Завершаем анимацию
            visibleElement.style.opacity = "0";
            visibleElement.style.filter = "blur(0px)";
            hiddenElement.style.opacity = "1";
            hiddenElement.style.filter = "blur(0px)";
            
            currentIndexRef.current = nextIndex;
            setCurrentText(texts[nextIndex]);
          }
        };
        
        animate();
      }
    }, (morphTime + cooldownTime) * 1000);

    return () => clearInterval(interval);
  }, [texts, morphTime, cooldownTime, isClient]);

  if (!texts.length) return null;

  return (
    <div className={cn("relative inline-block", className)}>
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id={filterId}>
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="relative inline-block min-h-[1.2em] text-center"
        style={{ 
          filter: `url(#${filterId})`,
          width: maxWidth,
          minWidth: '200px'
        }}
      >
        <span
          ref={text1Ref}
          className={cn(
            "absolute top-0 left-1/2 transform -translate-x-1/2 whitespace-nowrap select-none",
            textClassName
          )}
        />
        <span
          ref={text2Ref}
          className={cn(
            "absolute top-0 left-1/2 transform -translate-x-1/2 whitespace-nowrap select-none",
            textClassName
          )}
        />
        {/* Invisible span для сохранения размеров */}
        <span className={cn("invisible whitespace-nowrap", textClassName)}>
          {currentText}
        </span>
      </div>
    </div>
  );
} 