export const fallbackPrices: { [key: string]: { name: string; price: string; duration?: string }[] } = {
  'aesthetic-cosmetology': [
    { name: 'Чистка лица', price: '3 500 ₽', duration: '90 мин' },
    { name: 'Пилинг химический', price: '2 500 ₽', duration: '60 мин' },
    { name: 'Уход за кожей лица', price: '2 000 ₽', duration: '60 мин' },
    { name: 'Мезотерапия', price: '4 500 ₽', duration: '45 мин' },
    { name: 'Биоревитализация', price: '6 000 ₽', duration: '60 мин' },
  ],
  'hardware-cosmetology': [
    { name: 'Лазерная эпиляция', price: '1 500 ₽', duration: '30-90 мин' },
    { name: 'Фотоомоложение', price: '5 000 ₽', duration: '60 мин' },
    { name: 'RF-лифтинг', price: '3 500 ₽', duration: '45 мин' },
    { name: 'Ультразвуковая чистка', price: '2 500 ₽', duration: '60 мин' },
  ],
  'hairdressing': [
    { name: 'Стрижка женская', price: '1 800 ₽', duration: '60 мин' },
    { name: 'Стрижка мужская', price: '1 200 ₽', duration: '40 мин' },
    { name: 'Окрашивание', price: '3 500 ₽', duration: '120-180 мин' },
    { name: 'Укладка', price: '1 500 ₽', duration: '45 мин' },
  ],
  'nail-service': [
    { name: 'Маникюр с покрытием', price: '2 500 ₽', duration: '90 мин' },
    { name: 'Педикюр с покрытием', price: '3 500 ₽', duration: '120 мин' },
    { name: 'Наращивание ногтей', price: '3 000 ₽', duration: '120 мин' },
    { name: 'Дизайн ногтей', price: '500 ₽', duration: '30 мин' },
  ],
  'massage': [
    { name: 'Расслабляющий', price: '3 500 ₽', duration: '60 мин' },
    { name: 'Антицеллюлитный', price: '4 000 ₽', duration: '90 мин' },
    { name: 'Лимфодренажный', price: '4 500 ₽', duration: '90 мин' },
    { name: 'Спортивный', price: '3 800 ₽', duration: '60 мин' },
  ],
  'eyebrows-lashes': [
    { name: 'Коррекция бровей', price: '1 200 ₽', duration: '45 мин' },
    { name: 'Наращивание ресниц', price: '2 800 ₽', duration: '120 мин' },
    { name: 'Ламинирование ресниц', price: '2 500 ₽', duration: '90 мин' },
    { name: 'Окрашивание бровей', price: '800 ₽', duration: '30 мин' },
  ],
  'tattoo': [
    { name: 'Татуаж бровей', price: '8 000 ₽', duration: '180 мин' },
    { name: 'Татуаж губ', price: '10 000 ₽', duration: '180 мин' },
    { name: 'Татуаж век', price: '7 000 ₽', duration: '120 мин' },
    { name: 'Коррекция татуажа', price: '3 000 ₽', duration: '90 мин' },
  ],
  'makeup': [
    { name: 'Дневной макияж', price: '2 500 ₽', duration: '60 мин' },
    { name: 'Вечерний макияж', price: '3 500 ₽', duration: '90 мин' },
    { name: 'Свадебный макияж', price: '5 000 ₽', duration: '120 мин' },
    { name: 'Урок макияжа', price: '4 000 ₽', duration: '120 мин' },
  ],
  'solarium': [
    { name: 'Вертикальный солярий', price: '100 ₽/мин', duration: '5-12 мин' },
    { name: 'Горизонтальный солярий', price: '80 ₽/мин', duration: '8-15 мин' },
    { name: 'Турбо-солярий', price: '120 ₽/мин', duration: '3-8 мин' },
    { name: 'Абонемент на месяц', price: '3 500 ₽', duration: 'безлимит' },
  ],
}; 