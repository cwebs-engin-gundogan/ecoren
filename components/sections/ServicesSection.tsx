'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Recycle, Leaf, Truck, FlaskConical } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { getLocalizedFeaturedServices } from '@/lib/i18n';

const icons = [Recycle, Leaf, FlaskConical, Truck];

export default function ServicesSection() {
  const { locale, dict } = useLanguage();
  const featuredServices = getLocalizedFeaturedServices(locale);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel className="mb-3 block">{dict.servicesSection.label}</SectionLabel>
          <h2 className="font-heading text-4xl font-semibold text-text-main">
            {dict.servicesSection.titlePrefix} <span className="text-primary">{dict.servicesSection.titleHighlight}</span> {dict.servicesSection.titleSuffix}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {featuredServices.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Link href={service.href} className="group block bg-light border border-gray-100 p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-xl font-semibold text-text-main mb-2 group-hover:text-primary transition-colors leading-tight">
                        {service.title}
                      </h3>
                      <p className="font-body text-sm text-text-main/60 leading-relaxed mb-4">
                        {service.shortDesc}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.map((tag) => (
                          <span key={tag} className="font-body text-xs bg-primary/10 text-primary px-2 py-1 rounded-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="flex items-center gap-1 text-primary font-heading font-semibold text-sm group-hover:gap-3 transition-all">
                        {dict.common.details} <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Button href="/hizmetlerimiz" variant="primary" size="lg">
            {dict.servicesSection.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
