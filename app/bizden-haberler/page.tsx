'use client';

import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function BizdenHaberlerPage() {
  const { dict } = useLanguage();
  const news = dict.news;

  return (
    <div className="pt-16">
      <section className="bg-dark py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel className="mb-4 block">{dict.pages.news.label}</SectionLabel>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase mb-6 leading-none">
            {dict.pages.news.titlePrefix} <span className="text-primary">{dict.pages.news.titleHighlight}</span>
          </h1>
          <p className="font-body text-base text-white/60 max-w-2xl leading-relaxed">
            {dict.pages.news.desc}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((item) => (
              <Link key={item.slug} href={`/bizden-haberler/${item.slug}`} className="group block bg-white border border-gray-100 p-6 sm:p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={14} className="text-primary" />
                  <span className="font-body text-xs text-text-main/50">{item.date}</span>
                </div>
                <h2 className="font-heading text-2xl font-semibold text-text-main mb-4 group-hover:text-primary transition-colors leading-tight">
                  {item.title}
                </h2>
                <p className="font-body text-sm text-text-main/60 leading-relaxed mb-6">
                  {item.excerpt}
                </p>
                <span className="flex items-center gap-1 text-primary font-heading font-semibold text-sm group-hover:gap-3 transition-all">
                  {dict.common.readMore} <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
