import type { Metadata } from 'next';
import WasteCodesClient from './WasteCodesClient';

export const metadata: Metadata = {
  title: 'Atık Kodları | ECOREN',
  description: 'Tehlikeli atık kodları grupları, kod açıklamaları ve sınıflandırma tablosu.',
};

export default function WasteCodesPage() {
  return (
    <main className="min-h-screen bg-light">
      <section className="relative overflow-hidden bg-dark pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(139,195,74,0.20),transparent_38%),radial-gradient(circle_at_top_right,rgba(139,195,74,0.18),transparent_34%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-primary/40" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-primary mb-4">
              Tehlikeli Atık Kodları
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Atık Kodları Listesi
            </h1>
            <p className="font-body text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl">
              Tehlikeli atıkların sınıflandırılması için kullanılan atık kodlarını grup başlıkları,
              kod numaraları ve açıklamalarıyla birlikte inceleyebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <WasteCodesClient />
    </main>
  );
}
