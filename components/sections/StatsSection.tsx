'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { stats } from '@/data/stats';

export default function StatsSection() {
  return (
    <section className="py-24 bg-dark border-y border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel className="mb-3 block">Rakamlarla ECOREN</SectionLabel>
          <h2 className="font-heading text-4xl font-semibold text-white">
            <span className="text-primary">10 Yılın</span> Özeti
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border border-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex flex-col items-center justify-center py-10 px-4 border-b border-r border-white/10 text-center hover:bg-white/5 transition-colors"
            >
              <div className="font-heading text-4xl font-bold text-primary mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-body text-xs text-white/50 uppercase tracking-wide leading-relaxed whitespace-pre-line">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
