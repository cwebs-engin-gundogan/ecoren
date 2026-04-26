import type { Metadata } from 'next';
import BizeUlasinClient from './BizeUlasinClient';

export const metadata: Metadata = {
  title: 'Atık Yönetimi Teklif ve İletişim',
  description:
    'Atık yönetimi, çevre danışmanlığı, tehlikeli atık, geri kazanım ve bertaraf hizmetleri için ECOREN ile iletişime geçin.',
  keywords: [
    'atık yönetimi teklifi',
    'çevre danışmanlığı iletişim',
    'tehlikeli atık hizmeti',
    'geri kazanım hizmeti',
    'atık bertaraf teklifi',
    'ECOREN iletişim',
  ],
  alternates: { canonical: 'https://ecoren.com.tr/bize-ulasin' },
  openGraph: {
    title: 'Bize Ulaşın | ECOREN',
    description: 'Atık yönetimi ve çevre danışmanlığı hizmetleri için teklif talep edin.',
    url: 'https://ecoren.com.tr/bize-ulasin',
  },
};

export default function BizeUlasinPage() {
  return <BizeUlasinClient />;
}
