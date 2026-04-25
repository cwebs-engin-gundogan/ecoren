'use client';

import { useLanguage } from '@/components/providers/LanguageProvider';
import { Factory, Leaf, Recycle, Settings, Sparkles } from 'lucide-react';

const icons = [Recycle, Leaf, Settings, Factory, Sparkles];

export default function MarqueeSection() {
  const { dict } = useLanguage();
  const items = dict.marquee.map((label, i) => ({ label, icon: icons[i % icons.length] }));
  const loopItems = [...items, ...items, ...items];

  return (
    <section className="bg-dark py-6 overflow-hidden border-y border-white/5">
      <div className="flex animate-marquee whitespace-nowrap">
        {loopItems.map((item, i) => {
          const Icon = item.icon;
          return (
          <span key={`${item.label}-${i}`} className="inline-flex items-center gap-2 px-4 font-heading text-sm font-semibold uppercase tracking-tight text-white/25 sm:gap-3 sm:px-6 sm:text-base lg:px-8 lg:text-lg">
            <Icon size={18} className="text-primary" />
            {item.label}
          </span>
          );
        })}
      </div>
    </section>
  );
}
