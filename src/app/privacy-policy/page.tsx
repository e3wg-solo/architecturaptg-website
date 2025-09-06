'use client';

import { FadeInUp } from "@/components/animations";
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
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
                Политика конфиденциальности
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Информация о том, как мы собираем, используем и защищаем ваши персональные данные
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
                    <h2 className="text-2xl font-bold text-foreground mb-4">1. Общие положения</h2>
                    <p>
                      Настоящая Политика конфиденциальности определяет порядок обработки персональных данных 
                      и меры по обеспечению безопасности персональных данных в Студии эстетики лица и тела «Архитектура» 
                      (далее — «Оператор») с целью защиты прав и свобод человека и гражданина при обработке его персональных данных, 
                      в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">2. Основные понятия</h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Персональные данные</strong> — любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).</li>
                      <li><strong>Обработка персональных данных</strong> — любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными.</li>
                      <li><strong>Конфиденциальность персональных данных</strong> — обязательное для соблюдения Оператором или иным получившим доступ к персональным данным лицом требование не допускать их распространения без согласия субъекта персональных данных или наличия иного законного основания.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">3. Принципы обработки персональных данных</h2>
                    <p>Обработка персональных данных осуществляется на основе следующих принципов:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Законности целей и способов обработки персональных данных;</li>
                      <li>Добросовестности;</li>
                      <li>Соответствия целей обработки персональных данных целям, заранее определенным и заявленным при сборе персональных данных;</li>
                      <li>Соответствия объема и характера обрабатываемых персональных данных, способов обработки персональных данных целям обработки персональных данных;</li>
                      <li>Недопустимости объединения созданных для несовместимых между собой целей баз данных, содержащих персональные данные.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">4. Цели обработки персональных данных</h2>
                    <p>Персональные данные обрабатываются в следующих целях:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Предоставление услуг салона красоты;</li>
                      <li>Ведение клиентской базы;</li>
                      <li>Информирование о новых услугах и акциях;</li>
                      <li>Обратная связь с клиентами;</li>
                      <li>Исполнение договорных обязательств.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">5. Категории персональных данных</h2>
                    <p>Оператор обрабатывает следующие категории персональных данных:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Фамилия, имя, отчество;</li>
                      <li>Номер телефона;</li>
                      <li>Адрес электронной почты;</li>
                      <li>Информация о предпочтениях в услугах;</li>
                      <li>История посещений.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">6. Права субъекта персональных данных</h2>
                    <p>Субъект персональных данных имеет право:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>На получение информации об обработке его персональных данных;</li>
                      <li>На уточнение, блокирование или уничтожение его персональных данных;</li>
                      <li>На отзыв согласия на обработку персональных данных;</li>
                      <li>На обжалование действий или бездействия Оператора.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">7. Меры по защите персональных данных</h2>
                    <p>
                      Оператор принимает необходимые правовые, организационные и технические меры для защиты персональных данных 
                      от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, 
                      предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">8. Контактная информация</h2>
                    <p>
                      По всем вопросам, касающимся обработки персональных данных, Вы можете обратиться к нам:
                    </p>
                    <ul className="list-none space-y-2">
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