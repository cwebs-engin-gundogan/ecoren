'use client';

import { useMemo, useState } from 'react';
import { Filter, Search, X } from 'lucide-react';
import { hazardousWasteCodeGroups } from '@/data/waste-codes';
import { useLanguage } from '@/components/providers/LanguageProvider';

type SearchMode = 'text' | 'group';

export default function WasteCodesClient() {
  const { dict, locale } = useLanguage();
  const t = dict.pages.wasteCodes;
  const loc = locale as 'tr' | 'en' | 'de';

  const [mode, setMode] = useState<SearchMode>('text');
  const [query, setQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

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
          if (!q) return true;
          return item.code.toLowerCase().includes(q) || item.description[loc].toLowerCase().includes(q);
        }),
      }))
      .filter((g) => g.items.length > 0);
  }, [query, selectedGroup]);

  const totalItems = filtered.reduce((s, g) => s + g.items.length, 0);
  const hasActiveFilter = query || selectedGroup;

  const clearAll = () => {
    setQuery('');
    setSelectedGroup(null);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-dark pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(139,195,74,0.20),transparent_38%),radial-gradient(circle_at_top_right,rgba(139,195,74,0.18),transparent_34%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-primary/40" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-primary mb-4">
              {t.heroLabel}
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              {t.heroTitle}
            </h1>
            <p className="font-body text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl">
              {t.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-10 items-start">

            {/* Sidebar */}
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
                    {t.searchByText}
                  </button>
                  <button
                    onClick={() => switchMode('group')}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-3 font-heading text-xs font-bold uppercase tracking-wide whitespace-nowrap border-l border-dark/10 transition-colors
                      ${mode === 'group' ? 'bg-primary text-dark' : 'text-text-muted hover:text-text-main hover:bg-dark/5'}`}
                  >
                    <Filter size={13} className="shrink-0" />
                    {t.searchByGroup}
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
                        placeholder={t.placeholder}
                        autoFocus
                        className="w-full border border-dark/15 bg-light pl-9 pr-8 py-2.5 font-body text-sm text-text-main placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                      />
                      {query && (
                        <button
                          onClick={() => setQuery('')}
                          aria-label={t.clearAriaLabel}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-main"
                        >
                          <X size={14} />
                        </button>
                      )}
                    </div>
                    {query && (
                      <p className="mt-2 font-body text-xs text-text-muted">
                        <span className="font-semibold text-text-main">{totalItems}</span> {t.results} ·{' '}
                        <button onClick={() => setQuery('')} className="text-primary hover:underline">{t.clear}</button>
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
                        {t.allGroups}
                      </button>
                      {hazardousWasteCodeGroups.map((g) => (
                        <button
                          key={g.group}
                          onClick={() => setSelectedGroup(selectedGroup === g.group ? null : g.group)}
                          title={g.title[loc]}
                          className={`h-9 flex items-center justify-center font-heading text-sm font-bold border transition-colors
                            ${selectedGroup === g.group ? 'bg-primary text-dark border-primary' : 'bg-light text-text-main border-dark/10 hover:border-primary hover:text-primary'}`}
                        >
                          {g.group}
                        </button>
                      ))}
                    </div>
                    {selectedGroup && (
                      <p className="mt-1 font-body text-xs text-text-muted">
                        <span className="font-semibold text-text-main">{totalItems}</span> {t.codes} ·{' '}
                        <button onClick={() => setSelectedGroup(null)} className="text-primary hover:underline">{t.showAll}</button>
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Result count + clear */}
              <div className="bg-dark/5 border border-dark/10 px-5 py-4 flex items-center justify-between">
                <span className="font-body text-sm text-text-muted">
                  <span className="font-heading font-bold text-text-main">{totalItems}</span> {t.results}
                </span>
                {hasActiveFilter && (
                  <button
                    onClick={clearAll}
                    className="flex items-center gap-1.5 font-heading text-xs font-semibold uppercase tracking-wide text-primary hover:underline"
                  >
                    <X size={12} /> {t.clear}
                  </button>
                )}
              </div>
            </aside>

            {/* Results */}
            <div>
              {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center border border-dark/10 bg-white">
                  <Search size={40} className="text-dark/20 mb-4" />
                  <p className="font-heading text-lg font-semibold text-text-main mb-2">{t.noResults}</p>
                  <p className="font-body text-sm text-text-muted mb-6">{t.noResultsDesc}</p>
                  <button onClick={clearAll} className="font-heading text-sm font-semibold text-primary hover:underline">
                    {t.clearFilters}
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
                              {group.group} {t.wasteCode}
                            </p>
                            <h3 className="mt-2 font-heading text-lg sm:text-2xl font-bold text-white leading-snug">
                              {group.title[loc]}
                            </h3>
                          </div>
                          <span className="shrink-0 border border-primary/35 px-3 py-2 font-heading text-xs font-bold uppercase tracking-widest text-primary">
                            {group.items.length} {t.code}
                          </span>
                        </div>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left">
                          <thead>
                            <tr className="bg-dark/5">
                              <th className="w-32 px-4 py-3 sm:px-6 font-heading text-xs font-bold uppercase tracking-widest text-text-main">
                                {t.code}
                              </th>
                              <th className="px-4 py-3 sm:px-6 font-heading text-xs font-bold uppercase tracking-widest text-text-main">
                                {t.description}
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
                                  <Highlight text={item.description[loc]} query={query} />
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
