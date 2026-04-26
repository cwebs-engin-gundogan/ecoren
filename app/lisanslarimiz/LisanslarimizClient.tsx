'use client';

import { Award, CheckCircle, FileText } from 'lucide-react';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';
import { useLanguage } from '@/components/providers/LanguageProvider';

const statIcons = [Award, CheckCircle, FileText, Award];

export default function LisanslarimizClient() {
  const { dict } = useLanguage();
  const p = dict.pages.licenses;

  return (
    <div className="pt-16">
      <section className="bg-dark py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel className="mb-4 block">{p.sectionLabel}</SectionLabel>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase mb-6 leading-none">
            {p.title}
          </h1>
          <p className="font-body text-base text-white/60 max-w-2xl leading-relaxed">{p.subtitle}</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {p.stats.map((s, i) => {
              const Icon = statIcons[i] ?? Award;
              return (
                <div key={s.l} className="bg-white border border-gray-100 p-5 sm:p-6 text-center">
                  <Icon size={24} className="text-primary mx-auto mb-3" />
                  <div className="font-heading text-3xl font-bold text-primary mb-1">{s.v}</div>
                  <div className="font-body text-xs text-text-main/50 uppercase tracking-wide">{s.l}</div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.items.map((l) => (
              <div key={l.title} className="bg-white border border-gray-100 p-6 sm:p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                  <Award size={22} className="text-primary" />
                </div>
                <h2 className="font-heading text-lg font-semibold text-text-main mb-2 leading-tight">{l.title}</h2>
                <p className="font-body text-xs text-primary mb-3 uppercase tracking-wide">{l.authority}</p>
                <p className="font-body text-sm text-text-main/60 leading-relaxed">{l.desc}</p>
                <div className="mt-4 flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary" />
                  <span className="font-body text-xs text-primary">{p.active}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-dark p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="font-heading text-3xl font-semibold text-white mb-4">{p.ctaTitle}</h2>
            <p className="font-body text-base text-white/60 max-w-xl mx-auto mb-8">{p.ctaDesc}</p>
            <Link href="/bize-ulasin#iletisim-formu" className="inline-flex items-center gap-2 bg-primary text-dark font-heading font-semibold px-8 py-3 hover:bg-primary/90 transition-colors">
              {p.ctaLabel}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
