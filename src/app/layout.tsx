import type { Metadata, Viewport } from "next";
// import Script from 'next/script';
// import Image from 'next/image';
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
    default: "Салон эпиляции и массажа и маникюра Архитектура - Эпиляция, массаж, маникюр в Пятигорске",
    template: "%s | Салон Архитектура"
  },
  description: "Салон эпиляции и массажа и маникюра Архитектура в Пятигорске: профессиональная эпиляция, расслабляющий массаж, качественный маникюр. Опытные мастера, современное оборудование. Запись: +7 (928) 716-70-38",
  keywords: [
    "салон эпиляции",
    "массаж",
    "маникюр",
    "эпиляция",
    "депиляция",
    "лазерная эпиляция",
    "восковая эпиляция",
    "расслабляющий массаж",
    "лечебный массаж",
    "маникюр",
    "педикюр",
    "Пятигорск",
    "ул. Розы Люксембург",
    "Архитектура",
    "салон эпиляции Пятигорск",
    "массажист",
    "мастер маникюра",
    "эпиляция Пятигорск"
  ],
  authors: [{ name: "Салон эпиляции и массажа и маникюра Архитектура" }],
  creator: "Салон эпиляции и массажа и маникюра Архитектура",
  publisher: "Салон эпиляции и массажа и маникюра Архитектура",
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://architecturaptg.ru' : 'http://localhost:3000'),
  alternates: {
    canonical: process.env.NODE_ENV === 'production' ? 'https://architecturaptg.ru' : 'http://localhost:3000',
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: process.env.NODE_ENV === 'production' ? 'https://architecturaptg.ru' : 'http://localhost:3000',
    title: "Салон эпиляции и массажа и маникюра Архитектура - Эпиляция, массаж, маникюр в Пятигорске",
    description: "Салон эпиляции и массажа и маникюра Архитектура в Пятигорске: профессиональная эпиляция, расслабляющий массаж, качественный маникюр. Опытные мастера, современное оборудование.",
    siteName: "Салон Архитектура",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Салон эпиляции и массажа и маникюра Архитектура - Эпиляция, массаж, маникюр в Пятигорске",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Салон эпиляции и массажа и маникюра Архитектура - Эпиляция, массаж, маникюр в Пятигорске",
    description: "Салон эпиляции и массажа и маникюра Архитектура в Пятигорске: профессиональная эпиляция, расслабляющий массаж, качественный маникюр.",
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
    "geo.region": "RU-STA",
    "geo.placename": "Пятигорск",
    "geo.position": "44.0486;43.0594",
    "ICBM": "44.0486, 43.0594",
    "DC.title": "Салон эпиляции и массажа и маникюра Архитектура",
    "DC.creator": "Салон эпиляции и массажа и маникюра Архитектура",
    "DC.subject": "Салон эпиляции, массаж, маникюр, депиляция",
    "DC.description": "Салон эпиляции и массажа и маникюра Архитектура в Пятигорске: профессиональная эпиляция, расслабляющий массаж, качественный маникюр",
    "DC.publisher": "Салон эпиляции и массажа и маникюра Архитектура",
    "DC.contributor": "Салон эпиляции и массажа и маникюра Архитектура",
    "DC.date": "2024",
    "DC.type": "Service",
    "DC.format": "text/html",
                "DC.identifier": "https://architecturaptg.ru",
    "DC.language": "ru",
    "DC.coverage": "Пятигорск, Ставропольский край",
    "DC.rights": "Салон эпиляции и массажа и маникюра Архитектура",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-theme="light">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#AC934A" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />
        
        {/* Local SF Pro Display Font Preloads */}
        <link rel="preload" href="/fonts/SF-Pro-Display-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/SF-Pro-Display-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/SF-Pro-Display-Semibold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/SF-Pro-Display-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Структурированные данные для Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "name": "Салон эпиляции и массажа и маникюра Архитектура",
              "description": "Салон эпиляции и массажа и маникюра Архитектура в Пятигорске: профессиональная эпиляция, расслабляющий массаж, качественный маникюр",
              "url": "https://architecturaptg.ru",
              "telephone": "+79287167038",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Розы Люксембург, 72А",
                "addressLocality": "Пятигорск",
                "addressRegion": "Ставропольский край",
                "postalCode": "357500",
                "addressCountry": "RU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.0486,
                "longitude": 43.0594
              },
              "openingHours": [
                "Mo-Su 08:00-20:00"
              ],
              "priceRange": "₽₽",
              "currenciesAccepted": "RUB",
              "paymentAccepted": "Cash, Credit Card",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Услуги салона Архитектура",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Эпиляция"
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
                      "name": "Маникюр"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Педикюр"
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
                "https://architecturaptg.ru/studio-exterior.jpg",
                "https://architecturaptg.ru/studio-interior.jpg"
              ],
              "sameAs": [
                "https://vk.com/arhitektura_beauty",
                "https://instagram.com/arhitektura_beauty"
              ]
            })
          }}
        />
        
        {/* Yandex.Metrika - закомментировано до получения токена */}
        {/* 
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {
                  if (document.scripts[j].src === r) { return; }
                }
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(YOUR_YANDEX_ID, "init", {
                defer: true,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true
              });
            `
          }}
        />
        */}
        

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
        
        {/* Yandex.Metrika noscript - закомментировано до получения токена */}
        {/* 
        <noscript>
          <div style={{position:'absolute', left:'-9999px'}}>
            <Image 
              src="https://mc.yandex.ru/watch/YOUR_YANDEX_ID" 
              alt="" 
              width={1}
              height={1}
              unoptimized
            />
          </div>
        </noscript>
        */}
      </body>
    </html>
  );
}
