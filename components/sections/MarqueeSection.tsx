'use client';

import { useLanguage } from '@/components/providers/LanguageProvider';
import { Factory, Leaf, Recycle, Settings, Sparkles } from 'lucide-react';

const items = [
  { label: 'Zero Waste', icon: Recycle },
  { label: 'Sustainability', icon: Leaf },
  { label: 'Engineering Excellence', icon: Settings },
  { label: 'Industrial Innovation', icon: Factory },
  { label: 'Circular Economy', icon: Sparkles },
];

export default function MarqueeSection() {
  useLanguage();
  const loopItems = [...items, ...items, ...items];

  return (
    <section className="bg-dark py-6 overflow-hidden border-y border-white/5">
      <div className="flex animate-marquee whitespace-nowrap">
        {loopItems.map((item, i) => {
          const Icon = item.icon;
          return (
          <span key={`${item.label}-${i}`} className="inline-flex items-center gap-3 px-8 font-heading text-lg font-semibold uppercase tracking-tight text-white/25">
            <Icon size={18} className="text-primary" />
            {item.label}
          </span>
          );
        })}
      </div>
    </section>
  );
}
