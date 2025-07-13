import { FadeInUp } from "@/components/animations";
import { AnimatedButton } from "@/components/animations/animated-button";
import { EmblaScaleReviews } from "@/components/ui/embla-scale-reviews";
import { FaqSectionWithCategories } from "@/components/ui/faq-with-categories";
import { ContactButtons } from "@/components/ui/contact-buttons";
import { SalonFeatureCarousel } from "@/components/ui/salon-feature-carousel";
import { ServicesGrid } from "@/components/ui/services-grid";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/10">
        <div className="container mx-auto px-4 py-20 sm:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
              Добро пожаловать в Topiconic
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Мы не создаём образы —
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                {" "}мы их раскрываем
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Салон красоты полного цикла в сердце города. Доверьтесь нашим мастерам — 
              и откройте в себе новую красоту.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton 
                size="lg" 
                className="text-lg px-8 py-6 h-auto"
              >
                Записаться
                <ArrowRight className="ml-2 h-5 w-5" />
              </AnimatedButton>
              <AnimatedButton 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 h-auto"
              >
                Посмотреть услуги
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="bg-background">
        <FadeInUp>
          <ServicesGrid />
        </FadeInUp>
      </section>

      {/* Salon Services Carousel Section */}
      <section className="py-0 bg-background">
        <FadeInUp>
          <SalonFeatureCarousel />
        </FadeInUp>
      </section>

      {/* Embla Scale Reviews Section */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              Отзывы наших клиентов 
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Нам доверяют: 97% клиентов приходят снова
              </p>
            </div>
          </FadeInUp>
          
          <EmblaScaleReviews />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-0 sm:py-0">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <FaqSectionWithCategories
              title="Часто задаваемые вопросы"
              description="Ответы на самые популярные вопросы наших клиентов"
              items={[
                {
                  question: "Нужно ли записываться заранее или можно прийти без записи?",
                  answer: "Рекомендуем записываться заранее, чтобы мы могли гарантировать удобное для вас время и подготовить всё необходимое. Но если у нас есть свободное окно — с радостью примем и без записи!",
                },
                {
                  question: "С какими брендами косметики вы работаете?",
                  answer: "Мы используем только проверенные профессиональные бренды: L’Oréal Professionnel, Estel, OPI, CND, Holy Land, Christina и другие — в зависимости от услуги и типа кожи/волос клиента.",
                },
                {
                  question: "Есть ли у вас подарочные сертификаты?",
                  answer: "Да! Мы предлагаем подарочные сертификаты на любую сумму или на конкретные процедуры. Это отличный способ порадовать близкого человека заботой и приятными впечатлениями.",
                },
                {
                  question: "Что делать, если я опаздываю или не могу прийти?",
                  answer: "Пожалуйста, предупредите нас заранее — мы обязательно подберём другое удобное время. При опоздании более чем на 15 минут услуга может быть сокращена или перенесена.",
                },
                {
                  question: "Можно ли прийти с ребёнком или подругой?",
                  answer: "Конечно! У нас уютная атмосфера, и вы можете спокойно прийти с ребёнком или в компании — рядом можно присесть и подождать. Мы всегда рады создать комфорт не только для клиента, но и для его близких.",
                },
                {
                  question: "Сколько времени длится процедура?",
                  answer: "Продолжительность зависит от конкретной услуги. Например, стрижка занимает около 40 минут, окрашивание — от 1,5 часов, а маникюр с покрытием — примерно 1 час. Точный тайминг можно уточнить при записи — мы подскажем заранее.",
                }
              ]}
              contactInfo={{
                title: "Остались вопросы?",
                description: "Напишите нам — мы с радостью подскажем!",
                buttonText: "Связаться с нами"
              }}
            />
          </FadeInUp>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-5 sm:py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">
                Контакты
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Свяжитесь с нами любым удобным способом
              </p>
            </div>
          </FadeInUp>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <FadeInUp delay={0.2}>
              <ContactButtons />
            </FadeInUp>
            
            {/* Yandex Map */}
            <FadeInUp delay={0.4}>
              <div className="h-[526px] rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A14a6281f7bad364d9387bec393adc037e910fb4d021e11cde11b35d96769f6a0&amp;source=constructor"
                  width="650"
                  height="750"
                  frameBorder="0"
                  title="Салон TOPICONIC - Крымская ул., 19, корп. 1, рабочий посёлок Боброво"
                  className="w-full h-full max-w-full"
                ></iframe>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </div>
  );
}
