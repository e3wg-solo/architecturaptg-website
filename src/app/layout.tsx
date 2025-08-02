import type { Metadata, Viewport } from "next";
import "./globals.css";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { TopInfoBar } from "@/components/layout/top-info-bar";
import { PageBackground } from "@/components/layout/page-background";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Салон красоты Topiconic - Косметология, парикмахерские услуги, маникюр в Боброво",
    template: "%s | Салон красоты Topiconic"
  },
  description: "Салон красоты Topiconic в Боброво: косметология, парикмахерские услуги, маникюр, педикюр, массаж, татуаж, макияж. Профессиональные мастера, качественные материалы. Запись: +7 (993) 777-55-59",
  keywords: [
    "салон красоты",
    "косметология",
    "парикмахерские услуги", 
    "маникюр",
    "педикюр",
    "массаж",
    "татуаж",
    "макияж",
    "солярий",
    "Боброво",
    "Крымская улица",
    "Topiconic",
    "салон красоты Боброво",
    "косметолог",
    "парикмахер",
    "мастер маникюра",
    "массажист",
    "визажист"
  ],
  authors: [{ name: "Салон красоты Topiconic" }],
  creator: "Салон красоты Topiconic",
  publisher: "Салон красоты Topiconic",
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://topiconic.ru' : 'http://localhost:3000'),
  alternates: {
    canonical: process.env.NODE_ENV === 'production' ? 'https://topiconic.ru' : 'http://localhost:3000',
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: process.env.NODE_ENV === 'production' ? 'https://topiconic.ru' : 'http://localhost:3000',
    title: "Салон красоты Topiconic - Косметология, парикмахерские услуги, маникюр в Боброво",
    description: "Салон красоты Topiconic в Боброво: косметология, парикмахерские услуги, маникюр, педикюр, массаж, татуаж, макияж. Профессиональные мастера, качественные материалы.",
    siteName: "Салон красоты Topiconic",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Салон красоты Topiconic - Косметология, парикмахерские услуги, маникюр в Боброво",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Салон красоты Topiconic - Косметология, парикмахерские услуги, маникюр в Боброво",
    description: "Салон красоты Topiconic в Боброво: косметология, парикмахерские услуги, маникюр, педикюр, массаж, татуаж, макияж.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Замените на ваш код верификации Google
    yandex: "your-yandex-verification-code", // Замените на ваш код верификации Yandex
  },
  category: "beauty",
  classification: "Beauty Salon",
  other: {
    "geo.region": "RU-MOS",
    "geo.placename": "Боброво",
    "geo.position": "55.123456;37.123456", // Замените на реальные координаты
    "ICBM": "55.123456, 37.123456", // Замените на реальные координаты
    "DC.title": "Салон красоты Topiconic",
    "DC.creator": "Салон красоты Topiconic",
    "DC.subject": "Салон красоты, косметология, парикмахерские услуги",
    "DC.description": "Салон красоты Topiconic в Боброво: косметология, парикмахерские услуги, маникюр, педикюр, массаж, татуаж, макияж",
    "DC.publisher": "Салон красоты Topiconic",
    "DC.contributor": "Салон красоты Topiconic",
    "DC.date": "2024",
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://topiconic.ru",
    "DC.language": "ru",
    "DC.coverage": "Боброво, Московская область",
    "DC.rights": "Салон красоты Topiconic",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link rel="preload" href="https://fonts.cdnfonts.com/s/92806/SF-Pro-Display-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.cdnfonts.com/s/92806/SF-Pro-Display-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.cdnfonts.com/s/92806/SF-Pro-Display-Semibold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.cdnfonts.com/s/92806/SF-Pro-Display-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Структурированные данные для Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "name": "Салон красоты Topiconic",
              "description": "Салон красоты Topiconic в Боброво: косметология, парикмахерские услуги, маникюр, педикюр, массаж, татуаж, макияж",
              "url": "https://topiconic.ru",
              "telephone": "+79937775559",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Крымская ул., 19, корп. 1",
                "addressLocality": "Боброво",
                "addressRegion": "Московская область",
                "postalCode": "142060",
                "addressCountry": "RU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 55.123456, // Замените на реальные координаты
                "longitude": 37.123456 // Замените на реальные координаты
              },
              "openingHours": [
                "Mo-Fr 09:00-20:00",
                "Sa-Su 10:00-19:00"
              ],
              "priceRange": "₽₽",
              "currenciesAccepted": "RUB",
              "paymentAccepted": "Cash, Credit Card",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Услуги салона красоты",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Косметология"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Парикмахерские услуги"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Маникюр"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Массаж"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Татуаж"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Макияж"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127"
              },
              "image": [
                "https://topiconic.ru/salon-exterior.jpg",
                "https://topiconic.ru/salon-interior.jpg"
              ],
              "sameAs": [
                "https://vk.com/topiconic",
                "https://instagram.com/topiconic"
              ]
            })
          }}
        />
        
        {/* Yandex.Metrika */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              ym(YOUR_YANDEX_ID, "init", {
                defer: true
              });
            `
          }}
        />
        
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_GA_ID');
            `
          }}
        />
      </head>
      <body
        className="antialiased min-h-screen bg-background font-sans sf-pro-display-optimized"
      >
        <div className="flex min-h-screen flex-col relative">
          <PageBackground />
          <TopInfoBar />
          <Header />
          
          {/* Main content area */}
          <main className="flex-1 relative z-10">
            {children}
          </main>
          
          <Footer />
        </div>
        
        {/* Yandex.Metrika noscript */}
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/YOUR_YANDEX_ID" style={{position:'absolute', left:'-9999px'}} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  );
}
