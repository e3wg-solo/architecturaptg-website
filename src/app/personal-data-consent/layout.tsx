import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Согласие на обработку персональных данных - Студия Архитектура",
  description: "Согласие на обработку персональных данных в Студии эстетики лица и тела Архитектура. Информация о правах субъектов персональных данных.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PersonalDataConsentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
