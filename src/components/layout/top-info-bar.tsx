"use client";

import { FadeInDown } from "@/components/animations";
import { MapPin, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function TopInfoBar() {
  return (
    <div className="relative z-50 text-white">
      {/* Top Black Bar */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Logo */}
          <FadeInDown delay={0.1}>
            <Link href="/" className="flex items-center space-x-3 cursor-pointer transition-transform duration-300">
              <Image
                src="/logos/archri.webp"
                alt="Архитектура"
                width={300}
                height={300}
                className="h-20
                 w-auto"
                priority
              />
            </Link>
          </FadeInDown>

          {/* Contact Information */}
          <FadeInDown delay={0.2}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-left">
              {/* Address */}
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm">
                  г. Пятигорск, ул. Розы Люксембург, 72А
                </span>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm">
                  Работаем без выходных с 08:00 до 20:00
                </span>
              </div>
            </div>
          </FadeInDown>
        </div>
      </div>
    </div>
  );
}