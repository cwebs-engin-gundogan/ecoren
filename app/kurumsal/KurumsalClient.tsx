'use client';

import Link from 'next/link';
import { ArrowRight, Users, Target, Heart } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import { useLanguage } from '@/components/providers/LanguageProvider';

const icons = [Users, Target, Heart];
const hrefs = ['/kurumsal/hakkimizda', '/kurumsal/misyon-vizyon', '/kurumsal/degerlerimiz'];

export default function KurumsalClient() {
  const { dict } = useLanguage();
  const t = dict.pages.corporate;

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-dark py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel className="mb-4 block">{t.sectionLabel}</SectionLabel>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase mb-6 leading-none">
            {t.title.split(' ').slice(0, -1).join(' ')} <span className="text-primary">{t.title.split(' ').at(-1)}</span>
          </h1>
          <p className="font-body text-base text-white/60 max-w-2xl leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Sub Pages */}
      <section className="py-16 sm:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.subPages.map((p, i) => {
              const Icon = icons[i];
              return (
                <Link key={hrefs[i]} href={hrefs[i]} className="group block bg-white border border-gray-100 p-6 sm:p-8 lg:p-10 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl font-semibold text-text-main mb-3 group-hover:text-primary transition-colors">{p.title}</h2>
                  <p className="font-body text-sm text-text-main/60 leading-relaxed mb-6">{p.desc}</p>
                  <span className="flex items-center gap-1 text-primary font-heading font-semibold text-sm group-hover:gap-3 transition-all">
                    {t.explore} <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
