'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Filter, Search, X } from 'lucide-react';
import { hazardousWasteCodeGroups } from '@/data/waste-codes';

export default function WasteCodesClient() {
  const [query, setQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [hazardousOnly, setHazardousOnly] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return hazardousWasteCodeGroups
      .filter((g) => !selectedGroup || g.group === selectedGroup)
      .map((g) => ({
        ...g,
        items: g.items.filter((item) => {
          if (hazardousOnly && !item.code.includes('*')) return false;
          if (!q) return true;
          return item.code.toLowerCase().includes(q) || item.description.toLowerCase().includes(q);
        }),
      }))
      .filter((g) => g.items.length > 0);
  }, [query, selectedGroup, hazardousOnly]);

  const totalItems = filtered.reduce((s, g) => s + g.items.length, 0);
  const hasActiveFilter = query || selectedGroup || hazardousOnly;

  const clearAll = () => {
    setQuery('');
    setSelectedGroup(null);
    setHazardousOnly(false);
  };

  return (
    <>
      {/* ── Search band ── */}
      <div className="bg-white border-b border-dark/10 py-6 sm:py-8">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-3xl mx-auto">
            <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Kod veya açıklama ile ara… örn: 01 03, yağ, solvent"
              className="w-full border-2 border-dark/15 bg-light pl-14 pr-12 py-4 font-body text-base text-text-main placeholder-text-muted focus:outline-none focus:border-primary transition-colors rounded-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Aramayı temizle"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center text-text-muted hover:text-text-main transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>
          {query && (
            <p className="text-center mt-3 font-body text-sm text-text-muted">
              <span className="font-semibold text-text-main">{totalItems}</span> sonuç bulundu
              {' · '}
              <button onClick={() => setQuery('')} className="text-primary hover:underline">temizle</button>
            </p>
          )}
        </div>
      </div>

      <section className="py-10 sm:py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-10 items-start">
          {/* Sidebar filters */}
          <aside className="lg:sticky lg:top-24 space-y-4">
            {/* Group filter */}
            <div className="bg-white border border-dark/10 p-5">
              <div className="flex items-center gap-2 mb-4">
                <Filter size={16} className="text-primary" />
                <h2 className="font-heading text-sm font-bold text-text-main uppercase tracking-widest">Grup Filtresi</h2>
              </div>
              <div className="grid grid-cols-4 gap-1.5 mb-3">
                <button
                  onClick={() => setSelectedGroup(null)}
                  className={`h-10 col-span-4 flex items-center justify-center font-heading text-xs font-bold uppercase tracking-wide transition-colors border
                    ${!selectedGroup ? 'bg-primary text-dark border-primary' : 'bg-light text-text-main border-dark/10 hover:border-primary hover:text-primary'}`}
                >
                  Tüm Gruplar
                </button>
                {hazardousWasteCodeGroups.map((g) => (
                  <button
                    key={g.group}
                    onClick={() => setSelectedGroup(selectedGroup === g.group ? null : g.group)}
                    title={g.title}
                    className={`h-10 flex items-center justify-center font-heading text-sm font-bold transition-colors border
                      ${selectedGroup === g.group ? 'bg-primary text-dark border-primary' : 'bg-light text-text-main border-dark/10 hover:border-primary hover:text-primary'}`}
                  >
                    {g.group}
                  </button>
                ))}
              </div>
            </div>

            {/* Hazardous toggle */}
            <div className="bg-white border border-dark/10 p-5">
              <h2 className="font-heading text-sm font-bold text-text-main uppercase tracking-widest mb-4">Tip Filtresi</h2>
              <button
                onClick={() => setHazardousOnly(!hazardousOnly)}
                className={`w-full flex items-center justify-between border px-4 py-3 font-heading text-sm font-semibold transition-colors
                  ${hazardousOnly ? 'bg-primary/10 border-primary text-primary' : 'bg-light border-dark/10 text-text-muted hover:border-primary hover:text-primary'}`}
              >
                <span>Sadece tehlikeli (*)</span>
                <span className={`w-4 h-4 border-2 flex items-center justify-center shrink-0 transition-colors ${hazardousOnly ? 'border-primary bg-primary' : 'border-dark/20'}`}>
                  {hazardousOnly && <X size={10} className="text-dark" />}
                </span>
              </button>
            </div>

            {/* Result count + clear */}
            <div className="bg-dark/5 border border-dark/10 px-5 py-4 flex items-center justify-between">
              <span className="font-body text-sm text-text-muted">
                <span className="font-heading font-bold text-text-main">{totalItems}</span> sonuç
              </span>
              {hasActiveFilter && (
                <button
                  onClick={clearAll}
                  className="flex items-center gap-1.5 font-heading text-xs font-semibold uppercase tracking-wide text-primary hover:underline"
                >
                  <X size={12} /> Temizle
                </button>
              )}
            </div>

            {/* CTA */}
            <Link
              href="/bize-ulasin"
              className="flex items-center justify-between bg-dark px-5 py-4 font-heading text-sm font-bold uppercase tracking-widest text-white hover:text-primary transition-colors"
            >
              Danışmanlık Al
              <ArrowUpRight size={18} />
            </Link>
          </aside>

          {/* Results */}
          <div>
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center border border-dark/10 bg-white">
                <Search size={40} className="text-dark/20 mb-4" />
                <p className="font-heading text-lg font-semibold text-text-main mb-2">Sonuç bulunamadı</p>
                <p className="font-body text-sm text-text-muted mb-6">Farklı bir arama terimi veya filtre kombinasyonu deneyin.</p>
                <button onClick={clearAll} className="font-heading text-sm font-semibold text-primary hover:underline">
                  Filtreleri temizle
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {filtered.map((group) => (
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
                          <h3 className="mt-2 font-heading text-lg sm:text-2xl font-bold text-white leading-snug">
                            {group.title}
                          </h3>
                        </div>
                        <span className="shrink-0 border border-primary/35 px-3 py-2 font-heading text-xs font-bold uppercase tracking-widest text-primary">
                          {group.items.length} Kod
                        </span>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse text-left">
                        <thead>
                          <tr className="bg-dark/5">
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
                            <tr key={item.code} className="border-t border-dark/10 odd:bg-white even:bg-light/60">
                              <td className="whitespace-nowrap px-4 py-3.5 sm:px-6 align-top font-heading text-sm font-black text-primary-deep">
                                {item.code}
                              </td>
                              <td className="px-4 py-3.5 sm:px-6 align-top font-body text-sm leading-relaxed text-text-muted">
                                <Highlight text={item.description} query={query} />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const q = query.trim();
  const idx = text.toLowerCase().indexOf(q.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-primary/20 text-text-main rounded-sm">{text.slice(idx, idx + q.length)}</mark>
      {text.slice(idx + q.length)}
    </>
  );
}
