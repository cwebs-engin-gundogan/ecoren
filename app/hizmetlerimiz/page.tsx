import type { Metadata } from 'next';
import HizmetlerimizClient from './HizmetlerimizClient';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz',
  description: 'ECOREN atık yönetimi, geri kazanım, danışmanlık, taşıma, bertaraf ve saha kurulum alanlarında 21 kategoride kapsamlı hizmetler sunar.',
  alternates: { canonical: 'https://ecoren.com.tr/hizmetlerimiz' },
  openGraph: {
    title: 'Hizmetlerimiz | ECOREN',
    description: 'ECOREN atık yönetimi, geri kazanım ve çevre mühendisliği alanlarında 21 kategoride kapsamlı hizmetler sunar.',
    url: 'https://ecoren.com.tr/hizmetlerimiz',
  },
};

export default function HizmetlerimizPage() {
  return <HizmetlerimizClient />;
}
