'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.7 } },
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-darker" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#B4DD6C 1px, transparent 1px), linear-gradient(90deg, #B4DD6C 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left side */}
          <div className="lg:w-3/5">
            <motion.div variants={fadeUp(0)} initial="hidden" animate="visible">
              <span className="font-body text-xs uppercase tracking-widest text-primary mb-4 block">. ECOREN — Çevre Mühendisliği</span>
            </motion.div>

            <motion.h1
              variants={fadeUp(0.15)}
              initial="hidden"
              animate="visible"
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-white leading-none mb-6"
            >
              SÜRDÜRÜLEBİLİR<br />
              <span className="text-primary">GELECEK</span> İÇİN<br />
              ATIK YÖNETİMİ
            </motion.h1>

            <motion.p
              variants={fadeUp(0.3)}
              initial="hidden"
              animate="visible"
              className="font-body text-base text-white/70 leading-relaxed max-w-xl mb-10"
            >
              ECOREN olarak; tehlikeli ve tehlikesiz atıkların geri kazanımı, bertarafı ve taşınmasından danışmanlık hizmetlerine kadar 21 farklı kategoride profesyonel çözümler sunuyoruz.
            </motion.p>

            <motion.div
              variants={fadeUp(0.45)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <Button href="/hizmetlerimiz" variant="primary" size="lg">
                Hizmetlerimiz
              </Button>
              <Button href="/bize-ulasin" variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                Bize Ulaşın
              </Button>
            </motion.div>
          </div>

          {/* Right side — decorative stats card */}
          <motion.div
            variants={fadeUp(0.6)}
            initial="hidden"
            animate="visible"
            className="lg:w-2/5 w-full"
          >
            <div className="border border-primary/30 bg-white/5 backdrop-blur-sm p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '21+', label: 'Hizmet Kategorisi' },
                  { value: '10+', label: 'Yıllık Deneyim' },
                  { value: '500+', label: 'Memnun Müşteri' },
                  { value: '1000 ton', label: 'Aylık Yönetim' },
                ].map((s) => (
                  <div key={s.label} className="text-center py-4 border border-white/10">
                    <div className="font-heading text-3xl font-bold text-primary mb-1">{s.value}</div>
                    <div className="font-body text-xs text-white/50 uppercase tracking-wide">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="font-body text-xs text-white/60">Türkiye genelinde hizmet veriyoruz</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-light to-transparent" />
    </section>
  );
}
