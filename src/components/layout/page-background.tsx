"use client";

import { usePathname } from "next/navigation";
import { BackgroundImageSlider } from "@/components/ui/background-image-slider";

export function PageBackground() {
  const pathname = usePathname();
  
  // Показываем слайдер только на главной странице
  if (pathname !== '/') {
    return null;
  }
  
  return (
    <div className="absolute top-0 left-0 w-full h-[900px] z-0">
      <BackgroundImageSlider />
    </div>
  );
}