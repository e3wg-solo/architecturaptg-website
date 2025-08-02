"use client";

import { FadeInDown } from "@/components/animations";
import { MapPin, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";
import Image from "next/image";

export function TopInfoBar() {
  return (
    <div className="relative z-50 text-white">
      {/* Top Black Bar */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <FadeInDown delay={0.1}>
            <div className="flex items-center space-x-3">
              <Image
                src="https://i.ibb.co/y2pTSmN/topiconic-eng-gold-1.webp"
                alt="Topiconic"
                width={150}
                height={150}
                className="h-20 w-auto"
                priority
              />
            </div>
          </FadeInDown>

          {/* Contact Information */}
          <FadeInDown delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm">
              {/* Address */}
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm">
                  Московская область, Ленинский р-н, р/п Боброво, ул. Крымская, д. 19, корп1, пом.3
                </span>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm">
                  Работаем без выходных С 10:00 до 22:00
                </span>
              </div>
            </div>
          </FadeInDown>
        </div>
      </div>
    </div>
  );
}