import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="https://i.ibb.co/b59ZnSHN/topiconic-eng-gold-1.png"
                alt="Topiconic"
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl">TOPICONIC</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
            Премиальный бьюти & спа салон рядом с вами. Создаём индивидуальные образы и заботимся о вашей красоте с 2020 года.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-brand-primary" />
                <Link 
                  href="https://yandex.ru/maps/org/topiconic/219819522730/?ll=37.613785%2C55.529398&z=15" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  ул.Крымская, 19к1, рабочий посёлок Боброво, Москва
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-primary" />
                <Link 
                  href="tel:+79937775559" 
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  +7 (993) 777-55-59
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
                  href="/price?service=aesthetic-cosmetology"
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  Косметология эстетическая
                </Link>
              </li>
              <li>
                <Link 
                  href="/price?service=hardware-cosmetology"
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  Косметология аппаратная
                </Link>
              </li>
              <li>
                <Link 
                  href="/price?service=hairdressing"
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  Парикмахерский зал
                </Link>
              </li>
              <li>
                <Link 
                  href="/price?service=nail-service"
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  Ногтевой сервис
                </Link>
              </li>
              <li>
                <Link 
                  href="/price?service=massage"
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  Массаж
                </Link>
              </li>
              <li>
                <Link 
                  href="/price?service=eyebrows-lashes"
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  Брови и ресницы
                </Link>
              </li>
              <li>
                <Link 
                  href="/price?service=tattoo"
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  Татуаж
                </Link>
              </li>
              <li>
                <Link 
                  href="/price?service=makeup"
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  Макияж
                </Link>
              </li>
              <li>
                <Link 
                  href="/price?service=solarium"
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  Солярий
                </Link>
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