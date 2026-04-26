import type { Metadata } from 'next';
import WasteCodesClient from './WasteCodesClient';

export const metadata: Metadata = {
  title: 'Atık Kodları | ECOREN',
  description: 'Tehlikeli atık kodları grupları, kod açıklamaları ve sınıflandırma tablosu.',
};

export default function WasteCodesPage() {
  return (
    <main className="min-h-screen bg-light">
      <WasteCodesClient />
    </main>
  );
}
