'use client';

import { Award, CheckCircle, HeartHandshake, Shield, Sparkles, Users } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import { useLanguage } from '@/components/providers/LanguageProvider';

const icons = [Users, HeartHandshake, Shield, Sparkles, Award, CheckCircle];

export default function DegerlerimizClient() {
  const { dict } = useLanguage();
  const p = dict.pages.values;

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {p.items.map((v, i) => {
              const Icon = icons[i] ?? CheckCircle;
              return (
                <div key={v.title} className="bg-white border border-gray-100 p-6 sm:p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl font-semibold text-text-main mb-4">{v.title}</h2>
                  <p className="font-body text-sm text-text-main/70 leading-relaxed mb-6">{v.desc}</p>
                  <ul className="flex flex-col gap-2">
                    {v.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                        <span className="font-body text-xs text-text-main/60">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
