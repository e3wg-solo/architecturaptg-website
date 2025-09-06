'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense, useMemo } from 'react';
import { FadeInUp } from "@/components/animations";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowLeft, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { getPricelistData, PriceItem } from '@/lib/pricelist-data';

const serviceNames: { [key: string]: string } = {
  'cosmetology': 'Косметология',
  'body-massage': 'Ручные массажи по телу',
  'spa': 'SPA-программы',
  'figure-correction': 'Ручная коррекция фигуры',
  'men-massage': 'Массажи для мужчин',
  'face-massage': 'Массажи лица',
  'apparatus-face': 'Аппаратные процедуры для лица',
  'manicure-pedicure': 'Маникюр и педикюр',
  'apparatus-body': 'Аппаратные процедуры для тела',
  'figure-correction-courses': 'Курсы коррекции фигуры',
};

// Кешируем сгруппированные данные для лучшей производительности
let cachedGroupedData: Record<string, { name: string; price: string; duration?: string }[]> | null = null;

const getGroupedData = () => {
  if (cachedGroupedData) {
    return cachedGroupedData;
  }
  
  const pricelistData = getPricelistData();
  const grouped: Record<string, { name: string; price: string; duration?: string }[]> = {};
  
  pricelistData.forEach((item: PriceItem) => {
    if (!grouped[item.categoryId]) {
      grouped[item.categoryId] = [];
    }
    grouped[item.categoryId].push({
      name: item.name,
      price: item.price,
      duration: item.duration,
    });
  });
  
  cachedGroupedData = grouped;
  return grouped;
};

function PricePageContent() {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get('service');
  const [openAccordion, setOpenAccordion] = useState<string>('');
  
  // Мемоизируем данные для предотвращения повторных вычислений
  const data = useMemo(() => getGroupedData(), []);

  // Устанавливаем открытый accordion при загрузке страницы
  useEffect(() => {
    if (serviceId && serviceNames[serviceId]) {
      setOpenAccordion(serviceId);
    }
  }, [serviceId]);

  const handleBooking = () => {
    window.open('tel:+79287167038', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/79287167038', '_blank');
  };

  const handleAccordionChange = (value: string) => {
    // Простое переключение без сложной логики
    setOpenAccordion(value);
  };

  // Показываем данные
  return (
    <div className="min-h-screen" style={{backgroundColor: 'rgb(99,99,99)'}}>
      <section className="via-background to-accent/10 pt-5" style={{backgroundColor: 'rgb(99,99,99)'}}>
        <div className="container mx-auto px-4" style={{backgroundColor: 'rgb(99,99,99)'}}>
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <div className="flex items-center gap-4 mb-8">
                <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors">
                  <ArrowLeft className="h-5 w-5" />
                  Назад на главную
                </Link>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gold-gradient">
                Прайс-лист
              </h1>
              
              <p className="text-xl text-white/80 mb-8">
                Актуальные цены на все наши услуги
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gold-gradient">
                    Все наши услуги
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion 
                    type="single" 
                    collapsible 
                    value={openAccordion}
                    onValueChange={handleAccordionChange}
                  >
                    {Object.entries(serviceNames).map(([key, name]) => (
                      <AccordionItem key={key} value={key}>
                        <AccordionTrigger className="text-lg font-semibold">
                          {name}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            {data[key] && data[key].length > 0 ? (
                              data[key].map((item, index) => (
                                <div key={`${key}-${index}`} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-lg space-y-2 sm:space-y-0" style={{backgroundColor: 'rgba(175, 175, 175, 0.14)'}}>
                                  <div className="flex-1">
                                    <h3 className="font-semibold text-base leading-tight">{item.name}</h3>
                                    {item.duration && (
                                      <p className="text-sm text-foreground mt-1">Время: {item.duration}</p>
                                    )}
                                  </div>
                                  <div className="text-left sm:text-right flex-shrink-0">
                                    <p className="font-bold text-lg text-primary">{item.price}</p>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <p className="text-muted-foreground text-center py-4">
                                Услуги в данной категории пока не добавлены
                              </p>
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </FadeInUp>
            
            <FadeInUp delay={0.4}>
              <div className="mt-12 p-8 bg-card rounded-2xl" style={{backgroundColor: 'rgba(172,147,74, 0.2)'}}>
                <h3 className="text-xl font-bold mb-4 text-center text-gold-gradient">
                  Записаться на услугу
                </h3>
                <p className="text-white/80 text-center mb-6">
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

export default function PricePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: 'rgb(99,99,99)'}}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-white/80">Загрузка прайс-листа...</p>
        </div>
      </div>
    }>
      <PricePageContent />
    </Suspense>
  );
}