// Импортируем компоненты
import { RotatingText } from "./rotating-text";
import { TypewriterText } from "./typewriter-text";
import { SlideText } from "./slide-text";
import { WaveText } from "./wave-text";
import { GradientText } from "./gradient-text";

// Экспортируем все варианты анимации текста
export { RotatingText } from "./rotating-text";
export { TypewriterText } from "./typewriter-text";
export { SlideText } from "./slide-text";
export { WaveText } from "./wave-text";
export { GradientText } from "./gradient-text";

// Типы анимаций
export type AnimationType = "rotating" | "typewriter" | "slide" | "wave" | "gradient";

// Универсальный интерфейс для всех анимаций
export interface AnimatedTextProps {
  texts: string[];
  duration?: number;
  className?: string;
  textClassName?: string;
  type?: AnimationType;
  // Дополнительные параметры для TypewriterText
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  // Дополнительные параметры для SlideText
  direction?: "up" | "down";
}

// Универсальный компонент для всех анимаций
export function AnimatedText({
  texts,
  duration = 3000,
  className,
  textClassName,
  type = "rotating",
  typeSpeed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
  direction = "up"
}: AnimatedTextProps) {
  const commonProps = {
    texts,
    duration,
    className,
    textClassName
  };

  switch (type) {
    case "typewriter":
      return <TypewriterText {...commonProps} typeSpeed={typeSpeed} deleteSpeed={deleteSpeed} pauseTime={pauseTime} />;
    case "slide":
      return <SlideText {...commonProps} direction={direction} />;
    case "wave":
      return <WaveText {...commonProps} />;
    case "gradient":
      return <GradientText {...commonProps} />;
    case "rotating":
    default:
      return <RotatingText {...commonProps} />;
  }
} 