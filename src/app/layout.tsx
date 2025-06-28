import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  description: "Professional website built with Next.js, TypeScript, Tailwind CSS, and modern web technologies",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Web Development"],
  authors: [{ name: "Topiconic Team" }],
  creator: "Topiconic",
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://topiconic.com' : 'http://localhost:3000'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NODE_ENV === 'production' ? 'https://topiconic.com' : 'http://localhost:3000',
    title: "Topiconic",
    description: "Professional website built with Next.js, TypeScript, Tailwind CSS, and modern web technologies",
    siteName: "Topiconic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Topiconic",
    description: "Professional website built with Next.js, TypeScript, Tailwind CSS, and modern web technologies",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            
            {/* Main content area */}
            <main className="flex-1">
              {children}
            </main>
            
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
