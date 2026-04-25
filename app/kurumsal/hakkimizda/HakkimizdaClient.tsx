'use client';

import { CheckCircle, Leaf, Recycle, Zap } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/components/providers/LanguageProvider';

const iconMap = [Recycle, Leaf, Zap, CheckCircle];

export default function HakkimizdaClient() {
  const { dict } = useLanguage();
  const p = dict.pages.about;
  const a = dict.about;

  return (
    <div className="pt-16">
      <section className="bg-dark py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel className="mb-4 block">{p.sectionLabel}</SectionLabel>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase mb-6 leading-none">
            ECOREN <span className="text-primary">{p.title}</span>
          </h1>
          <p className="font-body text-base text-white/60 max-w-2xl leading-relaxed">{p.subtitle}</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-4xl font-semibold text-text-main mb-6">
                {a.titlePrefix} <span className="text-primary">{a.titleHighlight}</span> {a.titleSuffix}
              </h2>
              <p className="font-body text-base text-text-main/70 leading-relaxed mb-6">{a.body1}</p>
              <p className="font-body text-base text-text-main/70 leading-relaxed mb-8">{a.body2}</p>
              <ul className="flex flex-col gap-3 mb-8">
                {a.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-text-main/70">{point}</span>
                  </li>
                ))}
              </ul>
              <Button href="/bize-ulasin" variant="primary">{p.cta}</Button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {p.stats.map((s, i) => {
                  const Icon = iconMap[i] ?? CheckCircle;
                  return (
                    <div key={s.l} className="bg-white border border-gray-100 p-5 sm:p-6 text-center">
                      <Icon size={24} className="text-primary mx-auto mb-3" />
                      <div className="font-heading text-3xl font-bold text-primary mb-1">{s.v}</div>
                      <div className="font-body text-xs text-text-main/50 uppercase tracking-wide">{s.l}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
