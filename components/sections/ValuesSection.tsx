'use client';

import { motion } from 'framer-motion';
import { Leaf, RefreshCw, Shield, Award } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

const values = [
  {
    icon: Leaf,
    title: 'Sürdürülebilirlik',
    desc: 'Tüm operasyonlarımızda çevresel sürdürülebilirliği ön planda tutarak gelecek nesillere yaşanabilir bir dünya bırakmayı hedefliyoruz.',
  },
  {
    icon: RefreshCw,
    title: 'Döngüsel Ekonomi',
    desc: "Atıkları hammadde kaynağına dönüştürerek döngüsel ekonomi prensiplerine uygun, sıfır atık hedefli iş modelleri geliştiriyoruz.",
  },
  {
    icon: Shield,
    title: 'Çevre Sorumluluğu',
    desc: 'Çevre mevzuatına tam uyum ve proaktif çevre yönetimi anlayışıyla sektörde örnek bir çevre sorumluluğu standardı oluşturuyoruz.',
  },
  {
    icon: Award,
    title: 'Güvenilirlik',
    desc: 'Lisanslı tesisler, sertifikalı ekip ve şeffaf süreç yönetimiyle müşterilerimize her adımda güvenilir hizmet sunuyoruz.',
  },
];

export default function ValuesSection() {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel className="mb-3 block">Değerlerimiz</SectionLabel>
          <h2 className="font-heading text-4xl font-semibold text-white">
            Bizi <span className="text-primary">Farklı Kılan</span> Değerler
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="border border-white/10 p-8 hover:border-primary/50 transition-all duration-300 group"
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
