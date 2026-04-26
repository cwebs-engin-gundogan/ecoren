import type { Metadata } from 'next';
import KurumsalClient from './KurumsalClient';

export const metadata: Metadata = {
  title: 'Kurumsal',
  description: 'ECOREN hakkında; kuruluş hikayemiz, ekibimiz, misyon ve vizyonumuz ile temel değerlerimiz.',
  alternates: { canonical: 'https://ecoren.com.tr/kurumsal' },
  openGraph: {
    title: 'Kurumsal | ECOREN',
    description: 'ECOREN hakkında; kuruluş hikayemiz, ekibimiz, misyon ve vizyonumuz ile temel değerlerimiz.',
    url: 'https://ecoren.com.tr/kurumsal',
  },
};

export default function KurumsalPage() {
  return <KurumsalClient />;
}
