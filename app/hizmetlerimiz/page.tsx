import type { Metadata } from 'next';
import HizmetlerimizClient from './HizmetlerimizClient';
import { seoKeywords } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Atık Yönetimi ve Geri Kazanım Hizmetleri',
  description:
    'ECOREN; entegre atık yönetimi, çevre danışmanlığı, tehlikeli ve tehlikesiz atık geri kazanımı, atık taşıma ve bertaraf hizmetleri sunar.',
  keywords: seoKeywords,
  alternates: { canonical: 'https://ecoren.com.tr/hizmetlerimiz' },
  openGraph: {
    title: 'Atık Yönetimi ve Geri Kazanım Hizmetleri | ECOREN',
    description:
      'Tehlikeli atık, tehlikesiz atık, atık yağ, elektronik atık, ÖTA, ÖTL, kimyasal atık bertarafı ve çevre danışmanlığı hizmetleri.',
    url: 'https://ecoren.com.tr/hizmetlerimiz',
  },
};

export default function HizmetlerimizPage() {
  return <HizmetlerimizClient />;
}
