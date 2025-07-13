import type { Metadata, Viewport } from "next";
import "./globals.css";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Topiconic",
    template: "%s | Topiconic"
  },
  description: "Professional website built with Next.js, TypeScript, Tailwind CSS, SF Pro Display, and modern web technologies",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Web Development"],
  authors: [{ name: "Topiconic Team" }],
  creator: "Topiconic",
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://topiconic.com' : 'http://localhost:3000'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NODE_ENV === 'production' ? 'https://topiconic.com' : 'http://localhost:3000',
    title: "Topiconic",
    description: "Professional website built with Next.js, TypeScript, Tailwind CSS, SF Pro Display, and modern web technologies",
    siteName: "Topiconic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Topiconic",
    description: "Professional website built with Next.js, TypeScript, Tailwind CSS, SF Pro Display, and modern web technologies",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link rel="preload" href="https://fonts.cdnfonts.com/s/92806/SF-Pro-Display-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.cdnfonts.com/s/92806/SF-Pro-Display-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.cdnfonts.com/s/92806/SF-Pro-Display-Semibold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.cdnfonts.com/s/92806/SF-Pro-Display-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body
        className="antialiased min-h-screen bg-background font-sans sf-pro-display-optimized"
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          
          {/* Main content area */}
          <main className="flex-1">
            {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  );
}
