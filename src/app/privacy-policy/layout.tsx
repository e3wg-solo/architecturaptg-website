import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Политика конфиденциальности - Студия Архитектура",
  description: "Политика конфиденциальности Студии эстетики лица и тела Архитектура. Информация о том, как мы собираем, используем и защищаем ваши персональные данные.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
