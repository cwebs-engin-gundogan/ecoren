import type { Metadata } from 'next';
import BizeUlasinClient from './BizeUlasinClient';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Atık yönetimi hizmetlerimiz hakkında bilgi almak veya teklif talep etmek için ECOREN ile iletişime geçin.',
  alternates: { canonical: 'https://ecoren.com.tr/bize-ulasin' },
  openGraph: {
    title: 'Bize Ulaşın | ECOREN',
    description: 'Atık yönetimi hizmetlerimiz hakkında bilgi almak veya teklif talep etmek için ECOREN ile iletişime geçin.',
    url: 'https://ecoren.com.tr/bize-ulasin',
  },
};

export default function BizeUlasinPage() {
  return <BizeUlasinClient />;
}
