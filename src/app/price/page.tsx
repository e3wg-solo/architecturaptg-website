'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { FadeInUp } from "@/components/animations";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowLeft, Phone, MessageCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { PriceItem } from '@/lib/sheets';
import { fallbackPrices } from '@/lib/fallback-prices';

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

function PricePageContent() {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get('service');
  const [openAccordion, setOpenAccordion] = useState<string>('');
  const [data, setData] = useState<Record<string, { name: string; price: string; duration?: string }[]>>(fallbackPrices);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Показываем fallback данные сразу
    setIsLoading(false);
    setIsUpdating(true);

    // Проверяем кэш
    const cachedData = localStorage.getItem('pricelistCache');
    const cacheTimestamp = localStorage.getItem('pricelistCacheTimestamp');
    const now = Date.now();
    const cacheAge = cacheTimestamp ? now - parseInt(cacheTimestamp) : Infinity;
    
    // Если кэш свежий (менее 10 минут), используем его
    if (cachedData && cacheAge < 10 * 60 * 1000) {
      try {
        const parsed = JSON.parse(cachedData);
        setData(parsed);
        setIsUpdating(false);
        return;
      } catch (e) {
        console.error('Error parsing cached data:', e);
      }
    }

    // Загружаем актуальные данные
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000); // 2 0 секунд таймаут

    fetch('/api/pricelist', { 
      signal: controller.signal,
      cache: 'no-cache'
    })
      .then((res) => {
        clearTimeout(timeoutId);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        if (json.data && json.data.length > 0) {
          const grouped: Record<string, { name: string; price: string; duration?: string }[]> = {};
          json.data.forEach((item: PriceItem) => {
            if (!grouped[item.categoryId]) {
              grouped[item.categoryId] = [];
            }
            grouped[item.categoryId].push({
              name: item.name,
              price: item.price,
              duration: item.duration,
            });
          });
          setData(grouped);
          
          // Сохраняем в кэш
          localStorage.setItem('pricelistCache', JSON.stringify(grouped));
          localStorage.setItem('pricelistCacheTimestamp', now.toString());
        }
        setError(null);
      })
      .catch((err) => {
        console.error('Failed to fetch prices:', err);
        if (err.name === 'AbortError') {
          setError('Превышено время ожидания загрузки');
        } else {
          setError('Ошибка загрузки актуальных цен');
        }
        // Оставляем fallback данные при ошибке
      })
      .finally(() => {
        setIsUpdating(false);
        clearTimeout(timeoutId);
      });

    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, []);

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
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="bg-black via-background to-accent/10 pt-5">
        <div className="container mx-auto px-4 bg-black">
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
                <CardHeader className="relative">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    Все наши услуги
                    {isUpdating && (
                      <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                    )}
                  </CardTitle>
                  {error && (
                    <p className="text-sm text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 p-2 rounded">
                      {error}. Показаны базовые цены.
                    </p>
                  )}
                  {isUpdating && !error && (
                    <p className="text-sm text-blue-600 bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
                      Загружаем актуальные цены...
                    </p>
                  )}
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="flex items-center justify-center py-12">
                      <Loader2 className="h-8 w-8 animate-spin" />
                      <span className="ml-2">Загрузка прайс-листа...</span>
                    </div>
                  ) : (
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
                              {data[key] && data[key].length > 0 ? (
                                data[key].map((item, index) => (
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
                                ))
                              ) : (
                                <p className="text-muted-foreground text-center py-4">
                                  Услуги в данной категории временно недоступны
                                </p>
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  )}
                </CardContent>
              </Card>
            </FadeInUp>
            
            {/* Contact Buttons */}
            <FadeInUp delay={0.4}>
              <div className="mt-12 p-8 bg-card rounded-2xl">
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

export default function PricePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PricePageContent />
    </Suspense>
  );
}