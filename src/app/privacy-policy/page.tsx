'use client';

import { FadeInUp } from "@/components/animations";
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-background via-background to-accent/10 pt-5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <div className="flex items-center gap-4 mb-8">
                <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <ArrowLeft className="h-5 w-5" />
                  Назад на главную
                </Link>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Политика конфиденциальности
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Информация о том, как мы собираем, используем и защищаем ваши персональные данные
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <div className="prose prose-lg max-w-none">
                <div className="bg-muted/30 p-8 rounded-lg text-center">
                  <p className="text-muted-foreground mb-4">
                    Содержание страницы будет добавлено позже
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Здесь будет размещена политика конфиденциальности TOPICONIC бьюти & спа
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </div>
  );
} 