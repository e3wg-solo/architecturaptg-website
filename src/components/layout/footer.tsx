import Link from "next/link";
import { Phone, MapPin, Mail, Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                <span className="text-lg font-bold text-white">T</span>
              </div>
              <span className="font-bold text-xl">TOPICONIC</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Премиальный бьюти & спа салон в сердце города. Мы создаем уникальные образы и заботимся о вашей красоте с 2020 года.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-brand-primary" />
                <span className="text-muted-foreground">ул. Пушкина, 15, Москва</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-primary" />
                <Link 
                  href="tel:+74951234567" 
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  +7 (495) 123-45-67
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-primary" />
                <Link 
                  href="mailto:info@topiconic.ru" 
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  info@topiconic.ru
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link 
                href="https://instagram.com" 
                className="text-muted-foreground hover:text-brand-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="https://facebook.com" 
                className="text-muted-foreground hover:text-brand-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link 
                href="https://youtube.com" 
                className="text-muted-foreground hover:text-brand-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link 
                  href="/price" 
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  Цены
                </Link>
              </li>
              <li>
                <Link 
                  href="/#contacts" 
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground">
                  Косметология
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  Парикмахерские услуги
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  Ногтевой сервис
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  Массаж и СПА
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  Визаж и брови
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2020-2025 TOPICONIC бьюти & спа. Все права защищены.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link 
                href="/privacy-policy" 
                className="text-muted-foreground hover:text-brand-primary transition-colors"
              >
                Политика конфиденциальности
              </Link>
              <Link 
                href="/personal-data-consent" 
                className="text-muted-foreground hover:text-brand-primary transition-colors"
              >
                Согласие на обработку персональных данных
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 