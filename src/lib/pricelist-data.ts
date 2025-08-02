export type PriceItem = {
  categoryId: string;
  categoryName: string;
  name: string;
  price: string;
  duration?: string;
};

export const pricelistData: PriceItem[] = [
  // Косметология эстетическая
  {
    categoryId: 'aesthetic-cosmetology',
    categoryName: 'Косметология эстетическая',
    name: 'Чистка лица классическая',
    price: '2500 ₽',
    duration: '60 мин'
  },
  {
    categoryId: 'aesthetic-cosmetology',
    categoryName: 'Косметология эстетическая',
    name: 'Чистка лица ультразвуковая',
    price: '3000 ₽',
    duration: '60 мин'
  },
  {
    categoryId: 'aesthetic-cosmetology',
    categoryName: 'Косметология эстетическая',
    name: 'Пилинг фруктовый',
    price: '2000 ₽',
    duration: '45 мин'
  },
  {
    categoryId: 'aesthetic-cosmetology',
    categoryName: 'Косметология эстетическая',
    name: 'Маска увлажняющая',
    price: '1500 ₽',
    duration: '30 мин'
  },
  {
    categoryId: 'aesthetic-cosmetology',
    categoryName: 'Косметология эстетическая',
    name: 'Массаж лица',
    price: '1800 ₽',
    duration: '30 мин'
  },

  // Косметология аппаратная
  {
    categoryId: 'hardware-cosmetology',
    categoryName: 'Косметология аппаратная',
    name: 'RF-лифтинг лица',
    price: '4000 ₽',
    duration: '60 мин'
  },
  {
    categoryId: 'hardware-cosmetology',
    categoryName: 'Косметология аппаратная',
    name: 'Ультразвуковая чистка',
    price: '3500 ₽',
    duration: '60 мин'
  },
  {
    categoryId: 'hardware-cosmetology',
    categoryName: 'Косметология аппаратная',
    name: 'Микротоки',
    price: '2500 ₽',
    duration: '45 мин'
  },
  {
    categoryId: 'hardware-cosmetology',
    categoryName: 'Косметология аппаратная',
    name: 'Дарсонваль',
    price: '1200 ₽',
    duration: '20 мин'
  },

  // Парикмахерский зал
  {
    categoryId: 'hairdressing',
    categoryName: 'Парикмахерский зал',
    name: 'Стрижка женская',
    price: '2500 ₽',
    duration: '60 мин'
  },
  {
    categoryId: 'hairdressing',
    categoryName: 'Парикмахерский зал',
    name: 'Стрижка мужская',
    price: '1500 ₽',
    duration: '30 мин'
  },
  {
    categoryId: 'hairdressing',
    categoryName: 'Парикмахерский зал',
    name: 'Окрашивание волос',
    price: '4000 ₽',
    duration: '120 мин'
  },
  {
    categoryId: 'hairdressing',
    categoryName: 'Парикмахерский зал',
    name: 'Укладка',
    price: '2000 ₽',
    duration: '45 мин'
  },
  {
    categoryId: 'hairdressing',
    categoryName: 'Парикмахерский зал',
    name: 'Ламинирование',
    price: '5000 ₽',
    duration: '90 мин'
  },

  // Ногтевой сервис
  {
    categoryId: 'nail-service',
    categoryName: 'Ногтевой сервис',
    name: 'Маникюр классический',
    price: '1500 ₽',
    duration: '45 мин'
  },
  {
    categoryId: 'nail-service',
    categoryName: 'Ногтевой сервис',
    name: 'Маникюр аппаратный',
    price: '2000 ₽',
    duration: '45 мин'
  },
  {
    categoryId: 'nail-service',
    categoryName: 'Ногтевой сервис',
    name: 'Педикюр классический',
    price: '2500 ₽',
    duration: '60 мин'
  },
  {
    categoryId: 'nail-service',
    categoryName: 'Ногтевой сервис',
    name: 'Покрытие гель-лак',
    price: '2500 ₽',
    duration: '60 мин'
  },
  {
    categoryId: 'nail-service',
    categoryName: 'Ногтевой сервис',
    name: 'Наращивание ногтей',
    price: '3500 ₽',
    duration: '90 мин'
  },

  // Массаж
  {
    categoryId: 'massage',
    categoryName: 'Массаж',
    name: 'Массаж классический',
    price: '3000 ₽',
    duration: '60 мин'
  },
  {
    categoryId: 'massage',
    categoryName: 'Массаж',
    name: 'Массаж расслабляющий',
    price: '3500 ₽',
    duration: '60 мин'
  },
  {
    categoryId: 'massage',
    categoryName: 'Массаж',
    name: 'Массаж антицеллюлитный',
    price: '4000 ₽',
    duration: '60 мин'
  },
  {
    categoryId: 'massage',
    categoryName: 'Массаж',
    name: 'Массаж спины',
    price: '2500 ₽',
    duration: '45 мин'
  },

  // Брови и ресницы
  {
    categoryId: 'eyebrows-lashes',
    categoryName: 'Брови и ресницы',
    name: 'Коррекция бровей',
    price: '1000 ₽',
    duration: '30 мин'
  },
  {
    categoryId: 'eyebrows-lashes',
    categoryName: 'Брови и ресницы',
    name: 'Окрашивание бровей',
    price: '1200 ₽',
    duration: '30 мин'
  },
  {
    categoryId: 'eyebrows-lashes',
    categoryName: 'Брови и ресницы',
    name: 'Наращивание ресниц',
    price: '3500 ₽',
    duration: '120 мин'
  },
  {
    categoryId: 'eyebrows-lashes',
    categoryName: 'Брови и ресницы',
    name: 'Коррекция ресниц',
    price: '2000 ₽',
    duration: '60 мин'
  },

  // Татуаж
  {
    categoryId: 'tattoo',
    categoryName: 'Татуаж',
    name: 'Татуаж бровей',
    price: '8000 ₽',
    duration: '120 мин'
  },
  {
    categoryId: 'tattoo',
    categoryName: 'Татуаж',
    name: 'Татуаж губ',
    price: '10000 ₽',
    duration: '120 мин'
  },
  {
    categoryId: 'tattoo',
    categoryName: 'Татуаж',
    name: 'Татуаж век',
    price: '12000 ₽',
    duration: '120 мин'
  },

  // Макияж
  {
    categoryId: 'makeup',
    categoryName: 'Макияж',
    name: 'Дневной макияж',
    price: '2500 ₽',
    duration: '45 мин'
  },
  {
    categoryId: 'makeup',
    categoryName: 'Макияж',
    name: 'Вечерний макияж',
    price: '3500 ₽',
    duration: '60 мин'
  },
  {
    categoryId: 'makeup',
    categoryName: 'Макияж',
    name: 'Свадебный макияж',
    price: '5000 ₽',
    duration: '90 мин'
  },

  // Солярий
  {
    categoryId: 'solarium',
    categoryName: 'Солярий',
    name: 'Солярий вертикальный',
    price: '200 ₽',
    duration: '10 мин'
  },
  {
    categoryId: 'solarium',
    categoryName: 'Солярий',
    name: 'Солярий горизонтальный',
    price: '250 ₽',
    duration: '10 мин'
  }
];

export function getPricelistData(): PriceItem[] {
  return pricelistData;
} 