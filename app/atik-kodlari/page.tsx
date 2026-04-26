import type { Metadata } from 'next';
import WasteCodesClient from './WasteCodesClient';

export const metadata: Metadata = {
  title: 'Atık Kodları ve Tehlikeli Atık Sınıflandırması',
  description:
    'Tehlikeli atık kodları, atık sınıflandırması, kod açıklamaları ve endüstriyel atık yönetimi için atık kodu arama tablosu.',
  keywords: [
    'atık kodları',
    'tehlikeli atık kodları',
    'atık sınıflandırması',
    'atık kodu arama',
    'endüstriyel atık kodları',
    'tehlikeli atık yönetimi',
  ],
  alternates: { canonical: 'https://ecoren.com.tr/atik-kodlari' },
  openGraph: {
    title: 'Atık Kodları ve Tehlikeli Atık Sınıflandırması | ECOREN',
    description: 'Tehlikeli atık kodlarını grup başlıkları, kod numaraları ve açıklamalarıyla inceleyin.',
    url: 'https://ecoren.com.tr/atik-kodlari',
  },
};

export default function WasteCodesPage() {
  return (
    <main className="min-h-screen bg-light">
      <WasteCodesClient />
    </main>
  );
}
