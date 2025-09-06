'use client';

import { FadeInUp } from "@/components/animations";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Users, Award, Heart, PartyPopper, Microscope, Calendar, Shield } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Marquee } from "@/components/ui/3d-testimonails";





export default function AboutUsPage() {

  return (
    <div className="min-h-screen" style={{backgroundColor: 'rgb(99,99,99)'}}>
      {/* Header */}
      <section className="via-background to-accent/10 pt-5" style={{backgroundColor: 'rgb(99,99,99)'}}>
        <div className="container mx-auto px-4" style={{backgroundColor: 'rgb(99,99,99)'}}>
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <div className="flex items-center gap-4 mb-8" style={{backgroundColor: 'rgb(99,99,99)'}}>
                <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <ArrowLeft className="h-5 w-5" />
                  Назад на главную
                </Link>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gold-gradient">
                О нас
              </h1>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Главная информация о студии */}
      <section className="py-8 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">
                  Добро пожаловать
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Студия эстетики лица и тела «Архитектура»
                </h2>
                <p className="text-lg text-muted-foreground">
                  Ваш результат - наша гарантия качества
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  г. Пятигорск, ул. Розы Люксембург, 72А
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <Card className="p-8 sm:p-12 bg-gradient-to-br from-muted/30 to-background">
                <CardContent className="p-0">
                  <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                    <p className="text-lg mb-6">
                      <strong className="text-foreground">Студия красоты «Архитектура»</strong> – это место, где ваши мечты о красоте становятся реальностью. Мы ориентированы на достижение именно того результата, который хочет каждый клиент. Наша философия – индивидуальный подход к каждому, поскольку мы понимаем: красота уникальна и требует особого подхода.
                    </p>
                    
                    <blockquote className="border-l-4 border-brand-primary pl-6 italic my-8">
                      <p className="text-lg">
                        Мы предлагаем полный спектр услуг молодости, стройности, красоты и здоровья в одном месте. Каждая процедура разрабатывается с учётом ваших индивидуальных особенностей, пожеланий и целей.
                      </p>
                    </blockquote>
                    
                    <p className="text-lg mb-6">
                      <strong className="text-foreground">Наша команда мастеров с большим опытом</strong> гарантирует высокий уровень профессионализма и безопасность каждой процедуры. Мы сочетаем передовые технологии с проверенными методиками, чтобы обеспечить максимальную эффективность и здоровье клиента.
                    </p>

                    <p className="text-lg">
                      Здоровье клиента – наш приоритет № 1. Мы гарантируем <strong className="text-foreground">полную безопасность всех процедур</strong>, соблюдая высочайшие стандарты гигиены и стерилизации. Каждый клиент получает именно тот результат, о котором мечтал.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Опыт и профессионализм */}
      <section className="py-8 sm:py-10" style={{backgroundColor: 'rgba(99,99,99, 0.9)'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeInUp>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gold-gradient">
                  Наша команда профессионалов
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Мастера с большим опытом, высоким уровнем профессионализма и полной гарантией безопасности здоровья каждого клиента
                </p>
              </div>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <FadeInUp delay={0.2}>
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="h-16 w-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-8 w-8 text-brand-primary" />
                    </div>
                    <CardTitle className="text-2xl">Опыт команды</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Мастера с большим опытом работы и высоким уровнем профессионализма
                    </p>
                  </CardContent>
                </Card>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="h-16 w-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-brand-primary" />
                    </div>
                    <CardTitle className="text-2xl">7 специалистов</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Сертифицированных профессионалов в команде
                    </p>
                  </CardContent>
                </Card>
              </FadeInUp>

              <FadeInUp delay={0.4}>
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="h-16 w-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Microscope className="h-8 w-8 text-brand-primary" />
                    </div>
                    <CardTitle className="text-2xl">Безопасность</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Полная гарантия безопасности здоровья клиента
                    </p>
                  </CardContent>
                </Card>
              </FadeInUp>
            </div>

            <FadeInUp delay={0.5}>
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                    <p className="text-lg mb-4">
                      <strong className="text-foreground">Наша команда</strong> – это опытные мастера с большим опытом работы и высоким уровнем профессионализма. Мы соблюдаем высочайшие стандарты стерилизации и гигиены, что гарантирует полную безопасность для вашего здоровья.
                    </p>
                    <p className="text-lg">
                      Каждый клиент получает <strong className="text-foreground">именно тот результат, который он хочет</strong>. Наш индивидуальный подход и профессионализм команды гарантируют выдающиеся результаты в безопасной и комфортной обстановке.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeInUp>
          </div>
        </div>
      </section>



      {/* Почему выбирают нас */}
      <section className="py-8 sm:py-10" style={{backgroundColor: 'rgba(99,99,99, 0.9)'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeInUp>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gold-gradient">
                  Наши преимущества
                </h2>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                  Полный спектр услуг молодости, стройности, красоты и здоровья в одном месте
                </p>
              </div>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeInUp delay={0.2}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
                        <Heart className="h-5 w-5 text-brand-primary" />
                      </div>
                      Ваш результат - наша цель
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Мы ориентированы на достижение именно того результата, который хочет клиент. Каждая процедура разрабатывается индивидуально.
                    </p>
                  </CardContent>
                </Card>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
                        <Microscope className="h-5 w-5 text-brand-primary" />
                      </div>
                      Полный спектр услуг
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Молодость, стройность, красота и здоровье в одном месте: косметология, массаж, маникюр, педикюр и другие услуги.
                    </p>
                  </CardContent>
                </Card>
              </FadeInUp>

              <FadeInUp delay={0.4}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
                        <Award className="h-5 w-5 text-brand-primary" />
                      </div>
                      Команда профессионалов
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Мастера с большим опытом работы и высоким уровнем профессионализма, которые гарантируют выдающиеся результаты.
                    </p>
                  </CardContent>
                </Card>
              </FadeInUp>

              <FadeInUp delay={0.5}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
                        <Shield className="h-5 w-5 text-brand-primary" />
                      </div>
                      Гарантия безопасности
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Полная гарантия безопасности здоровья клиента. Мы соблюдаем высочайшие стандарты стерилизации и гигиены, используем только качественные материалы.
                    </p>
                  </CardContent>
                </Card>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Бегущая строка */}
      <section className="py-2 bg-brand-primary overflow-hidden">
        <Marquee 
          repeat={6} 
          pauseOnHover={false}
          className="text-white text-xl sm:text-xl lg:text-2xl font-bold"
        >
          <span className="mx-8 flex items-center gap-3">
            <PartyPopper className="h-6 w-6 sm:h-8 sm:w-8" />
            Ваш путь к красоте начинается здесь и сейчас! 
            <PartyPopper className="h-6 w-6 sm:h-8 sm:w-8" />
          </span>
        </Marquee>
      </section>




    </div>
  );
}