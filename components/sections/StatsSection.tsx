'use client';

import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function StatsSection() {
  const { dict } = useLanguage();
  const stats = dict.statsSection.items;

  return (
    <section className="py-20 bg-dark border-y border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-5 px-4 border-white/10 text-center lg:border-r last:border-r-0"
            >
              <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-body text-xs text-white/50 uppercase tracking-wide leading-relaxed whitespace-pre-line">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
