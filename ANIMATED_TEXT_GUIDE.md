# Руководство по анимированному тексту

После замены `GooeyText` на более оптимизированные анимации, теперь доступны следующие варианты:

## Доступные типы анимации

### 1. Rotating Text (По умолчанию)
Плавная смена текста с fade эффектом
```tsx
<AnimatedText
  texts={["счастливой", "уверенной", "любимой"]}
  type="rotating"
  duration={2500}
/>
```

### 2. Typewriter Text
Эффект печатающей машинки
```tsx
<AnimatedText
  texts={["счастливой", "уверенной", "любимой"]}
  type="typewriter"
  typeSpeed={100}
  deleteSpeed={50}
  pauseTime={2000}
/>
```

### 3. Slide Text
Слайд анимация при смене текста
```tsx
<AnimatedText
  texts={["счастливой", "уверенной", "любимой"]}
  type="slide"
  direction="up"
  duration={3000}
/>
```

### 4. Wave Text
Волновая анимация по буквам
```tsx
<AnimatedText
  texts={["счастливой", "уверенной", "любимой"]}
  type="wave"
  duration={3000}
/>
```

### 5. Gradient Text
Движущийся градиент
```tsx
<AnimatedText
  texts={["счастливой", "уверенной", "любимой"]}
  type="gradient"
  duration={3000}
/>
```

### 6. Shimmer Text
Переливающийся эффект (статический текст)
```tsx
<AnimatedText
  texts={["счастливой"]} // Показывает только первый текст
  type="shimmer"
  shimmerDuration="2s"
/>

// Или напрямую:
<TextShimmer duration="2s">
  Переливающийся текст
</TextShimmer>
```

## Использование в проекте

### Основной способ (рекомендуется)
```tsx
import { AnimatedText } from "@/components/ui/animated-text";

// В компоненте
<AnimatedText
  texts={["счастливой", "уверенной", "любимой", "безупречной", "вдохновлённой", "ухоженной"]}
  type="rotating" // или другой тип
  duration={2500}
  textClassName="text-4xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent"
/>
```

### Импорт отдельных компонентов
```tsx
import { RotatingText, TypewriterText, SlideText, WaveText, GradientText, TextShimmer } from "@/components/ui/animated-text";

// Или прямой импорт
import { RotatingText } from "@/components/ui/rotating-text";
import { TextShimmer } from "@/components/ui/text-shimmer";
```

## Параметры

### Общие параметры
- `texts: string[]` - Массив текстов для анимации
- `duration?: number` - Продолжительность между сменами текста (мс)
- `className?: string` - CSS классы для контейнера
- `textClassName?: string` - CSS классы для текста

### Специфические параметры

#### TypewriterText
- `typeSpeed?: number` - Скорость печати (мс на символ)
- `deleteSpeed?: number` - Скорость удаления (мс на символ)
- `pauseTime?: number` - Пауза между циклами (мс)

#### SlideText
- `direction?: "up" | "down"` - Направление слайда

#### TextShimmer
- `shimmerDuration?: string` - Длительность анимации переливания (по умолчанию "2s")

## Смена анимации в главном компоненте

Для смены анимации в заголовке главной страницы, измените параметр `type` в файле `src/app/page.tsx`:

```tsx
<AnimatedText
  texts={["счастливой", "уверенной", "любимой", "безупречной", "вдохновлённой", "ухоженной"]}
  type="gradient" // Измените на желаемый тип
  duration={2500}
  textClassName="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent"
/>
```

## Преимущества перед GooeyText

1. **Производительность**: Значительно меньше нагрузка на браузер
2. **Простота**: Легкая настройка и использование
3. **Гибкость**: Множество вариантов анимации
4. **Совместимость**: Работает на всех устройствах
5. **Настраиваемость**: Легко изменять параметры

## Демонстрация

Для просмотра всех анимаций одновременно, используйте компонент `AnimatedTextDemo`:

```tsx
import { AnimatedTextDemo } from "@/components/ui/animated-text-demo";

<AnimatedTextDemo
  texts={["счастливой", "уверенной", "любимой"]}
  textClassName="text-2xl font-bold"
/>
``` 