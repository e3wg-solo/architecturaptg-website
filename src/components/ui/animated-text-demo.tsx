"use client";

import { AnimatedText, AnimationType } from "./animated-text";

interface AnimatedTextDemoProps {
  texts: string[];
  className?: string;
  textClassName?: string;
}

export function AnimatedTextDemo({
  texts,
  className,
  textClassName
}: AnimatedTextDemoProps) {
  const animations: { type: AnimationType; name: string; description: string }[] = [
    {
      type: "rotating",
      name: "Rotating Text",
      description: "Плавная смена текста с fade эффектом"
    },
    {
      type: "typewriter",
      name: "Typewriter Text",
      description: "Эффект печатающей машинки"
    },
    {
      type: "slide",
      name: "Slide Text",
      description: "Слайд анимация при смене текста"
    },
    {
      type: "wave",
      name: "Wave Text",
      description: "Волновая анимация по буквам"
    },
    {
      type: "gradient",
      name: "Gradient Text",
      description: "Движущийся градиент"
    },
    {
      type: "shimmer",
      name: "Shimmer Text",
      description: "Переливающийся эффект"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Варианты анимации текста</h2>
        <p className="text-muted-foreground">
          Выберите подходящий стиль для вашего проекта
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {animations.map((animation) => (
          <div
            key={animation.type}
            className="p-6 border rounded-lg bg-card hover:bg-accent/50 transition-colors"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">{animation.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {animation.description}
              </p>
            </div>

            <div className="h-24 flex items-center justify-center">
              <AnimatedText
                texts={texts}
                type={animation.type}
                duration={3000}
                className={className}
                textClassName={textClassName}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center text-sm text-muted-foreground">
        <p>
          Для смены анимации просто измените параметр <code>type</code> в компоненте
        </p>
      </div>
    </div>
  );
} 