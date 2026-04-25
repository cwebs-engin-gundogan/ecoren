'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function AboutSection() {
  const { dict } = useLanguage();

  return (
    <section className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left text */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel className="mb-3 block">{dict.about.label}</SectionLabel>
            <h2 className="font-heading text-4xl font-semibold text-text-main mb-6 leading-tight">
              {dict.about.titlePrefix}<br />
              <span className="text-primary">{dict.about.titleHighlight}</span> {dict.about.titleSuffix}
            </h2>
            <p className="font-body text-base text-text-main/70 leading-relaxed mb-6">
              {dict.about.body1}
            </p>
            <p className="font-body text-base text-text-main/70 leading-relaxed mb-8">
              {dict.about.body2}
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {dict.about.points.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-primary shrink-0" />
                  <span className="font-body text-sm text-text-main/80">{p}</span>
                </li>
              ))}
            </ul>
            <Button href="/kurumsal/hakkimizda" variant="primary">
              {dict.about.cta}
            </Button>
          </motion.div>

          {/* Right graphic */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="w-full aspect-square max-w-lg mx-auto bg-dark flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#B4DD6C 1px, transparent 1px), linear-gradient(90deg, #B4DD6C 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="relative z-10 text-center p-8">
                  <div className="font-heading text-8xl font-bold text-primary/20 leading-none mb-4">10+</div>
                  <div className="font-heading text-xl font-semibold text-white mb-2">{dict.about.cardTitle}</div>
                  <div className="font-body text-sm text-white/50">{dict.about.cardSubtitle}</div>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {dict.about.cardStats.map((s) => (
                      <div key={s.l} className="border border-white/10 p-3">
                        <div className="font-heading text-2xl font-bold text-primary">{s.v}</div>
                        <div className="font-body text-xs text-white/50">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Accent border */}
              <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border-2 border-primary/30 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
