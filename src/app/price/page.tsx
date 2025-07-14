'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FadeInUp } from "@/components/animations";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowLeft, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const serviceNames: { [key: string]: string } = {
  'aesthetic-cosmetology': 'Косметология эстетическая',
  'hardware-cosmetology': 'Косметология аппаратная',
  'hairdressing': 'Парикмахерский зал',
  'nail-service': 'Ногтевой сервис',
  'massage': 'Массаж',
  'eyebrows-lashes': 'Брови и ресницы',
  'tattoo': 'Татуаж',
  'makeup': 'Макияж',
  'solarium': 'Солярий',
};

const samplePrices: { [key: string]: { name: string; price: string; duration?: string }[] } = {
  'aesthetic-cosmetology': [
    { name: 'Чистка лица', price: '3 500 ₽', duration: '90 мин' },
    { name: 'Пилинг химический', price: '2 500 ₽', duration: '60 мин' },
    { name: 'Уход за кожей лица', price: '2 000 ₽', duration: '60 мин' },
    { name: 'Мезотерапия', price: '4 500 ₽', duration: '45 мин' },
  ],
  'hardware-cosmetology': [
    { name: 'Лазерная эпиляция', price: '1 500 ₽', duration: '30-90 мин' },
    { name: 'Фотоомоложение', price: '5 000 ₽', duration: '60 мин' },
    { name: 'RF-лифтинг', price: '3 500 ₽', duration: '45 мин' },
    { name: 'Ультразвуковая чистка', price: '2 500 ₽', duration: '60 мин' },
  ],
  'hairdressing': [
    { name: 'Стрижка женская', price: '1 800 ₽', duration: '60 мин' },
    { name: 'Стрижка мужская', price: '1 200 ₽', duration: '40 мин' },
    { name: 'Окрашивание', price: '3 500 ₽', duration: '120-180 мин' },
    { name: 'Укладка', price: '1 500 ₽', duration: '45 мин' },
  ],
  'nail-service': [
    { name: 'Маникюр с покрытием', price: '2 500 ₽', duration: '90 мин' },
    { name: 'Педикюр с покрытием', price: '3 500 ₽', duration: '120 мин' },
    { name: 'Наращивание ногтей', price: '3 000 ₽', duration: '120 мин' },
    { name: 'Дизайн ногтей', price: '500 ₽', duration: '30 мин' },
  ],
  'massage': [
    { name: 'Расслабляющий', price: '3 500 ₽', duration: '60 мин' },
    { name: 'Антицеллюлитный', price: '4 000 ₽', duration: '90 мин' },
    { name: 'Лимфодренажный', price: '4 500 ₽', duration: '90 мин' },
    { name: 'Спортивный', price: '3 800 ₽', duration: '60 мин' },
  ],
  'eyebrows-lashes': [
    { name: 'Коррекция бровей', price: '1 200 ₽', duration: '45 мин' },
    { name: 'Наращивание ресниц', price: '2 800 ₽', duration: '120 мин' },
    { name: 'Ламинирование ресниц', price: '2 500 ₽', duration: '90 мин' },
    { name: 'Окрашивание бровей', price: '800 ₽', duration: '30 мин' },
  ],
  'tattoo': [
    { name: 'Татуаж бровей', price: '8 000 ₽', duration: '180 мин' },
    { name: 'Татуаж губ', price: '10 000 ₽', duration: '180 мин' },
    { name: 'Татуаж век', price: '7 000 ₽', duration: '120 мин' },
    { name: 'Коррекция татуажа', price: '3 000 ₽', duration: '90 мин' },
  ],
  'makeup': [
    { name: 'Дневной макияж', price: '2 500 ₽', duration: '60 мин' },
    { name: 'Вечерний макияж', price: '3 500 ₽', duration: '90 мин' },
    { name: 'Свадебный макияж', price: '5 000 ₽', duration: '120 мин' },
    { name: 'Урок макияжа', price: '4 000 ₽', duration: '120 мин' },
  ],
  'solarium': [
    { name: 'Вертикальный солярий', price: '100 ₽/мин', duration: '5-12 мин' },
    { name: 'Горизонтальный солярий', price: '80 ₽/мин', duration: '8-15 мин' },
    { name: 'Турбо-солярий', price: '120 ₽/мин', duration: '3-8 мин' },
    { name: 'Абонемент на месяц', price: '3 500 ₽', duration: 'безлимит' },
  ],
};

export default function PricePage() {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get('service');
  const [openAccordion, setOpenAccordion] = useState<string>('');

  // Устанавливаем открытый accordion при загрузке страницы
  useEffect(() => {
    if (serviceId && serviceNames[serviceId]) {
      setOpenAccordion(serviceId);
    }
  }, [serviceId]);

  const handleBooking = () => {
    window.open('tel:+79937775559', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/79937775559', '_blank');
  };

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
                Прайс-лист
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Актуальные цены на все наши услуги
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Все наши услуги</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion 
                    type="single" 
                    collapsible 
                    value={openAccordion}
                    onValueChange={setOpenAccordion}
                  >
                    {Object.entries(serviceNames).map(([key, name]) => (
                      <AccordionItem key={key} value={key}>
                        <AccordionTrigger className="text-lg font-semibold">
                          {name}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                                                         {samplePrices[key]?.map((item, index) => (
                               <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-muted/30 rounded-lg space-y-2 sm:space-y-0">
                                 <div className="flex-1">
                                   <h3 className="font-semibold text-base leading-tight">{item.name}</h3>
                                   {item.duration && (
                                     <p className="text-sm text-muted-foreground mt-1">Время: {item.duration}</p>
                                   )}
                                 </div>
                                 <div className="text-left sm:text-right flex-shrink-0">
                                   <p className="font-bold text-lg text-primary">{item.price}</p>
                                 </div>
                               </div>
                             ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </FadeInUp>
            
            {/* Contact Buttons */}
            <FadeInUp delay={0.4}>
              <div className="mt-12 p-8 bg-muted/30 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-center">
                  Записаться на услугу
                </h3>
                <p className="text-muted-foreground text-center mb-6">
                  Свяжитесь с нами для записи или уточнения деталей
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={handleBooking}
                    className="flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Позвонить
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={handleWhatsApp}
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </div>
  );
} 