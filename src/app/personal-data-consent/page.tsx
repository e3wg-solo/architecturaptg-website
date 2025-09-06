'use client';

import { FadeInUp } from "@/components/animations";
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PersonalDataConsentPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-background via-background to-accent/10 pt-5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <div className="flex items-center gap-4 mb-8">
                <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <ArrowLeft className="h-5 w-5" />
                  Назад на главную
                </Link>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Согласие на обработку персональных данных
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Информация о согласии на обработку персональных данных в Студии Архитектура
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Согласие на обработку персональных данных</h2>
                    <p>
                      Настоящим в соответствии с Федеральным законом № 152-ФЗ «О персональных данных» от 27.07.2006 года 
                      свободно, своей волей и в своем интересе выражаю свое безусловное согласие на обработку моих персональных данных 
                      Студией эстетики лица и тела «Архитектура», зарегистрированной в соответствии с законодательством РФ 
                      по адресу: г. Пятигорск, ул. Розы Люксембург, 72А (далее по тексту - Оператор).
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-foreground mb-3">Персональные данные, на обработку которых дается согласие субъекта персональных данных:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Фамилия, имя, отчество;</li>
                      <li>Дата рождения;</li>
                      <li>Номер телефона;</li>
                      <li>Адрес электронной почты;</li>
                      <li>Информация о предпочтениях в услугах;</li>
                      <li>История посещений и оказанных услуг.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-foreground mb-3">Цели обработки персональных данных:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Предоставление услуг салона красоты;</li>
                      <li>Ведение клиентской базы данных;</li>
                      <li>Информирование о новых услугах, акциях и специальных предложениях;</li>
                      <li>Осуществление обратной связи с клиентами;</li>
                      <li>Исполнение договорных обязательств;</li>
                      <li>Анализ качества оказываемых услуг.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-foreground mb-3">Способы обработки персональных данных:</h3>
                    <p>
                      Оператор производит обработку персональных данных как без использования средств автоматизации, 
                      так и с их использованием, включая сбор, запись, систематизацию, накопление, хранение, 
                      уточнение (обновление, изменение), извлечение, использование, передачу (предоставление, доступ), 
                      обезличивание, блокирование, удаление, уничтожение персональных данных.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-foreground mb-3">Срок обработки персональных данных:</h3>
                    <p>
                      Обработка персональных данных может осуществляться в течение всего периода пользования услугами Оператора 
                      и в течение 5 (пяти) лет после прекращения пользования услугами.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-foreground mb-3">Права субъекта персональных данных:</h3>
                    <p>Субъект персональных данных имеет право:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Отозвать согласие на обработку персональных данных;</li>
                      <li>Требовать уточнения своих персональных данных, их блокирования или уничтожения;</li>
                      <li>Знакомиться с персональными данными, относящимися к данному субъекту персональных данных;</li>
                      <li>Требовать исключения или исправления неточных или неполных персональных данных;</li>
                      <li>Обжаловать действия или бездействие Оператора в уполномоченный орган по защите прав субъектов персональных данных или в судебном порядке.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-foreground mb-3">Отзыв согласия:</h3>
                    <p>
                      Данное согласие может быть отозвано субъектом персональных данных или его представителем путем направления 
                      письменного заявления Оператору по адресу: г. Пятигорск, ул. Розы Люксембург, 72А или по телефону +7 (928) 716-70-38.
                    </p>
                  </section>

                  <section className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-foreground mb-3">Контактная информация:</h3>
                    <ul className="list-none space-y-2">
                      <li><strong>Наименование:</strong> Студия эстетики лица и тела «Архитектура»</li>
                      <li><strong>Адрес:</strong> г. Пятигорск, ул. Розы Люксембург, 72А</li>
                      <li><strong>Телефон:</strong> +7 (928) 716-70-38</li>
                    </ul>
                  </section>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </div>
  );
} 