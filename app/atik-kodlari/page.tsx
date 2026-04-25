import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ArrowUpRight, ClipboardList, Layers3, Search } from 'lucide-react';
import { hazardousWasteCodeGroups, totalHazardousWasteCodes } from '@/data/waste-codes';

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

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl">
            <div className="border border-white/10 bg-white/5 p-5">
              <Layers3 className="text-primary mb-4" size={22} />
              <p className="font-heading text-3xl font-black text-white">{hazardousWasteCodeGroups.length}</p>
              <p className="font-body text-sm text-white/55">Atık kodu grubu</p>
            </div>
            <div className="border border-white/10 bg-white/5 p-5">
              <ClipboardList className="text-primary mb-4" size={22} />
              <p className="font-heading text-3xl font-black text-white">{totalHazardousWasteCodes}+</p>
              <p className="font-body text-sm text-white/55">Kod ve açıklama</p>
            </div>
            <div className="border border-white/10 bg-white/5 p-5">
              <AlertTriangle className="text-primary mb-4" size={22} />
              <p className="font-heading text-3xl font-black text-white">*</p>
              <p className="font-body text-sm text-white/55">Tehlikeli atık işareti</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-10 items-start">
            <aside className="lg:sticky lg:top-24">
              <div className="bg-surface-container border border-dark/10 p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-5">
                  <Search size={18} className="text-primary-deep" />
                  <h2 className="font-heading text-lg font-bold text-text-main">Grup Seçimi</h2>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-4 gap-2">
                  {hazardousWasteCodeGroups.map((group) => (
                    <a
                      key={group.group}
                      href={`#atik-${group.group}`}
                      className="h-11 flex items-center justify-center border border-dark/10 bg-light font-heading text-sm font-bold text-text-main hover:border-primary hover:bg-primary hover:text-dark transition-colors"
                    >
                      {group.group}
                    </a>
                  ))}
                </div>
                <p className="mt-5 font-body text-sm leading-relaxed text-text-muted">
                  Her satırdaki yıldız işareti, atığın tehlikeli atık kapsamında değerlendirilmesi gerektiğini belirtir.
                </p>
              </div>

              <Link
                href="/bize-ulasin"
                className="mt-4 flex items-center justify-between bg-dark px-5 py-4 font-heading text-sm font-bold uppercase tracking-widest text-white hover:text-primary transition-colors"
              >
                Danışmanlık Al
                <ArrowUpRight size={18} />
              </Link>
            </aside>

            <div className="space-y-7">
              {hazardousWasteCodeGroups.map((group) => (
                <section
                  key={group.group}
                  id={`atik-${group.group}`}
                  className="scroll-mt-24 overflow-hidden border border-dark/10 bg-white shadow-sm"
                >
                  <div className="bg-dark px-4 py-4 sm:px-6 sm:py-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-primary">
                          {group.group} Atık Kodu
                        </p>
                        <h2 className="mt-2 font-heading text-xl sm:text-2xl font-bold text-white leading-snug">
                          {group.title}
                        </h2>
                      </div>
                      <span className="shrink-0 border border-primary/35 px-3 py-2 font-heading text-xs font-bold uppercase tracking-widest text-primary">
                        {group.items.length} Kod
                      </span>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                      <thead>
                        <tr className="bg-surface-muted">
                          <th className="w-32 px-4 py-3 sm:px-6 font-heading text-xs font-bold uppercase tracking-widest text-text-main">
                            Kod
                          </th>
                          <th className="px-4 py-3 sm:px-6 font-heading text-xs font-bold uppercase tracking-widest text-text-main">
                            Açıklama
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {group.items.map((item) => (
                          <tr key={item.code} className="border-t border-dark/10 odd:bg-white even:bg-light/70">
                            <td className="whitespace-nowrap px-4 py-4 sm:px-6 align-top font-heading text-sm font-black text-primary-deep">
                              {item.code}
                            </td>
                            <td className="px-4 py-4 sm:px-6 align-top font-body text-sm sm:text-base leading-relaxed text-text-muted">
                              {item.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
