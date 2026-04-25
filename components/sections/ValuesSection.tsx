'use client';

import { motion } from 'framer-motion';
import { Leaf, RefreshCw, Shield, Award } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import { useLanguage } from '@/components/providers/LanguageProvider';

const icons = [Leaf, RefreshCw, Shield, Award];

export default function ValuesSection() {
  const { dict } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel className="mb-3 block">{dict.valuesSection.label}</SectionLabel>
          <h2 className="font-heading text-4xl font-semibold text-white">
            {dict.valuesSection.titlePrefix} <span className="text-primary">{dict.valuesSection.titleHighlight}</span> {dict.valuesSection.titleSuffix}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.valuesSection.items.map((v, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="border border-white/10 p-5 sm:p-8 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3">{v.title}</h3>
                <p className="font-body text-sm text-white/60 leading-relaxed">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
