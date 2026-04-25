'use client';

import Button from '@/components/ui/Button';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function HeroSection() {
  const { dict } = useLanguage();

  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-start overflow-hidden pt-24 pb-16 sm:pt-28 lg:min-h-screen lg:items-center lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-darker" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#B4DD6C 1px, transparent 1px), linear-gradient(90deg, #B4DD6C 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16">
          {/* Left side */}
          <div className="lg:w-3/5">
            <div>
              <span className="font-body text-xs uppercase tracking-widest text-primary mb-4 block">{dict.hero.eyebrow}</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-white leading-none mb-6">
              {dict.hero.line1}<br />
              <span className="text-primary">{dict.hero.highlight}</span> {dict.hero.line2}<br />
              {dict.hero.line3}
            </h1>

            <p className="font-body text-sm sm:text-base text-white/70 leading-relaxed max-w-xl mb-8 lg:mb-10">
              {dict.hero.body}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="/hizmetlerimiz" variant="primary" size="lg">
                {dict.hero.services}
              </Button>
              <Button href="/bize-ulasin" variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                {dict.hero.contact}
              </Button>
            </div>
          </div>

          {/* Right side — decorative stats card */}
          <div className="lg:w-2/5 w-full">
            <div className="border border-primary/30 bg-white/5 backdrop-blur-sm p-5 sm:p-8">
              <div className="grid grid-cols-2 gap-3 sm:gap-6">
                {dict.hero.stats.map((s) => (
                  <div key={s.label} className="text-center py-4 px-2 border border-white/10">
                    <div className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-1">{s.value}</div>
                    <div className="font-body text-xs text-white/50 uppercase tracking-wide">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="font-body text-xs text-white/60">{dict.hero.serviceArea}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-light to-transparent" />
    </section>
  );
}
