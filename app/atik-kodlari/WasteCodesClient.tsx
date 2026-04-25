'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Filter, Search, X } from 'lucide-react';
import { hazardousWasteCodeGroups } from '@/data/waste-codes';

type SearchMode = 'text' | 'group';

export default function WasteCodesClient() {
  const [mode, setMode] = useState<SearchMode>('text');
  const [query, setQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [hazardousOnly, setHazardousOnly] = useState(false);

  const switchMode = (next: SearchMode) => {
    setMode(next);
    if (next === 'text') setSelectedGroup(null);
    if (next === 'group') setQuery('');
  };

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
    <section className="py-10 sm:py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-10 items-start">

          {/* Sidebar — tabs + search/filter + utils */}
          <aside className="lg:sticky lg:top-24 space-y-4">

            {/* Mode tabs */}
            <div className="bg-white border border-dark/10 overflow-hidden">
              <div className="flex border-b border-dark/10">
                <button
                  onClick={() => switchMode('text')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-3 font-heading text-xs font-bold uppercase tracking-wide whitespace-nowrap transition-colors
                    ${mode === 'text' ? 'bg-primary text-dark' : 'text-text-muted hover:text-text-main hover:bg-dark/5'}`}
                >
                  <Search size={13} className="shrink-0" />
                  Metne Göre Ara
                </button>
                <button
                  onClick={() => switchMode('group')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-3 font-heading text-xs font-bold uppercase tracking-wide whitespace-nowrap border-l border-dark/10 transition-colors
                    ${mode === 'group' ? 'bg-primary text-dark' : 'text-text-muted hover:text-text-main hover:bg-dark/5'}`}
                >
                  <Filter size={13} className="shrink-0" />
                  Gruba Göre
                </button>
              </div>

              {/* Text search */}
              {mode === 'text' && (
                <div className="p-4">
                  <div className="relative">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Kod veya açıklama…"
                      autoFocus
                      className="w-full border border-dark/15 bg-light pl-9 pr-8 py-2.5 font-body text-sm text-text-main placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                    />
                    {query && (
                      <button
                        onClick={() => setQuery('')}
                        aria-label="Aramayı temizle"
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-main"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>
                  {query && (
                    <p className="mt-2 font-body text-xs text-text-muted">
                      <span className="font-semibold text-text-main">{totalItems}</span> sonuç ·{' '}
                      <button onClick={() => setQuery('')} className="text-primary hover:underline">temizle</button>
                    </p>
                  )}
                </div>
              )}

              {/* Group filter */}
              {mode === 'group' && (
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-1.5 mb-2">
                    <button
                      onClick={() => setSelectedGroup(null)}
                      className={`col-span-4 h-9 flex items-center justify-center font-heading text-xs font-bold uppercase tracking-wide border transition-colors
                        ${!selectedGroup ? 'bg-primary text-dark border-primary' : 'bg-light text-text-main border-dark/10 hover:border-primary hover:text-primary'}`}
                    >
                      Tüm Gruplar
                    </button>
                    {hazardousWasteCodeGroups.map((g) => (
                      <button
                        key={g.group}
                        onClick={() => setSelectedGroup(selectedGroup === g.group ? null : g.group)}
                        title={g.title}
                        className={`h-9 flex items-center justify-center font-heading text-sm font-bold border transition-colors
                          ${selectedGroup === g.group ? 'bg-primary text-dark border-primary' : 'bg-light text-text-main border-dark/10 hover:border-primary hover:text-primary'}`}
                      >
                        {g.group}
                      </button>
                    ))}
                  </div>
                  {selectedGroup && (
                    <p className="mt-1 font-body text-xs text-text-muted">
                      <span className="font-semibold text-text-main">{totalItems}</span> kod ·{' '}
                      <button onClick={() => setSelectedGroup(null)} className="text-primary hover:underline">tümünü göster</button>
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Hazardous toggle */}
            <button
              onClick={() => setHazardousOnly(!hazardousOnly)}
              className={`w-full flex items-center justify-between border px-4 py-3 font-heading text-sm font-semibold transition-colors
                ${hazardousOnly ? 'bg-primary/10 border-primary text-primary' : 'bg-white border-dark/10 text-text-muted hover:border-primary hover:text-primary'}`}
            >
              <span>Sadece Tehlikeli (*)</span>
              <span className={`w-4 h-4 border-2 flex items-center justify-center shrink-0 transition-colors ${hazardousOnly ? 'border-primary bg-primary' : 'border-dark/20'}`}>
                {hazardousOnly && <X size={9} className="text-dark" />}
              </span>
            </button>

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
