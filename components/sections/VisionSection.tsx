'use client';

import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

export default function VisionSection() {
  return (
    <section className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel className="mb-3 block">Kurumsal Kimlik</SectionLabel>
          <h2 className="font-heading text-4xl font-semibold text-text-main">
            Misyon <span className="text-primary">&</span> Vizyon
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-dark p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
            <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Target size={26} className="text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-white mb-4 uppercase tracking-wide">Misyonumuz</h3>
            <p className="font-body text-base text-white/70 leading-relaxed">
              Endüstriyel atıkların çevreye zarar vermeden geri kazanılması ve bertarafı konusunda en yüksek standartlarda hizmet sunmak; müşterilerimizin çevre mevzuatına uyumunu sağlamak ve onların sürdürülebilirlik hedeflerine ulaşmalarına destek olmak.
            </p>
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex gap-6">
                {[['Mevzuat Uyumu', ''], ['Lisanslı Hizmet', ''], ['Güvenilir Çözüm', '']].map(([l]) => (
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
            className="bg-primary p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-dark/5 rounded-bl-full" />
            <div className="w-14 h-14 bg-dark/10 flex items-center justify-center mb-6 group-hover:bg-dark/20 transition-colors">
              <Eye size={26} className="text-dark" />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-dark mb-4 uppercase tracking-wide">Vizyonumuz</h3>
            <p className="font-body text-base text-dark/80 leading-relaxed">
              Döngüsel ekonomi ve sıfır atık ilkelerini benimseyen Türkiye&apos;nin en yenilikçi ve güvenilir entegre atık yönetimi firması olmak; uluslararası standartlarda hizmet sunarak çevre dostu endüstriyel dönüşüme öncülük etmek.
            </p>
            <div className="mt-8 pt-8 border-t border-dark/20">
              <div className="flex gap-6">
                {[['Sıfır Atık', ''], ['Döngüsel Ekonomi', ''], ['Yeşil Dönüşüm', '']].map(([l]) => (
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
