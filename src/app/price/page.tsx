'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { FadeInUp } from "@/components/animations";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowLeft, Phone, MessageCircle, RefreshCw, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { PriceItem } from '@/lib/sheets';

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
  const [data, setData] = useState<Record<string, { name: string; price: string; duration?: string }[]> | null>(null);
  const [lastUpdate, setLastUpdate] = useState<string | null>(null);
  const [isManualRefreshing, setIsManualRefreshing] = useState(false);
  const [hasAttemptedLoad, setHasAttemptedLoad] = useState(false);

  useEffect(() => {
    // Загружаем данные ТОЛЬКО из кэша
    const loadCachedData = () => {
      const cachedData = localStorage.getItem('pricelistCache');
      const cacheTimestamp = localStorage.getItem('pricelistCacheTimestamp');
      
      if (cachedData && cacheTimestamp) {
        try {
          const parsed = JSON.parse(cachedData);
          setData(parsed);
          setLastUpdate(new Date(parseInt(cacheTimestamp)).toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }));
        } catch (e) {
          console.error('Error parsing cached data:', e);
        }
      }
      setHasAttemptedLoad(true);
    };

    // Загружаем только кэшированные данные
    loadCachedData();
  }, []);

  // Ручное обновление данных (единственный способ получить новые данные)
  const handleManualRefresh = async () => {
    setIsManualRefreshing(true);
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      const response = await fetch('/api/pricelist?refresh=true', { 
        signal: controller.signal,
        cache: 'no-cache'
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const json = await response.json();
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

          // Обновляем данные и кэш
          setData(grouped);
          const now = Date.now();
          localStorage.setItem('pricelistCache', JSON.stringify(grouped));
          localStorage.setItem('pricelistCacheTimestamp', now.toString());
          setLastUpdate(new Date(now).toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }));
        }
      }
    } catch (error) {
      console.error('Manual refresh failed:', error);
    } finally {
      setIsManualRefreshing(false);
    }
  };

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

  // Если данных нет и мы уже пытались загрузить
  if (hasAttemptedLoad && !data) {
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

        {/* Empty State */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInUp>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">
                      Прайс-лист
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <AlertCircle className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="text-xl font-semibold mb-2">Цены не загружены</h3>
                      <p className="text-muted-foreground mb-6">
                        Актуальные цены пока не были загружены из системы управления
                      </p>
                      <Button
                        onClick={handleManualRefresh}
                        disabled={isManualRefreshing}
                        className="flex items-center gap-2 mx-auto"
                      >
                        <RefreshCw className={`h-4 w-4 ${isManualRefreshing ? 'animate-spin' : ''}`} />
                        {isManualRefreshing ? 'Загрузка...' : 'Загрузить цены'}
                      </Button>
                    </div>
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
                    Свяжитесь с нами для записи или уточнения цен
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
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">
                      Все наши услуги
                    </CardTitle>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleManualRefresh}
                      disabled={isManualRefreshing}
                      className="flex items-center gap-2"
                    >
                      <RefreshCw className={`h-4 w-4 ${isManualRefreshing ? 'animate-spin' : ''}`} />
                      Обновить
                    </Button>
                  </div>
                  {lastUpdate && (
                    <p className="text-sm text-muted-foreground">
                      Последнее обновление: {lastUpdate}
                    </p>
                  )}
                </CardHeader>
                <CardContent>
                  {data ? (
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
                                  Услуги в данной категории пока не добавлены
                                </p>
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">Данные загружаются...</p>
                    </div>
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