'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import { news } from '@/data/news';

export default function NewsSection() {
  const latest = news.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <SectionLabel className="mb-3 block">Haberler</SectionLabel>
            <h2 className="font-heading text-4xl font-semibold text-text-main">
              Bizden <span className="text-primary">Haberler</span>
            </h2>
          </div>
          <Button href="/bizden-haberler" variant="outline" className="text-dark border-dark">
            Tüm Haberler
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latest.map((item, i) => (
            <motion.article
              key={item.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group"
            >
              <Link href={`/bizden-haberler/${item.slug}`} className="block">
                <div className="bg-light border border-gray-100 p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar size={14} className="text-primary" />
                    <span className="font-body text-xs text-text-main/50">{item.date}</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-text-main mb-3 group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-text-main/60 leading-relaxed flex-1 mb-6">
                    {item.excerpt}
                  </p>
                  <span className="flex items-center gap-1 text-primary font-heading font-semibold text-sm group-hover:gap-3 transition-all">
                    Devamını Oku <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
