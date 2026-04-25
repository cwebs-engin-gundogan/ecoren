'use client';

import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function VisionSection() {
  const { dict } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel className="mb-3 block">{dict.visionSection.label}</SectionLabel>
          <h2 className="font-heading text-4xl font-semibold text-text-main">
            {dict.visionSection.title.split('&')[0]}<span className="text-primary">&</span>{dict.visionSection.title.split('&')[1]}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-dark p-6 sm:p-8 lg:p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
            <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Target size={26} className="text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-white mb-4 uppercase tracking-wide">{dict.visionSection.missionTitle}</h3>
            <p className="font-body text-base text-white/70 leading-relaxed">
              {dict.visionSection.missionBody}
            </p>
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {dict.visionSection.missionTags.map((l) => (
                  <div key={l}>
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mb-2" />
                    <span className="font-body text-xs text-white/40 uppercase tracking-wide">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-primary p-6 sm:p-8 lg:p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-dark/5 rounded-bl-full" />
            <div className="w-14 h-14 bg-dark/10 flex items-center justify-center mb-6 group-hover:bg-dark/20 transition-colors">
              <Eye size={26} className="text-dark" />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-dark mb-4 uppercase tracking-wide">{dict.visionSection.visionTitle}</h3>
            <p className="font-body text-base text-dark/80 leading-relaxed">
              {dict.visionSection.visionBody}
            </p>
            <div className="mt-8 pt-8 border-t border-dark/20">
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {dict.visionSection.visionTags.map((l) => (
                  <div key={l}>
                    <div className="w-1.5 h-1.5 bg-dark rounded-full mb-2" />
                    <span className="font-body text-xs text-dark/50 uppercase tracking-wide">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
