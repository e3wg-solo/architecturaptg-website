import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logos/archri.webp"
                alt="Архитектура"
                width={300}
                height={300}
                className="h-18 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
            Студия эстетики лица и тела Архитектура - ваш путь к совершенству. Профессиональная косметология, массажи лица и тела, маникюр и педикюр, SPA-программы и коррекция фигуры в Пятигорске.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-brand-primary" />
                <Link 
                  href="https://yandex.ru/maps/-/CLEKuY4B" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  г. Пятигорск, ул. Розы Люксембург, 72А
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-primary" />
                <Link 
                  href="tel:+79340395909" 
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  +7 (934) 039-59-09
                </Link>
              </div>

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
                <Link 
                  href="/price?service=cosmetology"
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  Косметология
                </Link>
              </li>
              <li>
                <Link 
                  href="/price?service=body-massage"
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  Массажи тела
                </Link>
              </li>
              <li>
                <Link 
                  href="/price?service=face-massage"
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  Массажи лица
                </Link>
              </li>
              <li>
                <Link 
                  href="/price?service=men-massage"
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  Массажи для мужчин
                </Link>
              </li>
              <li>
                <Link 
                  href="/price?service=apparatus-face"
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  Аппаратные процедуры для лица
                </Link>
              </li>
              <li>
                <Link 
                  href="/price?service=apparatus-body"
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  Аппаратные процедуры для тела
                </Link>
              </li>
              <li>
                <Link 
                  href="/price?service=manicure-pedicure"
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  Маникюр и педикюр
                </Link>
              </li>
              <li>
                <Link 
                  href="/price?service=spa"
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  SPA-программы
                </Link>
              </li>
              <li>
                <Link 
                  href="/price?service=figure-correction"
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  Коррекция фигуры
                </Link>
              </li>
              <li>
                <Link 
                  href="/price?service=figure-correction-courses"
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  Курсы коррекции фигуры
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024-2025 Архитектура. Студия эстетики лица и тела. Все права защищены.
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