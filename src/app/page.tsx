"use client";

import { FadeInUp, ScrollFadeInUp } from "@/components/animations";
import { EmblaScaleReviews } from "@/components/ui/embla-scale-reviews";
import { FaqSectionWithCategories } from "@/components/ui/faq-with-categories";
import { ContactButtons } from "@/components/ui/contact-buttons";
import { SalonFeatureCarousel } from "@/components/ui/salon-feature-carousel";
import { ServicesGrid } from "@/components/ui/services-grid";
import { PromoCardSlider } from "@/components/ui/promo-card-slider";


export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative z-10">

          {/* Hero Section */}
          <section className="overflow-hidden">
            <div className="container mx-auto px-4 pt-68 pb-14 sm:pt-84 sm:pb-20">
              <div className="max-w-4xl mx-auto text-center">
                <FadeInUp delay={0.2}>
                  <div className="mb-8">
                    <h1 className="sr-only">Салон эпиляции и массажа и маникюра Архитектура - Эпиляция, массаж, маникюр в Пятигорске</h1>
                  </div>
                </FadeInUp>
                
                <FadeInUp delay={0.4}>
                  <PromoCardSlider />
                </FadeInUp>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Остальная часть сайта — без фонового слайдера */}
      <FadeInUp delay={0.3}>
        <section id="services" style={{backgroundColor: 'rgb(99,99,99)'}}>
          <ServicesGrid />
        </section>
      </FadeInUp>

      <ScrollFadeInUp delay={0.3}>
        <section className="py-0" style={{backgroundColor: 'rgb(99,99,99)'}}>
          <SalonFeatureCarousel />
        </section>
      </ScrollFadeInUp>

      <ScrollFadeInUp delay={0.3}>
        <section className="py-20 sm:py-32" style={{backgroundColor: 'rgb(99,99,99)'}}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-gold-gradient">
                Отзывы наших клиентов
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Нам доверяют: 97% клиентов приходят снова
              </p>
            </div>

            <EmblaScaleReviews />
          </div>
        </section>
      </ScrollFadeInUp>

      <ScrollFadeInUp delay={0.4}>
        <section className="py-0 sm:py-0" style={{backgroundColor: 'rgb(99,99,99)'}}>
          <div className="container mx-auto px-4">
            <FaqSectionWithCategories
              title="Часто задаваемые вопросы"
              description="Ответы на самые популярные вопросы наших клиентов"
              items={[
                {
                  question: "Нужно ли записываться заранее или можно прийти без записи?",
                  answer: "Записаться на услуги нашей студии можно предварительно, найдем самые ближайшие окошки у мастеров.",
                },
                {
                  question: "Есть ли услуг для мужчин?",
                  answer: "Для мужчин есть услуги ручных массажей, аппаратной и ручной коррекции фигуры, маникюр, педикюр.",
                },
                {
                  question: "Есть ли у вас подарочные сертификаты?",
                  answer: "Да! Мы предлагаем подарочные сертификаты на любую сумму или на конкретные процедуры. Это отличный способ порадовать близкого человека заботой и приятными впечатлениями.",
                },
                {
                  question: "Есть ли у вас парковка для машин?",
                  answer: "Да, у нас есть парковка для машин.",
                }
              ]}
              contactInfo={{
                title: "Остались вопросы?",
                description: "Напишите нам — мы с радостью подскажем!",
                buttonText: "Связаться с нами"
              }}
            />
          </div>
        </section>
      </ScrollFadeInUp>

      <ScrollFadeInUp delay={0.4}>
        <section id="contacts" className="py-5 sm:py-8" style={{backgroundColor: 'rgba(99,99,99, 0.9)'}}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-white">
                Контакты
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Свяжитесь с нами любым удобным способом
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              <div>
                <ContactButtons />
              </div>
              <div>
                <div className="h-[526px] rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A345268a1e1dc6bddaa27e74e3a4cd751c394f142d04190bba0c2a034f7cd25d8&amp;source=constructor"
                    width="650"
                    height="750"
                    frameBorder="0"
                    title="Салон эпиляции и массажа и маникюра Архитектура - г. Пятигорск, ул. Розы Люксембург, 72А"
                    className="w-full h-full max-w-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeInUp>
    </div>
  );
}
